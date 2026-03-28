exports.CartPage=class CartPage{
    constructor(page){
        this.page=page;
        this.checkoutBtn="#checkout";
    }

    async clickOnCheckout(){
        await this.page.click(this.checkoutBtn);
    }
}