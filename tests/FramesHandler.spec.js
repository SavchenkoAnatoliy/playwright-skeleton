import { test, expect } from '@playwright/test';

//By default all alerts are dismissed on Playwright
test('Frame Handler test', async ({ page }) => {
    //Open URL
  await page.goto('https://ui.vision/demo/webtest/frames/');

  //total frames
  const allFrames = await page.frames()
  console.log("Number of frames: ", allFrames.length)

  //approach 1: using name or url
  //const frame1 = await page.frame('nameOfFrame') // If name is present 
  const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
  await frame1.fill("[name='mytext1']", 'Hello from Anatoly');

  //approach 2 - ussign frame locator
  await page.frameLocator("frame[src='frame_5.html']").locator("[name='mytext5']").fill("Hello from Anatoly here")

  await page.waitForTimeout(5000);

});