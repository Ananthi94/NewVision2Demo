exports.CheckoutPage=class Checkout{
    constructor(page){
        this.page=page;
        this.firstName="#first-name";
        this.lastName="#last-name";
        this.postal="#postal-code";
        this.continue="#continue";
    }

    async enterUserDetails(first,last,zip){
       await this.page.fill(this.firstName,first);
       await this.page.fill(this.lastName,last);
       await this.page.fill(this.postal,zip);
    }

    async clickOnContinue(){
        await this.page.click(this.continue);
    }
}