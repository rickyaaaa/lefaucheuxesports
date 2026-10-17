import { chromium } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const manifest=JSON.parse(await readFile('docs/sources/drive/manifest.json','utf8'));
assert.equal(manifest.assets.length,11);
for(const asset of manifest.assets){
  const bytes=await readFile(asset.path);assert.equal(bytes.length,asset.size);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256,`Original changed: ${asset.name}`);
}
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const page=await browser.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
const results=[];
for(const width of [360,390,768,1440]){
  await page.setViewportSize({width,height:900});
  const response=await page.goto('http://127.0.0.1:4322/services/',{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await page.evaluate(async()=>{document.querySelectorAll('img').forEach(image=>image.loading='eager');await document.fonts.ready;await Promise.all([...document.images].map(image=>image.decode()));});
  const checks=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.querySelectorAll('.jersey-showcase img')].map(img=>({loaded:img.complete&&img.naturalWidth>0,alt:img.alt})),h1:document.querySelectorAll('h1').length}));
  assert.equal(checks.overflow,false,`Overflow at ${width}`);assert.equal(checks.h1,1);assert.equal(checks.images.length,3);
  checks.images.forEach(img=>{assert.ok(img.loaded);assert.ok(img.alt)});results.push({width,...checks});
  if([390,1440].includes(width)){
    await page.locator('#jersey').scrollIntoViewIfNeeded();await page.waitForTimeout(200);
    await page.screenshot({path:`.impeccable/review/jersey-top-${width}.png`,animations:'disabled'});
    const height=await page.evaluate(()=>document.documentElement.scrollHeight);await page.setViewportSize({width,height});await page.waitForTimeout(250);
    await page.evaluate(async()=>{window.scrollTo({top:0,behavior:'instant'});await Promise.all([...document.images].map(image=>image.decode()));await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);});
    await page.screenshot({path:`.impeccable/review/services-${width}.png`,animations:'disabled'});
  }
}
await page.goto('http://127.0.0.1:4322/services/');
await page.getByRole('link',{name:'Enquire about jerseys'}).click();await page.waitForURL('**/join-us/?interest=jersey');
assert.equal(await page.locator('#interest').inputValue(),'jersey');assert.deepEqual(errors,[]);
await writeFile('.impeccable/review/jersey-qa.json',JSON.stringify({originalsVerified:11,results,errors,inquiry:'jersey preselection passed'},null,2));
await browser.close();console.log('Passed 11 original-file checksum checks, 4 Services widths, 3 jersey images and inquiry routing.');
