
import {test, expect} from '@playwright/test'

test('Toverify Error message', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    });
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await page.getByPlaceholder('Username').fill('admin', { delay: 200 });
    await page.getByPlaceholder('Password').fill('wrongpassword');
    await page.locator("button[type='submit']").click();
    const errorMessage = page.locator("//p[contains(@class, 'alert-content-text')]");
    await expect(errorMessage).toContainText('Invalid credentials');


})