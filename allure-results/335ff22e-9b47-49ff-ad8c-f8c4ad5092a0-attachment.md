# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login_test_Exampe.spec.js >> Login should succeed
- Location: tests\Login_test_Exampe.spec.js:21:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#dashboard')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#dashboard')

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
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // 🔥 Hook - runs after every test
  4  | test.afterEach(async ({ page }, testInfo) => {
  5  | 
  6  |     if (testInfo.status !== testInfo.expectedStatus) {
  7  | 
  8  |         const fileName = `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`;
  9  | 
  10 |         await page.screenshot({
  11 |             path: fileName,
  12 |             fullPage: true
  13 |         });
  14 | 
  15 |         console.log(`Screenshot saved: ${fileName}`);
  16 |     }
  17 | });
  18 | 
  19 | 
  20 | // ✅ Actual Test (THIS is mandatory)
  21 | test('Login should succeed', async ({ page }) => {
  22 | 
  23 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  24 | 
  25 |     await page.fill("//input[@placeholder='Username']", 'testuser');
  26 |     await page.fill("//input[@placeholder='Password']", 'wrongpassword'); // intentionally wrong
  27 |     await page.click("//button[normalize-space()='Login']");
  28 | 
  29 |     // 🔥 This line decides pass/fail
> 30 |     await expect(page.locator('#dashboard')).toBeVisible({ timeout: 5000 });
     |                                              ^ Error: expect(locator).toBeVisible() failed
  31 | 
  32 | });
```