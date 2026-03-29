import {test,expect} from '../utility/myFixture';
import { readData } from '../utility/readExcel';
test.describe.configure({mode:'serial'});
for(const jsonData of readData()){
test(`Test using ${jsonData.user}`,{tag:'@smoke'},async({loginPage,productPage,cartPage,checkoutPage,paymentPage,page})=>{
    //login
    await loginPage.gotoURL();
    await loginPage.enterCredential(jsonData.user,jsonData.pwd);
    await page.context().storageState({path:"auth.json"});
    //handle dialog
    page.on("handle dialog", async dialog=>{
        await dialog.accept();
    });

    //await page.pause();
    //add to cart
    await productPage.clickAddToCart(jsonData.product);


    await productPage.clickOnCart();

    //click onc checkout
    await cartPage.clickOnCheckout();

    //Enter user details
    await checkoutPage.enterUserDetails(jsonData.FirstName,jsonData.LastName,(jsonData.Zip).toString());
    await checkoutPage.clickOnContinue();

    //Click on finish
    await paymentPage.clickOnFinish();

    //assert
    const actualMsg=await page.locator(".complete-header").innerText();
   
    expect(actualMsg).toEqual(jsonData.expectMsg);

    await page.waitForTimeout(2000);

})
}