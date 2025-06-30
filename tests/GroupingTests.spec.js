import { test, expect } from '@playwright/test';


test.beforeAll(async()=>{
  console.log('this is beforeAll Hook...')
})

test.afterAll(async()=>{
  console.log('this is afterAll Hook...')
})

test.beforeEach(async()=>{
  console.log('this is beforeEach Hook...')
})

test.afterEach(async()=>{
  console.log('this is afterEach Hook...')
})


//Each test.describe can be .skip or .only
test.describe.skip('Group1', ()=>{ 
  test('Test 1', async ({ page }) => {
    console.log('this is test 1 running...')
  });

  test('Test 2', async ({ page }) => {
    console.log('this is test 2 running...')
  });
})



test.describe('Group2', ()=>{
  test('Test 3', async ({ page }) => {
    console.log('this is test 3 running...')
  });

  test('Test 4', async ({ page }) => {
    console.log('this is test 3 running...')
  });
})
