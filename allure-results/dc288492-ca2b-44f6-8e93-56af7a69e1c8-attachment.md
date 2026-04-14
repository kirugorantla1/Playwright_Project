# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02_Login_file.spec.js >> Myfirst login test case
- Location: tests\02_Login_file.spec.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | 
  2  | import {test, expect} from '@playwright/test'
  3  | import { title } from 'node:process'
  4  | 
  5  | // test("My first test case is", async({page})=>{
  6  | //     await page.goto("https://www.google.com")
  7  | //     const url = await page.url()
  8  | //     console.log("Title is", url)
  9  | //     const title = await page.title()
  10 | //     console.log("My Title is", title)
  11 | //     await page.waitForTimeout(3000)
  12 | //     await expect(page).toHaveTitle("Google");
  13 | 
  14 | // })
  15 | 
  16 | test("Myfirst login test case", async({page})=>{
  17 | 
  18 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  19 |     await page.getByPlaceholder('Username').fill("Admin", {delay: 200});
  20 |     await page.getByPlaceholder('Password').fill('admin123')
  21 |     await page.locator("button[type='submit']").click();
  22 |     await page.waitForTimeout(5000)
  23 |     await expect(page).toHaveURL(/dashboard/);
  24 |     await page.getByAltText("profile picture").first().click()
  25 |     await page.getByText("Logout").click();
> 26 |     await page.waitForTimeout(5000)
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  27 |     await expect(page).toHaveURL(/login/);
  28 | 
  29 | 
  30 | 
  31 | 
  32 | })
```