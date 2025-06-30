import { test, expect } from '@playwright/test';

test('Drug And Drop test', async ({ page }) => {
  //Open URL
  await page.goto('http://testautomationpractice.blogspot.com/');
 
  const elmenetToMove = await page.locator('#draggable')
  const whereToDrop = await page.locator('#droppable')

  //Perform Drug And Drop
  //Approach 1
  /*await elmenetToMove.hover();
  await page.mouse.down();

  await whereToDrop.hover();
  await page.mouse.up();*/

  //Approach 2
  await elmenetToMove.dragTo(whereToDrop);

  await page.waitForTimeout(5000)

});