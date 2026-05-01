import { test } from '@playwright/test';

test('Open multiple tabs and switch', async ({ page, context }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 👉 Open 4 more tabs dynamically
    const pagesOpened = [];

    for (let i = 0; i < 4; i++) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[3]/div[2]/p[2]/a')   // button that opens new tab
        ]);
        pagesOpened.push(newPage);
    }

    // 👉 Now total tabs = 5 (1 original + 4 new)

    const pages = context.pages();

    // Switch to 5th tab
    await pages[4].bringToFront();

    // Switch back to 1st tab
    await pages[0].bringToFront();
});