import { chromium } from '@playwright/test';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage();
for(const width of [390,1440]){
  await page.setViewportSize({width,height:900});
  for(const route of ['/','/profile/','/esports/']){
    await page.goto(`http://127.0.0.1:4322${route}`,{waitUntil:'networkidle'});
    await page.evaluate(async()=>{
      document.querySelectorAll('img').forEach(image=>image.loading='eager');
      await document.fonts.ready;
      await Promise.all([...document.images].map(image=>image.decode().catch(()=>{})));
      window.scrollTo({top:0,behavior:'instant'});
      await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);
    });
    const control=page.locator('.motion-control');
    if(await control.isVisible() && await control.getAttribute('aria-pressed')==='false') await control.click();
    const file=route==='/'?(width===1440?'desktop.png':'mobile.png'):`${route.slice(1,-1)}-${width}.png`;
    await page.screenshot({path:`.impeccable/review/${route==='/'?'home':route.slice(1,-1)}-top-${width}.png`,animations:'disabled'});
    const height=await page.evaluate(()=>document.documentElement.scrollHeight);
    await page.setViewportSize({width,height});
    await page.waitForTimeout(250);
    await page.evaluate(async()=>{window.scrollTo({top:0,behavior:'instant'});await Promise.all([...document.images].map(image=>image.decode().catch(()=>{})));await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);});
    await page.screenshot({path:`.impeccable/review/${file}`,animations:'disabled'});
    await page.setViewportSize({width,height:900});
  }
}
await browser.close();console.log('Captured desktop/mobile Home, Profile and Esports views.');
