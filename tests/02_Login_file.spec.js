
import {test, expect} from '@playwright/test'
import { title } from 'node:process'

// test("My first test case is", async({page})=>{
//     await page.goto("https://www.google.com")
//     const url = await page.url()
//     console.log("Title is", url)
//     const title = await page.title()
//     console.log("My Title is", title)
//     await page.waitForTimeout(3000)
//     await expect(page).toHaveTitle("Google");

// })

test("Myfirst login test case", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin", {delay: 200});
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("button[type='submit']").click();
    await page.waitForURL(/dashboard/);
    await page.getByAltText("profile picture").first().click();
    await page.getByText("Logout").click();
    await page.waitForURL(/login/);




})