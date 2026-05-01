import { test, expect } from '@playwright/test';

// 🔥 Hook - runs after every test
test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        const fileName = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;

        await page.screenshot({
            path: fileName,
            fullPage: true
        });

        console.log(`Screenshot saved: ${fileName}`);
    }
});


// ✅ Actual Test (THIS is mandatory)
test('Login should succeed', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill("//input[@placeholder='Username']", 'testuser');
    await page.fill("//input[@placeholder='Password']", 'wrongpassword'); // intentionally wrong
    await page.click("//button[normalize-space()='Login']");

    // 🔥 This line decides pass/fail
    await expect(page.locator('#dashboard')).toBeVisible({ timeout: 5000 });

});