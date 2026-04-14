
const{test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")));


test.describe("Data driven login test", () => {

    for (const data of testdata) {

        test(`Login to application ${data.id}`, async ({ page }) => {

            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.locator("#email1").fill(data.username);

        });

    }

});