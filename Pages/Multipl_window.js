
const {test, expect} = require('@playwright/test')

test("Handling multiple window", async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const[newPage] =await Promise.all([
        context.waitForEvent("page"),
        page.locator("//div[@class='container-child']//a[4]//*[name()='svg']").click()
    ])

    await newPage.waitForLoadState('domcontentloaded');
    await newPage.locator("input[name='email']").nth(1).fill("Kiran@gmail.com")
    // await newPage.waitforTimeout(2000);
    await page.locator("#email1").fill("Kiran@gmail.com")
    await page.waitForTimeout(1000);


})
 