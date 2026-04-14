const{test, expect } = require('@playwright/test');
// const testdata=  Json.parse((Json.stringfy(require("../testdata.json"))))

test("To test Testdata", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New user? Signup").click();
    await page.waitForLoadState("networkidle")
    const count = await page.locator("//div[contains(@class,'interests-div')]//input[@type='checkbox']").count()
    expect(count).toBe(6)


})
