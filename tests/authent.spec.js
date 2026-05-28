//importing testing libraries
//test ==used to write test cases. 
// except= used to check expected result.
const { test, expect } = require('@playwright/test');

 //all the 15 testcases are in one group so that's why used describe 

test.describe('Authentication Management - nopCommerce Demo Store', () => {


//1st test case checks having  a title
  test('Verify login page opens successfully', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await expect(page).toHaveTitle(/nopCommerce demo store/i);

    //this is optional testcase even not run this line 1testcase will passes.
    await expect(page.locator('h1')).toContainText('Welcome');
  });


//2nd testcase ---for a new user verify registration
  test('Verify register button directs to register page', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    
    await expect(page).toHaveURL(/register/);

    await expect(page.locator('h1')).toContainText('Register');

});


//3rd testcase ---registration with valid details sucessfully or not.
  test(' user registration with valid details', async ({ page }) => {
        

    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#gender-male').check();    //  #means id locator 
    await page.locator('#FirstName').fill('Sai');
    await page.locator('#LastName').fill('Kiran');
    await page.locator('#Email').fill(`sai${Date.now()}@gmail.com`);
    await page.locator('#Password').fill('sai@123');
    await page.locator('#ConfirmPassword').fill('sai@123');
    await expect(page.locator('#FirstName')).toHaveValue('Sai');
    await expect(page.locator('#LastName')).toHaveValue('Kiran');

    await expect(page.locator('#register-button')).toBeVisible();
    await page.waitForTimeout(5000);  //just for holding a bit 
    

    
  });



//4th testcase ----verifying registration without first name
  test('registration without first name', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#LastName').fill('Kiran');
    await page.locator('#Email').fill(`test${Date.now()}@gmail.com`);
    await page.locator('#Password').fill('sai@123');
    await page.locator('#ConfirmPassword').fill('sai@123');
    await page.locator('#register-button').click();

    await expect(page.getByText('First name is required.')).toBeVisible();
    await page.waitForTimeout(5000); 
  });



//5th testcase---verifying registration without last name

  test( 'registration without last name', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#FirstName').fill('Sai');
    await page.locator('#Email').fill(`test${Date.now()}@gmail.com`);
    await page.locator('#Password').fill('sai@123');
    await page.locator('#ConfirmPassword').fill('sai@123');
    await page.locator('#register-button').click();

    await expect(page.getByText('Last name is required.')).toBeVisible();
    await page.waitForTimeout(5000); 
  });


//6th testcase--- verifying rregistration with invalid mail
  test('registration with invalid email', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#FirstName').fill('Sai');

    await page.locator('#LastName').fill('Kiran');
    await page.locator('#Email').fill('invalidemail');
  
    
    await expect(page.locator('#Email')).toHaveValue('invalidemail');
    await page.waitForTimeout(4000);
  });


//7th testcase ---- both password and confirm password were mismatching

  test('password and confirm password mismatch', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#FirstName').fill('Sai');
    await page.locator('#LastName').fill('Kiran');

    await page.locator('#Email').fill(`test${Date.now()}@gmail.com`);
    await page.locator('#Password').fill('sai@123');
    
    await page.locator('#ConfirmPassword').fill('kiran@12345');
    await page.locator('#register-button').click();



    await expect(page.locator('#ConfirmPassword')).toBeVisible();

    await page.waitForTimeout(3000);
  });


//8th testcase---veerifying with invalid credentials 

  test('login with invalid credentials', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.locator('#Email').fill('skuser@gmail.com');


    await page.locator('#Password').fill('32439537gkjdfkmgirehfi');
   

    await expect(page.locator('#Password')).toHaveValue('32439537gkjdfkmgirehfi');
    await page.locator('button.login-button').click();
    await page.waitForTimeout(7000);
  });


//9th testcase-----verifying by login withs empty email and password

  test('login with empty email and password', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.locator('button.login-button').click();


    await expect(page.locator('#Email')).toHaveValue('');

    await expect(page.locator('#Password')).toHaveValue('');

    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(5000);
  });


//10th testcase-----verifying login with invalid email format

  test('using invalid email format', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.locator('#Email').fill('abc');
    await page.locator('#Password').fill('Test@12345');
    await page.locator('button.login-button').click();

    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(7000);
  });




//11th testcase---verifying forgot password page opens sucessfully


  test('forgot password page opens', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/login');
    await page.locator('a[href="/passwordrecovery"]').click();  //anchor tag is forget password link

    await expect(page).toHaveURL(/passwordrecovery/);
    await page.waitForTimeout(7000);
  });


//12th testcase --verifying password recovery with invalid email id
  test('password recovery with invalid email', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/passwordrecovery');
    await page.locator('#Email').fill('saikiran23');
    await page.locator('button.password-recovery-button').click();           //passrecvbtn is class of button class of button tag in html

    await expect(page.locator('#Email')).toBeVisible();
    await page.waitForTimeout(5000);

  });


//13th testcase---verifying password with the empty email id
  test('password recovery with empty email', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/passwordrecovery');
    await page.locator('button.password-recovery-button').click();

    await expect(page.locator('#Email')).toBeVisible("Enter your email");
    await page.waitForTimeout(5000);
  });


//14th testcase----verifying logout after successful registration
  test.fixme('logout after successful registration', async ({ page }) => {
    const email = `logouttest${Date.now()}@gmail.com`;

    await page.goto('https://demo.nopcommerce.com/register');
    await page.locator('#FirstName').fill('Sai');
    await page.locator('#LastName').fill('Kiran');
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill('Test@12345');
    await page.locator('#ConfirmPassword').fill('Test@12345');
    await page.locator('#register-button').click();

    // await page.locator('a.ico-logout').click();

    await expect(page.locator('a.ico-login')).toBeVisible();
    await page.waitForTimeout(5000);
  });


//15th testcase ----verifying the login link is visible on home page
  test('login link is visible on home page', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com');
    await expect(page.locator('a.ico-login')).toBeVisible();  //a.ico-login means a is anchor tag used for link and ico-login is a class name of anchor tag in html
    await page.waitForTimeout(5000);
  });

});