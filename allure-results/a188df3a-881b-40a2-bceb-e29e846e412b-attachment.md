# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login_test_Exampe.spec.js >> Open multiple tabs and switch
- Location: tests\Login_test_Exampe.spec.js:3:5

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#openTab')

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Open multiple tabs and switch', async ({ page, context }) => {
  4  | 
  5  |     await page.goto('https://app.vwo.com/#/login');
  6  | 
  7  |     // 👉 Open 4 more tabs dynamically
  8  |     const pagesOpened = [];
  9  | 
  10 |     for (let i = 0; i < 4; i++) {
  11 |         const [newPage] = await Promise.all([
  12 |             context.waitForEvent('page'),
> 13 |             page.click('#openTab')   // button that opens new tab
     |                  ^ Error: page.click: Target page, context or browser has been closed
  14 |         ]);
  15 |         pagesOpened.push(newPage);
  16 |     }
  17 | 
  18 |     // 👉 Now total tabs = 5 (1 original + 4 new)
  19 | 
  20 |     const pages = context.pages();
  21 | 
  22 |     // Switch to 5th tab
  23 |     await pages[4].bringToFront();
  24 | 
  25 |     // Switch back to 1st tab
  26 |     await pages[0].bringToFront();
  27 | });
```