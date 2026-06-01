const { test, expect } = require('@playwright/test');

test.describe('User Profile Management - nopCommerce Demo Store', () => {


//1st testcase--- verifying my account page redirects to login page
  test('checking my account page redirects to login', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await expect(page).toHaveURL(/login/);
    await page.waitForTimeout(10000);
  });



//2nd testcase --- verifying login page opens from my account 
  test('checking login page opens from my account', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await expect(page.locator('h1')).toContainText('Welcome');
    await page.waitForTimeout(10000);
  });


//3rd testcase--- verifying email field visible in profile login page....
  test('checking email field visible in profile login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//4th testcase --- verifying password field visible in profile login page....
  test('password field visible in profile login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await expect(page.locator('#Password')).toBeVisible();
    await page.waitForTimeout(4000);
  });



//5th testcase --- verifying login button visible in profile login page
  test('login button visible in profile login page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await expect(page.locator('button.login-button')).toBeVisible();
    await page.waitForTimeout(6000);
  });



//6th testcase---verifying register link visible on home page........
  test('register link visible on home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('.ico-register')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//7th testcase--- verifying registration page opens .....
  test('registration page opens', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('h1')).toContainText('Register');
    await page.waitForTimeout(6000);
  });



//8th testcase --- verifying firstname field visible in register page.....
  test('Verify first name field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#FirstName')).toBeVisible();
    await page.waitForTimeout(4000);
  });



//9th testcase---- verifying last name field visible in register page........
  test('last name field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#LastName')).toBeVisible();
    await page.waitForTimeout(6000);
  });


//10th testcase -- verifying email field visible in register page......
  test('email field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//11th testcase --- verifying password field visible in register page....
  test('password field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#Password')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//12th testcase--- verifying confirm password field visible in register page...
  test('Verify confirm password field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#ConfirmPassword')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//13th testcase--- verifying register button visible in register page.....
  test('checking register button visible in register page and clicking it', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#register-button')).toBeVisible();
    
    await page.locator('#register-button').click();

    await page.waitForTimeout(5000);
  });



//14th testcase --- verifying forgot password link opens from profile login......
  test('forgot password link opens from profile login', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/customer/info');
    await page.locator('.forgot-password a').click();
    await expect(page).toHaveURL(/passwordrecovery/);
    await page.waitForTimeout(6000);

  });


//15th testcase--- verifying gender male radio button visible ....

  test('checking gender male radio button visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#gender-male')).toBeVisible();
    await page.waitForTimeout(5000);
  });



//16th testcase--- verifying gender female radio button visible ...
  test('checking gender female radio button visible', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#gender-female')).toBeVisible();
    await page.waitForTimeout(6000);
  });


//17th testcase---verifying company field visible in register page....
  test('checking company field visible in register page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page.locator('#Company')).toBeVisible("Company name");
    await page.waitForTimeout(5000);
  });

});