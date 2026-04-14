# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegencode.spec.js >> test
- Location: tests\codegencode.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('manda user')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [ref=e28]
            - generic [ref=e29]: Required
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]: 
              - generic [ref=e34]: Password
            - textbox "Password" [ref=e36]
            - generic [ref=e37]: Required
          - button "Login" [active] [ref=e39] [cursor=pointer]
          - paragraph [ref=e41] [cursor=pointer]: Forgot your password?
      - generic [ref=e42]:
        - generic [ref=e43]:
          - link [ref=e44] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e47] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e50] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e53] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e56]:
          - paragraph [ref=e57]: OrangeHRM OS 5.8
          - paragraph [ref=e58]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e59] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e61]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  5  |   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  6  |   await page.getByRole('textbox', { name: 'Password' }).click();
  7  |   await page.getByRole('textbox', { name: 'Password' }).fill('admin23');
  8  |   await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  9  |   await page.locator('div').nth(2).click();
  10 |   await page.locator('body').press('ArrowDown');
  11 |   await page.locator('body').press('ArrowDown');
  12 |   await page.locator('body').press('ArrowDown');
  13 |   await page.locator('body').press('ArrowDown');
  14 |   await page.locator('body').press('ArrowDown');
  15 |   await page.locator('body').press('ArrowDown');
  16 |   await page.locator('body').press('ArrowDown');
  17 |   await page.locator('body').press('ArrowDown');
  18 |   await page.locator('body').press('ArrowDown');
  19 |   await page.locator('body').press('ArrowDown');
  20 |   await page.locator('div').nth(2).click();
  21 |   await page.getByRole('button', { name: 'Login' }).click();
> 22 |   await page.getByText('manda user').click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |   await page.getByRole('menuitem', { name: 'Logout' }).click();
  24 | });
```