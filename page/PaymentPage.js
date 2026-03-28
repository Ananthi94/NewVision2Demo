exports.PaymentPage=class PaymentPage{
    constructor(page){
        this.page=page;
        this.finish="#finish";
    }

    async clickOnFinish(){
        await this.page.click(this.finish);
    }
}