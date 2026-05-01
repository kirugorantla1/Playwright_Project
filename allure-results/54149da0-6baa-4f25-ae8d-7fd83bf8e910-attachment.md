# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login_test_Exampe.spec.js >> Login should succeed
- Location: tests\Login_test_Exampe.spec.js:21:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#username')
    - waiting for" https://www.demoblaze.com/index.html" navigation to finish...
    - navigated to "https://www.demoblaze.com/index.html"
    - waiting for" https://www.google.com/search?q=vwo&oq=vwo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEwMjVqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8" navigation to finish...
    - navigated to "https://www.google.com/search?q=vwo&oq=vwo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEwMjVqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
    - waiting for" https://app.vwo.com/" navigation to finish...
    - navigated to "https://app.vwo.com/"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - dialog [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading [level=5] [ref=e6]: New message
          - button [ref=e7]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: "Contact Email:"
            - textbox [ref=e11]
          - generic [ref=e12]:
            - text: "Contact Name:"
            - textbox [ref=e13]
          - generic [ref=e14]:
            - text: "Message:"
            - textbox [ref=e15]
        - generic [ref=e16]:
          - button [ref=e17]: Close
          - button [ref=e18]: Send message
  - dialog [ref=e19]:
    - document [ref=e20]:
      - generic [ref=e21]:
        - generic [ref=e22]:
          - heading [level=5] [ref=e23]: Sign up
          - button [ref=e24]: ×
        - generic [ref=e26]:
          - generic [ref=e27]:
            - text: "Username:"
            - textbox [ref=e28]
          - generic [ref=e29]:
            - text: "Password:"
            - textbox [ref=e30]
        - generic [ref=e31]:
          - button [ref=e32]: Close
          - button [ref=e33]: Sign up
  - dialog [ref=e34]:
    - document [ref=e35]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - heading [level=5] [ref=e38]: Log in
          - button [ref=e39]: ×
        - generic [ref=e41]:
          - generic [ref=e42]:
            - text: "Username:"
            - textbox [ref=e43]
          - generic [ref=e44]:
            - text: "Password:"
            - textbox [ref=e45]
        - generic [ref=e46]:
          - button [ref=e47]: Close
          - button [ref=e48]: Log in
  - dialog [ref=e49]:
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "About us" [level=5] [ref=e53]
        - button "Close" [ref=e54]: ×
      - button "Close" [ref=e59]
  - navigation [ref=e60]:
    - button "Toggle navigation" [ref=e61]
    - link "PRODUCT STORE" [ref=e62] [cursor=pointer]:
      - /url: index.html
      - img [ref=e63]
      - text: PRODUCT STORE
    - list [ref=e65]:
      - listitem [ref=e66]:
        - link "Home (current)" [ref=e67] [cursor=pointer]:
          - /url: index.html
      - listitem [ref=e68]:
        - link "Contact" [ref=e69] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e70]:
        - link "About us" [ref=e71] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e72]:
        - link "Cart" [ref=e73] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e74]:
        - link "Log in" [ref=e75] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e76]:
        - link "Sign up" [ref=e77] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e79]:
      - list [ref=e80]:
        - listitem [ref=e81]
        - listitem [ref=e82]
        - listitem [ref=e83]
      - generic [ref=e84]:
        - generic [ref=e85]:
          - img "First slide"
        - generic [ref=e86]:
          - img "Second slide"
        - generic [ref=e87]:
          - img "Third slide"
      - button "Previous" [ref=e88] [cursor=pointer]
      - button "Next" [ref=e89] [cursor=pointer]
  - generic [ref=e91]:
    - generic [ref=e93]:
      - link "CATEGORIES" [ref=e94] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e95] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e96] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e97] [cursor=pointer]:
        - /url: "#"
    - list [ref=e99]:
      - listitem [ref=e100]:
        - button "Previous" [ref=e101]
      - listitem [ref=e102]:
        - button "Next" [ref=e103] [cursor=pointer]
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
  23 |     await page.goto('https://example.com/login');
  24 | 
> 25 |     await page.fill('#username', 'testuser');
     |                ^ Error: page.fill: Test timeout of 60000ms exceeded.
  26 |     await page.fill('#password', 'wrongpassword'); // intentionally wrong
  27 |     await page.click('#loginBtn');
  28 | 
  29 |     // 🔥 This line decides pass/fail
  30 |     await expect(page.locator('#dashboard')).toBeVisible({ timeout: 5000 });
  31 | 
  32 | });
```