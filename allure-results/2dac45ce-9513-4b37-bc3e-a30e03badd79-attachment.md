# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Evrgreen_test.spec.js >> The first test case is
- Location: tests\Evrgreen_test.spec.js:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//h3[text()=\'Gourmet Olive Oil\']')
Expected: "Gourmet"
Received: "Gourmet Olive Oil"
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('//h3[text()=\'Gourmet Olive Oil\']')
    13 × locator resolved to <h3 class="font-semibold">Gourmet Olive Oil</h3>
       - unexpected value "Gourmet Olive Oil"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "Evergreen Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e10]: Evergreen Shop
      - navigation [ref=e11]:
        - link "Home" [ref=e12] [cursor=pointer]:
          - /url: /
          - button "Home" [ref=e13]
        - link "2 Shopping Cart" [ref=e14] [cursor=pointer]:
          - /url: /cart
          - button "2 Shopping Cart" [active] [ref=e15]:
            - img
            - generic [ref=e16]: "2"
            - generic [ref=e17]: Shopping Cart
  - main [ref=e18]:
    - generic [ref=e19]:
      - heading "Your Shopping Cart" [level=1] [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]:
          - generic [ref=e23]:
            - img "Organic Avocado" [ref=e25]
            - generic [ref=e26]:
              - heading "Organic Avocado" [level=3] [ref=e27]
              - paragraph [ref=e28]: $1.99
            - generic [ref=e29]:
              - button [ref=e30] [cursor=pointer]:
                - img
              - spinbutton [ref=e31]: "1"
              - button [ref=e32] [cursor=pointer]:
                - img
            - button [ref=e33] [cursor=pointer]:
              - img
          - generic [ref=e34]:
            - img "Gourmet Olive Oil" [ref=e36]
            - generic [ref=e37]:
              - heading "Gourmet Olive Oil" [level=3] [ref=e38]
              - paragraph [ref=e39]: $15.99
            - generic [ref=e40]:
              - button [ref=e41] [cursor=pointer]:
                - img
              - spinbutton [ref=e42]: "1"
              - button [ref=e43] [cursor=pointer]:
                - img
            - button [ref=e44] [cursor=pointer]:
              - img
        - generic [ref=e46]:
          - generic [ref=e48]: Order Summary
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]: Subtotal
              - generic [ref=e52]: $17.98
            - generic [ref=e53]:
              - generic [ref=e54]: Shipping
              - generic [ref=e55]: $10.00
            - generic [ref=e56]:
              - generic [ref=e57]: Total
              - generic [ref=e58]: $27.98
          - link "Proceed to Checkout" [ref=e60] [cursor=pointer]:
            - /url: /checkout
  - contentinfo [ref=e61]:
    - paragraph [ref=e63]: © 2026 Evergreen Shop. All rights reserved.
  - region "Notifications (F8)":
    - list
  - alert [ref=e64]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test("The first test case is", async({page})=>{
  4  | 
  5  |     await page.goto("https://evergreen-shop-firebase.vercel.app/");
  6  |     const products = await page.locator("//div[@class='flex justify-center flex-wrap gap-2 mb-8']/button");
  7  |     const total = await products.allTextContents();
  8  |     console.log(total);
  9  |     await expect(total).toContain("Groceries");
  10 |     await page.locator("//div[@class='flex justify-center flex-wrap gap-2 mb-8']/button[text()='Groceries']").click();
  11 | 
  12 |     const buttons = page.locator("//button[@aria-label='Add Organic Avocado to cart' or @aria-label='Add Gourmet Olive Oil to cart']");
  13 | 
  14 |     const count = await buttons.count();
  15 |     console.log(count)
  16 | 
  17 |     for (let i = 0; i < count; i++) {
  18 |         await buttons.nth(i).click();
  19 |     }
  20 | 
  21 |     await page.getByRole('button', {name:'Shopping Cart'}).click();
  22 |     
  23 | 
> 24 |     const olive = await expect(page.locator("//h3[text()='Gourmet Olive Oil']")).toHaveText("Gourmet")
     |                                                                                  ^ Error: expect(locator).toHaveText(expected) failed
  25 |     console.log(olive)
  26 | })
  27 | 
  28 | 
  29 | 
  30 | 
```