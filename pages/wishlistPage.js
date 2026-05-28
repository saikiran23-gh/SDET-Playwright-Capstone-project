class WishlistPage {

    constructor(page){

        this.page = page;

        // wishlist locators

        this.wishlistLink = '.ico-wishlist';

        this.wishlistQuantity = '.wishlist-qty';

        this.wishlistHeading = 'h1';

        this.emptyWishlistMessage = '.no-data';

        this.addToWishlistButton = '.add-to-wishlist-button';

        this.productTitle = '.product-title';

        this.productPrice = '.prices';

        this.productImage = '.picture img';

        this.emailFriendOption = '.email-a-friend';

        this.headerLogo = '.header-logo img';

        this.updateWishlistButton = '.update-wishlist-button';

    }

}

module.exports = WishlistPage;