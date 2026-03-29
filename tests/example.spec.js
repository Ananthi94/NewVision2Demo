// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('Testing upload and download file',async({page})=>{

  await page.goto("https://gauravkhurana.com/test-automation-play/");
  await page.getByRole("tab",{name:"Intermediate"}).click();
  await page.waitForLoadState('domcontentloaded');

  const p=page.on("filechooser",async fileChooser=>{
    await fileChooser.setFiles("uploadfile/test.txt");
    
  });

  await page.getByTestId("upload-button").click();
  
  const [dw]=await Promise.all([
    page.waitForEvent("download"),
    page.getByTestId("download-button").click()
  ]);
  
  await dw.saveAs("uploadfile/"+dw.suggestedFilename());
  
  await page.waitForTimeout(2000);
});
