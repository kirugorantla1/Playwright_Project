# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Evrgreen_test.spec.js >> End-to-End Shopping Flow
- Location: tests\Evrgreen_test.spec.js:7:5

# Error details

```
ReferenceError: expect is not defined
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
    - list [ref=e65]:
      - status [ref=e66]:
        - generic [ref=e67]:
          - generic [ref=e68]: Added to cart
          - generic [ref=e69]: Gourmet Olive Oil is now in your cart.
        - button [ref=e70] [cursor=pointer]:
          - img [ref=e71]
  - alert [ref=e75]
  - status [ref=e76]: Notification Added to cartGourmet Olive Oil is now in your cart.
```

# Test source

```ts
  1  | // pages/CartPage.js
  2  | export class CartPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.product = page.locator("//h3[text()='Gourmet Olive Oil']");
  6  |     this.incrementBtn = page.locator("//h3[text()='Gourmet Olive Oil']/ancestor::div[contains(@class,'rounded-lg')]//button[last()]").first();
  7  |     this.freeLabel = page.locator("//span[text()='Free']");
  8  |     this.checkoutBtn = page.getByRole('link', { name: 'Proceed to Checkout' });
  9  |   }
  10 | 
  11 |   async verifyProduct() {
> 12 |     await expect(this.product).toContainText("Gourmet");
     |     ^ ReferenceError: expect is not defined
  13 |   }
  14 | 
  15 |   async increaseQuantity(times) {
  16 |     for (let i = 0; i < times; i++) {
  17 |       await this.incrementBtn.click();
  18 |     }
  19 |   }
  20 | 
  21 |   async verifyFreeShipping() {
  22 |     await expect(this.freeLabel).toContainText("Free");
  23 |   }
  24 | 
  25 |   async proceedToCheckout() {
  26 |     await this.checkoutBtn.click();
  27 |   }
  28 | }
```