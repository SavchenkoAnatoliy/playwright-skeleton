const { test, expect } = require('@playwright/test');

//only (work for more than 1 test)  
test('Test1', async ({ page }) => {
    console.log('this is test 1 running...')
  });


//skip  
test.skip('Test2', async ({ page }) => {
  console.log('this is test 2 running...')
});

//skip based on some condition
test('Test3', async ({ page, browserName }) => {
  console.log('this is test 3 running...')
  if(browserName=='chromium'){
    test.skip()
  }
});

//fixme - test will be skiped till current annotation will be removed
test('Test4', async ({ page }) => {
  test.fixme()
  console.log('this is test 4 running...')

});

//fail - test will fail even if it's passed (can be conditional)
test('Test5', async ({ page }) => {
  test.fail()
  console.log('this is test 5 running...')
  expect(1).toBe(1);
});

//slow - moltiplica il tempo di temiout x3 (da 30sec di default a 1min e 30sec)
test('Test6', async ({ page }) => {
  //test.slow();
  test.setTimeout(5000) // setTimeout mette il timeout per un tempo indicato
  await page.goto('https://demoblaze.com/');
  console.log('this is test 6 running...')
});