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
  test.skip('checking computers menu navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/computers"]').first().click();

    await expect(page.locator('h1')).toContainText('Computers');

    await page.waitForTimeout(5000);
  });

//4th testcase ---verifying notebooks page opens.....
test('Verify notebooks page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/notebooks');
  await expect(page.locator('h1')).toContainText('Notebooks');
  await page.waitForTimeout(5000);

});


//5th testcase--- verifying shoes page opens....
test('Verify shoes page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/shoes');
  await expect(page.locator('h1')).toContainText('Shoes');
  await page.waitForTimeout(5000);
});

//6th testcase--- verifying cell phones page opens..
test('Verify cell phones page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/cell-phones');
  await expect(page.locator('h1')).toContainText('Cell phones');
  await page.waitForTimeout(5000);
});


//7th testcase--- verifying contact us page opens.
test('Verify contact us page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/contactus');
  await expect(page.locator('h1')).toContainText('Contact Us');
  await page.waitForTimeout(5000);
});

//8th testcase--- verifying sitemap page opens....
test('Verify sitemap page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/sitemap');
  await expect(page.locator('h1')).toContainText('Sitemap');
  await page.waitForTimeout(5000);
});

//9th testcase--- verifying newspage opens......
test('Verify news page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/news');
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


//11th testcase--- verifying compate products page opens .....
test('Verify compare products page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/compareproducts');
  await expect(page).toHaveURL(/compareproducts/);
  await page.waitForTimeout(5000);
});


//12th testcase --- verifying new products link navigation,......

  test('Verify new products link navigation', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/newproducts"]').first().click();

    await expect(page).toHaveURL(/newproducts/);
    await page.waitForTimeout(3000);
    
  });

//13th testcase-- verifying blog page opens.....
test('Verify blog page opens', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/blog');
  await expect(page.locator('h1')).toContainText('Blog');
  await page.waitForTimeout(5000);
});



//14th testcase--- verifying search page input accepts value
test('Verify search page input accepts value', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/search');
  await page.locator('#q').fill('book');
  await expect(page.locator('#q')).toHaveValue('book');
  await page.waitForTimeout(5000);
});



//15th testcase--- verifying footer my accouny link redirects to login page.
  test('Verify footer my account link redirects to login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/customer/info"]').last().click();

    await expect(page).toHaveURL(/customer\/info/);
    await page.waitForTimeout(6000);
  });

});