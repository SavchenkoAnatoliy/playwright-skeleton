const { test, expect } = require('@playwright/test');


/*comand exapmplet - npx playwright test tests/Tags.spec.js --project chromium --headed --grep "@smokeTest"
  
------------------POWER SHELL---------------

Run tests containing both tags (logical AND operator) using regex lookaheads:
    npx playwright test tests/Tags.spec.js --project chromium --headed --grep "(?=.*@smokeTest)(?=.*@regressionTest)"

  To run tests containing either tag (logical OR operator):
    npx playwright test --grep --% "@fast^|@slow"
*/

  test('Test1@smokeTest', async ({ page }) => {
    console.log('this is test 1 running...')
  });

  test('Test2@smokeTest', async ({ page }) => {
    console.log('this is test 2 running...')
  });

    test('Test3@regressionTest', async ({ page }) => {
    console.log('this is test 3 running...')
  });

  test('Test4@regressionTest', async ({ page }) => {
    console.log('this is test 4 running...')
  });

    test('Test5@smokeTest@regressionTest', async ({ page }) => {
    console.log('this is test 5 running...')
  });
