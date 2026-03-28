exports.ProductPage=class ProductPage{
    constructor(page){
        this.page=page;
    }

    async clickAddToCart(productName){
        await this.page.waitForSelector("//div[text()='"+productName+"']//ancestor::div[@class='inventory_item_description']//button");
        await this.page.locator("//div[text()='"+productName+"']//ancestor::div[@class='inventory_item_description']//button").click();

    }

    async clickOnCart(){
        await this.page.click(".shopping_cart_link");
    }
}