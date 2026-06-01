const { expect } = require('@playwright/test');

class NavigationPage {

    constructor(page) {
        this.page = page;

        // Header menu
        this.computersMenu = page.getByRole('link', { name: 'Computers' });
        this.electronicsMenu = page.getByRole('link', { name: 'Electronics' });
        this.apparelMenu = page.getByRole('link', { name: 'Apparel' });

        // Footer links
        this.searchFooter = page.locator('a[href="/search"]');
        this.newsFooter = page.locator('a[href="/news"]').first();
        this.blogFooter = page.locator('a[href="/blog"]');

        // Newsletter
        this.newsletterBox = page.locator('#newsletter-email');
        this.subscribeButton = page.locator('#newsletter-subscribe-button');

        // Social media icons
        this.facebookIcon = page.locator('.facebook');
        this.youtubeIcon = page.locator('.youtube');

        // Search box
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('button[type="submit"]');
    }

    async openHomePage() {
        await this.page.goto('https://demo.nopcommerce.com');
    }

    async clickComputersMenu() {
        await this.computersMenu.click();
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async subscribeNewsletter(email) {
        await this.newsletterBox.fill(email);
        await this.subscribeButton.click();
    }

}

module.exports = { NavigationPage };