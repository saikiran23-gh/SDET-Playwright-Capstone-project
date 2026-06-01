const { test, expect } = require('@playwright/test');

test.describe('Navigation and UI Validation - nopCommerce Demo Store', () => {



//1st testcase--- verifying logo click redirects to home page....
  test('logo click redirects to home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');

    await page.locator('.header-logo a').click();

    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    await page.waitForTimeout(5000);
  });



//2nd testcase--- verifying search navigates to search results page.....
  test('search navigates to search results page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('#small-searchterms').fill('laptop');

    await page.locator('button.search-box-button').click();

    await expect(page).toHaveURL(/search/);

    await page.waitForTimeout(5000);
  });



//3rd testcase--- verifying computers menu navigation .....
  test('checking computers menu navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/computers"]').first().click();

    await expect(page.locator('h1')).toContainText('Computers');

    await page.waitForTimeout(5000);
  });



//4th testcase---- veifying notebooks subcategory navigation.....
  test('Verify notebooks subcategory navigation', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/computers');

    await page.locator('.sub-category-item')
    .filter({ hasText: 'Notebooks' })
    .click();

    await expect(page.locator('h1'))
    .toContainText('Notebooks');

    await page.waitForTimeout(5000);

});


//5th testcase --- verifying apparel to shoes navigation....
  test('checking apparel to shoes navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/apparel');

    await page.getByRole('link', { name: 'Shoes' }).first().click();

    await expect(page.locator('h1')).toContainText('Shoes');
    await page.waitForTimeout(5000);
  });



//6th testcase--- verifying electronics to cell phones navigation.....
  test('checking electronics to cell phones navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/electronics');

    await page.getByRole('link', { name: 'Cell phones' }).first().click();

    await expect(page.locator('h1')).toContainText('Cell phones');
    await page.waitForTimeout(6000);
  });



//7th testcase--- verifying footer contact us link navigation..
  test('verify footer contact us link navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/contactus"]').click();

    await expect(page.locator('h1')).toContainText('Contact Us');
    await page.waitForTimeout(5000);
  });



//8th testcase--- verifying footer sitemap link navagation.....

  test('footer sitemap link navigation checking...', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/sitemap"]').click();

    await expect(page.locator('h1')).toContainText('Sitemap');
    await page.waitForTimeout(7000);
  });


//9th testcase---verifying footer news link navigation.....
  test('footer news link navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/news"]').first().click();

    await expect(page.locator('h1')).toContainText('News');
    await page.waitForTimeout(5000);
  });



//10th testcase--- verifying newsletter email subscription field accepts input...
  test('newsletter email subscription field accepts input', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com');

    await page.locator('#newsletter-email')
    .fill('saikiran@gmail.com');


    await page.locator('#newsletter-subscribe-button')
    .click();
    await page.waitForTimeout(6000);

});



//11th testcase--- verifying compare products link navigation.....
  test('compare products link navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/compareproducts"]').click();

    await expect(page.locator('h1')).toContainText('Compare products');
    await page.waitForTimeout(5000);
  });



//12th testcase --- verifying new products link navigation,......

  test('Verify new products link navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/newproducts"]').first().click();

    await expect(page).toHaveURL(/newproducts/);
    await page.waitForTimeout(3000);
    
  });


//13th testcase--- verifying customer service contact page opens from footer..
  test('Verify customer service contact page opens from footer', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/contactus"]').click();

    await expect(page.locator('.page-title')).toBeVisible();
    await page.waitForTimeout(6000);
    
  });



//14th testcase--- verifying search result page shows search input value....
  test('Verify search result page shows search input value', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('#small-searchterms').fill('book');

    await page.locator('button.search-box-button').click();

    await expect(page.locator('#q')).toHaveValue('book');
    await page.waitForTimeout(7000);
  });



//15th testcase--- verifying footer my accouny link redirects to login page.
  test('Verify footer my account link redirects to login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/customer/info"]').last().click();

    await expect(page).toHaveURL(/customer\/info/);
    await page.waitForTimeout(6000);
  });

});