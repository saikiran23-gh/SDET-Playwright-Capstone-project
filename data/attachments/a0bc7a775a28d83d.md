# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: compareandorder.spec.js >> Compare and Order Management - nopCommerce Demo Store >> opening compare products page
- Location: tests/compareandorder.spec.js:7:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Compare products"
Received string:    "demo.nopcommerce.com"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')
    14 × locator resolved to <h1>demo.nopcommerce.com</h1>
       - unexpected value "demo.nopcommerce.com"

```

```yaml
- heading "demo.nopcommerce.com" [level=1]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | test.describe('Compare and Order Management - nopCommerce Demo Store', () => {
  4   | 
  5   | 
  6   | // //1st testcase-- checking that compare products page opens...
  7   |   test('opening compare products page', async ({ page }) => {
  8   |     await page.goto('https://demo.nopcommerce.com/compareproducts');
> 9   |     await expect(page.locator('h1')).toContainText('Compare products');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  10  |     await page.waitForTimeout(5000);
  11  |   });
  12  | 
  13  | 
  14  | // //2nd testcase--- checking that the compare products page url...
  15  |   test('compare products page URL', async ({ page }) => {
  16  |     await page.goto('https://demo.nopcommerce.com/compareproducts');
  17  |     await expect(page).toHaveURL(/compareproducts/);
  18  |     await page.waitForTimeout(6000);
  19  |   });
  20  | 
  21  | 
  22  | // //3rd testcase--- checking empty compare list message...
  23  |   test('empty compare list message', async ({ page }) => {
  24  |     await page.goto('https://demo.nopcommerce.com/compareproducts');
  25  |     await expect(page.locator('.no-data')).toBeVisible();
  26  |     await page.waitForTimeout(5000);
  27  |   });
  28  | 
  29  | 
  30  | // //4th testcase--- checking books page has compare button..........
  31  |   test('books page has compare button', async ({ page }) => {
  32  |     await page.goto('https://demo.nopcommerce.com/books');
  33  |     await expect(page.locator('.add-to-compare-list-button').first()).toBeVisible();
  34  |     await page.waitForTimeout(6000);
  35  |   });
  36  | 
  37  | 
  38  | // //5th testcase---checking compare button text.....
  39  |   test('checkin compare button text', async ({ page }) => {
  40  |     await page.goto('https://demo.nopcommerce.com/books');
  41  |     await expect(page.locator('.add-to-compare-list-button').first()).toContainText('Add to compare list');
  42  |     await page.waitForTimeout(7000);
  43  |   });
  44  | 
  45  | 
  46  | 
  47  | // //6th testcase--- checking title visible before compare in books section  ...
  48  |   test('Verify product title visible before compare', async ({ page }) => {
  49  |     await page.goto('https://demo.nopcommerce.com/books');
  50  |     await expect(page.locator('.product-title').first()).toBeVisible();
  51  |     await page.waitForTimeout(5000);
  52  |   });
  53  | 
  54  | 
  55  | // //7th testcase--- checking product price is visible before compare in books section...
  56  |   test('product price is visible before compare', async ({ page }) => {
  57  |     await page.goto('https://demo.nopcommerce.com/books');
  58  |     await expect(page.locator('.prices').first()).toBeVisible();
  59  |     await page.waitForTimeout(5000);
  60  |   });
  61  | 
  62  | 
  63  | 
  64  | // //8th testcase--- checking product image is visible before compare in book section.....
  65  |   test('product image visible before compare', async ({ page }) => {
  66  |     await page.goto('https://demo.nopcommerce.com/books');
  67  |     await expect(page.locator('.picture img').first()).toBeVisible();
  68  |     await page.waitForTimeout(5000);
  69  |   });
  70  | 
  71  | 
  72  | 
  73  | // //9th testcase--- checking order page redirects to login page...
  74  |   test('Verify orders page redirects to login page', async ({ page }) => {
  75  |     await page.goto('https://demo.nopcommerce.com/order/history');
  76  |     await expect(page).toHaveURL(/login/);
  77  |     await page.waitForTimeout(10000);
  78  |   });
  79  | 
  80  | 
  81  | // //10th testcase---checking login page opens from order history and checking text......
  82  |   test('login page opens from order history', async ({ page }) => {
  83  |     await page.goto('https://demo.nopcommerce.com/order/history');
  84  |     await expect(page.locator('h1')).toContainText('Welcome, Please Sign In!');
  85  |     await page.waitForTimeout(5000);
  86  |   });
  87  | 
  88  | 
  89  | // //11th testcase--- checking order history needs email field ...
  90  |   test('order history needs email field', async ({ page }) => {
  91  |     await page.goto('https://demo.nopcommerce.com/order/history');
  92  |     await expect(page.locator('#Email')).toBeVisible();
  93  |     await page.waitForTimeout(6000);
  94  |   });
  95  | 
  96  | 
  97  | // //12th testcase--- verifying order history needs password field...
  98  |   test('order history needs password field', async ({ page }) => {
  99  |     await page.goto('https://demo.nopcommerce.com/order/history');
  100 |     await expect(page.locator('#Password')).toBeVisible();
  101 |     await page.waitForTimeout(6000);
  102 |   });
  103 | 
  104 | 
  105 | // //13th testcase--- verifhing order history login button visible
  106 |   test('Verify order history login button visible', async ({ page }) => {
  107 |     await page.goto('https://demo.nopcommerce.com/order/history');
  108 |     await expect(page.locator('button.login-button')).toBeVisible();
  109 |     
```