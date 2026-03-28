exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.username="#user-name";
        this.password="#password";
        this.loginBtn="#login-button";
    }

    async gotoURL(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async enterCredential(user,pwd){
        await this.page.fill(this.username,user);
        await this.page.fill(this.password,pwd);
        await this.page.click(this.loginBtn);
    }
}