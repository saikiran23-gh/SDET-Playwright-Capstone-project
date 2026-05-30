 const { test, expect } = require('@playwright/test');

 test.describe('Product Management - nopCommerce Demo Store', () => {


//   //1st testcase------verifying home page products are visible or not 
  test('home page products are visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.product-grid')).toBeVisible();
    await page.waitForTimeout(5000);
  });



// //2nd testcase---verifying search box is visible
  test('checkingsearch box', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('#small-searchterms')).toBeVisible();   // this is searchbox  id -->#
    await page.waitForTimeout(5000);
});


// //3rd testcase ---verifying with valid porduct name
  test('search valid product name', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await page.locator('#small-searchterms').fill('iphone 17');
    await page.locator('button.search-box-button').click();
    await expect(page).toHaveURL(/search/);
    await page.waitForTimeout(7000);
  });


// //4th testcase ---verify the search with empty input
  test('searching empty input', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('#small-searchterms')).toHaveValue('');
    await page.waitForTimeout(5000);
  });


// //5th testcase---verifying the computers category opens
  test('opening computers category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/computers');
    await page.getByRole("link",{name:"Computers"}).first().click();
    await expect(page).toHaveURL(/computers/);
    await page.waitForTimeout(5000);
  });


// //6th testcase--- verifying electronics category opens
  test('opening electronics category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/electronics');
    
    await expect(page.locator('h1')).toHaveText('Electronics');
    
    await page.waitForTimeout(5000);
  });


// //7th tescase ----- verifying apparel category opens or not 
  test('opening apparel category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/apparel');
   await expect(page.locator('h1')).toHaveText('Apparel');
    await page.waitForTimeout(4000);
  });


// //8th testcase ---verifying digital downloads category opens or not
  test('opening digital downloads category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/digital-downloads');
    await expect(page.locator('h1')).toHaveText('Digital downloads');
    await page.waitForTimeout(4000); 
  });


// //9th testcase --- verifying whether books category is opeing ..
  test('opening books category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await page.getByRole("link",{name:"Books"}).first().click();
    await expect(page).toHaveURL(/books/); 
    await page.waitForTimeout(6000);
  });


// //10th testcase verifying  whether jewlery category opening or not
  test('TC_Product_10 - Verify jewelry category opens', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/jewelry');
    await page.getByRole("link",{name:"Jewelry"}).first().click();
    await expect(page).toHaveURL(/jewelry/);
    await page.waitForTimeout(6000);
  });



// //11th testcase--- verifying whether giftcards category opening.... 
  test('opening gift cards category', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/gift-cards');
    await page.getByRole("link", {name:"Gift Cards"}).first().click();
    await expect(page).toHaveURL(/gift-cards/);
    await page.waitForTimeout(5000);
  });


// //12th testcase --- verifying that the product item is visible in book page...
  test('product item is visible in books page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await page.locator("#products-orderby").selectOption('Price: Low to High');
    await page.waitForTimeout(5000);
  });


// //13th testcase --- verifying product price is available ...
  test('checking product price', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    
    await expect(page.locator('.prices').nth(0)).toBeVisible();   // . =>class and # =>id and nth(0) means first prize
    await page.waitForTimeout(5000);
});


// //14th testcase--- verifying the currency dropdown in books page
  test('checking currency dropdown', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await page.locator("#customerCurrency").selectOption({label:"Euro"});
    await page.waitForTimeout(5000);
    
  });



// //15th testcase--- verifying product image is visible in shoes section....

  test('checking shoes section product image', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/apparel');

    await page.getByRole("link",{name:"Shoes"}).first().click();

    await expect(page.locator('.picture img').first())
    .toBeVisible();

    await page.waitForTimeout(5000);

});



// //16th testcase--- verifying shoes product details page opens....

test.fixme('checking shoes product details page', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/apparel');

    await page.locator('a[href="/shoes"]').first().click();

    await page.locator('.product-title a').first().click();

    await expect(page.locator('.product-name'))
    .toBeVisible();

    await page.waitForTimeout(5000);

});




// ////17th testcase--- verifying laptop product price is visible....

test.skip('checking laptop product price', async ({ page }) => {
    

    await page.goto('https://demo.nopcommerce.com');

    await page.locator('a[href="/computers"]').click();

    await page.locator('.sub-category-item').getByRole('link', { name: 'Notebooks' })
        .click();
    await page.waitForURL('**/notebooks');

    await page.locator('.product-title a').first().click();
   

    await expect(page.locator('.product-price'))
    .toBeVisible();

    await page.waitForTimeout(5000);


});


// //18th testcase-- verifying sort dropdown is visible in books section 
  test('TC_Product_18 - Verify sort dropdown is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('#products-orderby')).toBeVisible();
    await page.waitForTimeout(5000);

  });



// //19th testcase ---verifying display dropdown is visible 
  test('checking display dropdown', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('#products-pagesize')).toBeVisible();
    await page.waitForTimeout(5000);
  });


// //20th testcase---verifying viewmode dropdown is visible
  test('TC_Product_20 - Verify view mode dropdown is visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/books');
    await expect(page.locator('.viewmode-icon').first()).toBeVisible();
    await page.waitForTimeout(5000);
  });

});