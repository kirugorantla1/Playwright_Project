
const{test, expect } = require('@playwright/test');
const testdata = require("../testdata.json");



test("To test Testdata", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill(testdata.username);
    await page.waitForLoadState("networkidle") 
    
})