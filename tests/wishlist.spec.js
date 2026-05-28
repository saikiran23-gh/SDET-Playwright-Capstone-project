const { test, expect } = require('@playwright/test');

test.describe('Wishlist Management - nopCommerce Demo Store', () => {

 

//1st testcase--- verifying wishlist link is visible on homepage...
    test('wishlist link is visible on home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.ico-wishlist')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//2nd testcase--- verifying wishlist page opens successfullu....
  test('opening wishlist page successfully', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/wishlist');
    await expect(page.locator('h1')).toContainText('Wishlist');
    await page.waitForTimeout(5000);
    

  });


//3rd testcase--- verifying wishlist page url.....
  test('TC_Wishlist_03 - Verify wishlist page URL', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/wishlist');
    await expect(page).toHaveURL(/wishlist/);
    await page.waitForTimeout(5000);
  }); 



//4th testcase verifying empty wishlist message is visible ..
  test('empty wishlist message is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/wishlist');
    await expect(page.locator('.no-data')).toBeVisible();

    await page.waitForTimeout(6000);
  });




//5th testcase --- verifying wishlist quantity is visible on homepage.......
  test('wishlist quantity is visible on home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.wishlist-qty')).toBeVisible();
    await page.waitForTimeout(5000);

  });




//6th testcase---verifying wishlist quantity starts with zero...........
  test('wishlist quantity starts with zero', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.wishlist-qty')).toContainText('(0)');
    await page.waitForTimeout(4000);
  });



//7th testcase---verifying wishlist icon text contains wishlist.........

  test('wishlist icon text contains Wishlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.ico-wishlist')).toContainText('Wishlist');
    await page.waitForTimeout(2000);
  });





//8th testcase--- verifying add to wishlist button visible in books page------
  test('add to wishlist button visible in books page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.add-to-wishlist-button').first()).toBeVisible();
    await page.waitForTimeout(3000);
  });



//9th testcase--- verifying product title visible before adding to wishlist......
  test('TC_Wishlist_09 - Verify product title visible before adding to wishlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.product-title').first()).toBeVisible();
    await page.waitForTimeout(8000);
  });





//10th testcase --- verifying product price visible before adding to wishlist........
  test('product price visible before adding to wishlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.prices').first()).toBeVisible();
    await page.waitForTimeout(4000);
  });




//11th testcase--- verifying product image visible before adding to wishlist....
  test('TC_Wishlist_11 - Verify product image visible before adding to wishlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.picture img').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });




//12th testcase------verifying add to wishlist button visible in apparel shoes page....

  test('add to wishlist button visible in apparel shoes page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/shoes');
    await expect(page.locator('.add-to-wishlist-button').first()).toBeVisible();
    await page.waitForTimeout(6000);
  });




//13th testcase--- verifying shoes product image visible before wishlist.........
  test('TC_Wishlist_13 - Verify shoes product image visible before wishlist', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/shoes');
    await expect(page.locator('.picture img').first()).toBeVisible();
    await page.waitForTimeout(4000);
  });



//14th testcase--- verifying email a friend option visible in wishlist page...

test.fixme('TC_Wishlist_14 - Verify email wishlist button visible', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/wishlist');

    await expect(page.locator('.email-a-friend'))
    .toBeVisible();

    await page.waitForTimeout(7000);

});




//15th testcase ---verifying header logo is visible on wishlist page.......
  test('header logo visible on wishlist page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/wishlist');
    await expect(page.locator('.header-logo img')).toBeVisible();

    await page.waitForTimeout(6000);
  });

});