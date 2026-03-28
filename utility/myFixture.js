import {test as base} from '@playwright/test';
import { LoginPage } from '../page/LoginPage';
import { ProductPage } from '../page/ProductPage';
import { CartPage } from '../page/CartPage';
import { CheckoutPage } from '../page/CheckoutPage';
import { PaymentPage } from '../page/PaymentPage';

export const test=base.extend(({
    loginPage:async({page},use)=>{
        const lp=new LoginPage(page);
        await use(lp);
    },
    productPage:async({page},use)=>{
        await use(new ProductPage(page));
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page));
    },
    checkoutPage:async({page},use)=>{
        await use(new CheckoutPage(page));
    },
    paymentPage:async({page},use)=>{
        await use(new PaymentPage(page));
    }
}));
export { expect } from '@playwright/test';