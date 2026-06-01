class UserProfilePage {

    constructor(page) {

        this.page = page;

        // My Account / Login page locators
        this.loginLink = '.ico-login';

        this.registerLink = '.ico-register';

        this.emailField = '#Email';

        this.passwordField = '#Password';

        this.loginButton = 'button.login-button';

        this.forgotPasswordLink = '.forgot-password a';

        // Register page locators
        this.firstNameField = '#FirstName';

        this.lastNameField = '#LastName';

        this.registerEmailField = '#Email';

        this.registerPasswordField = '#Password';

        this.confirmPasswordField = '#ConfirmPassword';

        this.registerButton = '#register-button';

        this.genderMale = '#gender-male';

        this.genderFemale = '#gender-female';

       

        this.companyField = '#Company';

    }

}

module.exports = UserProfilePage;