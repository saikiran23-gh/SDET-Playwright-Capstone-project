 const { test, expect } = require('@playwright/test');

 test.describe('Cart Management - nopCommerce Demo Store', () => {

// //1st testcase --- verifying shopping cart page is opening----
  test('opening shopping cart page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page.locator('h1')).toContainText('Shopping cart');
    await page.waitForTimeout(5000);
  });
// //2nd testcase-- verifying shooping cart link is visible on homepage ...
  test('checking shopping cart link is on home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.ico-cart')).toBeVisible();
    await page.waitForTimeout(4000);  
  });


// //3rd testcase--- verifying cart quantity is visible ..
  test(' Verify cart quantity is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.cart-qty')).toBeVisible();
    await page.waitForTimeout(5000);
  });


// //4th testcase -- verifying empty cart message is visible ....
  test(' checking that cart message is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page.locator('.no-data')).toContainText('Your Shopping Cart is empty!');
    await page.waitForTimeout(5000);
});


// //5th testcase-- verifying books page has add to cart button..
  test('checking that books page has add to cart button', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.product-box-add-to-cart-button').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });


// //6th testcase-- verifying add to cart button text is visible.....
  test('checking add to cart button text is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    
    await expect(page.locator('.product-box-add-to-cart-button').first()).toContainText('Add to cart');
    await page.waitForTimeout(6000);
  });
  

// //7th testcase--- verifying that product title before adding to cart
  test('Verify product title before adding to cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.product-title').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });


// //8th testcase -- verifying product price before adding to cart....
  test('checking product price before adding to cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.prices').first()).toBeVisible();
    await page.waitForTimeout(6000);
  });


// //9th testcase-- verifying product image before adding to cart....
  test('checking product image before adding to cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.picture img').first()).toBeVisible(); 
    await page.waitForTimeout(7000);
  });


// //10th testcase--- verifying cart page URL...
  test('Verify cart page URL', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page).toHaveURL(/cart/);
    await page.waitForTimeout(4000);
  });


// //11th testcase-- verifying terms of service checkbox is not visible in empty cart
  test('checking terms of service checkbox is not visible in empty cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page.locator('#termsofservice')).toHaveCount(0);
    await page.waitForTimeout(5000);
  });


// //12th testcase ---verifying checkout button is not visible in empty cart.....
  test('checkout button is not visible in empty cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page.locator('#checkout')).toHaveCount(0);
    await page.waitForTimeout(4000);
  });



// //13th testcase-- verifying continue shopping button is not visible in empty cart
  test('Verify continue shopping button is not visible in empty cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/cart');
    await expect(page.locator('.continue-shopping-button')).toHaveCount(0);
    await page.waitForTimeout(5000);
  });


// //14th testcase--- verifying header logo image is visible on cart page...

test('checking header logo image on cart page', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/cart');

    await expect(page.locator('.header-logo img'))
    .toBeVisible();

    await page.waitForTimeout(5000);

});


// //15th testcase -- verifying cart icon text contains shopping cart....
  test('checking  cart icon text contains Shopping cart', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.ico-cart')).toContainText('Shopping cart');
    await page.waitForTimeout(4000);
  });




//16th testcase -- verifying cart count starts with zero....
  test('checking cart count starts with zero', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.cart-qty')).toContainText('(0)');
    await page.waitForTimeout(4000);
  });




});