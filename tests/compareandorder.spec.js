const { test, expect } = require('@playwright/test');

test.describe('Compare and Order Management - nopCommerce Demo Store', () => {


//1st testcase-- checking that compare products page opens...
  test('opening compare products page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/compareproducts');
    await expect(page.locator('h1')).toContainText('Compare products');
    await page.waitForTimeout(5000);
  });


//2nd testcase--- checking that the compare products page url...
  test('compare products page URL', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/compareproducts');
    await expect(page).toHaveURL(/compareproducts/);
    await page.waitForTimeout(6000);
  });


//3rd testcase--- checking empty compare list message...
  test(' empty compare list message', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/compareproducts');
    await expect(page.locator('.no-data')).toBeVisible();
    await page.waitForTimeout(5000);
  });


//4th testcase--- checking books page has compare button..........
  test('books page has compare button', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.add-to-compare-list-button').first()).toBeVisible();
    await page.waitForTimeout(6000);
  });


//5th testcase---checking compare button text.....
  test('checkin compare button text', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.add-to-compare-list-button').first()).toContainText('Add to compare list');
    await page.waitForTimeout(7000);
  });



//6th testcase--- checking title visible before compare in books section  ...
  test('TC_Compare_06 - Verify product title visible before compare', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.product-title').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });


//7th testcase--- checking product price is visible before compare in books section...
  test(' product price is visible before compare', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.prices').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });



//8th testcase--- checking product image is visible before compare in book section.....
  test('product image visible before compare', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.picture img').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });



//9th testcase--- checking order page redirects to login page...
  test('Verify orders page redirects to login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/order/history');
    await expect(page).toHaveURL(/login/);
    await page.waitForTimeout(10000);
  });


//10th testcase---checking login page opens from order history and checking text......
  test('login page opens from order history', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/order/history');
    await expect(page.locator('h1')).toContainText('Welcome, Please Sign In!');
    await page.waitForTimeout(5000);
  });


//11th testcase--- checking order history needs email field ...
  test('order history needs email field', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/order/history');
    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(6000);
  });


//12th testcase--- verifying order history needs password field...
  test('order history needs password field', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/order/history');
    await expect(page.locator('#Password')).toBeVisible();
    await page.waitForTimeout(6000);
  });


//13th testcase--- verifhing order history login button visible
  test('Verify order history login button visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/order/history');
    await expect(page.locator('button.login-button')).toBeVisible();
    
    await page.waitForTimeout(6000);
  });


//14th testcase--- verifying forgot password link opens successfully...

test('checking forgot password link', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/order/history');

    await page.locator('.forgot-password a').click();

    await expect(page).toHaveURL(/passwordrecovery/);

    await page.waitForTimeout(5000);

});



//15th testcase --- verifying compare product clear button not visible when list is empty
  test('compare product clear button not visible when list empty', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/compareproducts');
    await expect(page.locator('.clear-list')).toHaveCount(0);

    await page.waitForTimeout(5000);
  });

});