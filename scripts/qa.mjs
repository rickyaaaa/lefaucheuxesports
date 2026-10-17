import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = process.env.QA_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless:true });
const page = await browser.newPage();
const errors=[]; page.on('pageerror',error=>errors.push(error.message));
const routes=['/','/profile/','/esports/','/achievements/','/news/','/tournaments/','/services/','/join-us/','/404.html'];
const results=[];
await mkdir('.impeccable/review',{recursive:true});
for(const width of [360,390,768,1024,1440,1920]){
  await page.setViewportSize({width,height:900});
  for(const route of routes){
    const response=await page.goto(base+route,{waitUntil:'networkidle'});
    assert.ok(response.status()<400 || route==='/404.html',`${route} HTTP ${response.status()}`);
    await page.evaluate(()=>document.fonts.ready);
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.evaluate(async()=>{window.scrollTo({top:0,behavior:'instant'});await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);});
    const checks=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,missingAlt:[...document.images].filter(image=>!image.hasAttribute('alt')).length,brokenImages:[...document.images].filter(image=>image.complete&&image.naturalWidth===0).map(image=>image.src)}));
    assert.equal(checks.overflow,false,`${route} overflow at ${width}`);
    assert.equal(checks.h1,1,`${route} must have one H1`);
    assert.equal(checks.missingAlt,0,`${route} missing image alt`);
    assert.deepEqual(checks.brokenImages,[],`${route} broken image`);
    results.push({route,width,...checks});
  }
}
await page.setViewportSize({width:390,height:844});
await page.goto(base+'/');
const toggle=page.locator('.menu-toggle');
await toggle.click(); assert.equal(await toggle.getAttribute('aria-expanded'),'true');
await page.keyboard.press('Escape'); assert.equal(await toggle.getAttribute('aria-expanded'),'false');
assert.equal(await toggle.evaluate(el=>el===document.activeElement),true);
await toggle.click();await page.locator('#main-navigation').getByRole('link',{name:'Esports',exact:true}).click();
await page.waitForURL('**/esports/');
for(const id of ['mpl-sg','id-ladies']) assert.equal(await page.locator(`#${id}`).count(),1);
await page.setViewportSize({width:1440,height:900});
const card=page.locator('.player-card').first();await card.scrollIntoViewIfNeeded();
const before=await card.boundingBox();const captionBefore=await card.locator('figcaption').boundingBox();await card.hover();await page.waitForTimeout(650);
assert.deepEqual(await card.boundingBox(),before,'Player hover moves card');assert.deepEqual(await card.locator('figcaption').boundingBox(),captionBefore,'Player hover moves caption');
assert.notEqual(await card.locator('img').evaluate(el=>getComputedStyle(el).transform),'none');
await page.goto(base+'/profile/');
assert.equal(await page.locator('.motion-control').count(),0,'Motion control must not be mounted');
assert.equal(await page.locator('.page-hero .ambience-trace').evaluate(el=>getComputedStyle(el).animationName),'none','Atmosphere must remain static');
await page.emulateMedia({reducedMotion:'reduce'});
await page.goto(base+'/esports/');
assert.ok(parseFloat(await page.locator('.player-card img').first().evaluate(el=>getComputedStyle(el).transitionDuration))<.01,'Reduced motion not respected');
for(const interest of ['website-basic','website-standard','website-premium','jersey','academy','tournaments']){
  await page.goto(base+`/join-us/?interest=${interest}`);assert.equal(await page.locator('#interest').inputValue(),interest);
  const href=await page.locator('#email-enquiry').getAttribute('href');assert.ok(href.startsWith('mailto:lefaucheux.esports@gmail.com?'));
  assert.ok(decodeURIComponent(href).includes(await page.locator('#interest option:checked').textContent()));
}
await page.goto(base+'/join-us/?interest=untrusted');assert.equal(await page.locator('#interest').inputValue(),'sponsors');
await page.goto(base+'/news/');await page.getByRole('button',{name:'Partnership',exact:true}).click();assert.equal(await page.getByRole('button',{name:'Partnership',exact:true}).getAttribute('aria-pressed'),'true');assert.ok(await page.locator('#empty-copy').textContent());
// Check every internal destination, including fragments and assets.
const checked=new Set();
for(const route of routes){
  await page.goto(base+route);
  const links=await page.locator('a[href]').evaluateAll(links=>links.map(a=>a.getAttribute('href')).filter(href=>href?.startsWith('/')||href?.startsWith('#')));
  for(const href of links){const url=new URL(href,base+route);const key=url.pathname+url.hash;if(checked.has(key))continue;checked.add(key);const response=await page.request.get(url.href);assert.ok(response.ok(),`Broken link ${key}`);if(url.hash){await page.goto(url.href);assert.equal(await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count(),1,`Missing anchor ${key}`);}}
}
assert.deepEqual(errors,[],'Browser errors');
const staticPage=await browser.newPage({javaScriptEnabled:false});
await staticPage.goto(base+'/profile/');
assert.equal(await staticPage.locator('.page-hero .ambience-trace').evaluate(el=>getComputedStyle(el).animationName),'none','Without JavaScript atmosphere must stay static');
assert.equal(await staticPage.locator('.motion-control').isVisible(),false);
assert.equal(await staticPage.locator('h1').count(),1);
await staticPage.close();
await writeFile('.impeccable/review/qa-results.json',JSON.stringify({results,internalDestinations:checked.size,errors,interactions:'mobile menu, Escape, team anchors, stable hover, static atmosphere, no motion control, reduced motion, no-JS static fallback, interest allowlist, mailto subjects, news filters'},null,2));
console.log(`Passed ${results.length} responsive page checks, ${checked.size} internal destinations and interaction checks.`);
await browser.close();

