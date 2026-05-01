// pages/CartPage.js
export class CartPage {
  constructor(page) {
    this.page = page;
    this.product = page.locator("//h3[text()='Gourmet Olive Oil']");
    this.incrementBtn = page.locator("//h3[text()='Gourmet Olive Oil']/ancestor::div[contains(@class,'rounded-lg')]//button[last()]").first();
    this.freeLabel = page.locator("//span[text()='Free']");
    this.checkoutBtn = page.getByRole('link', { name: 'Proceed to Checkout' });
  }

  async verifyProduct() {
    await expect(this.product).toContainText("Gourmet");
  }

  async increaseQuantity(times) {
    for (let i = 0; i < times; i++) {
      await this.incrementBtn.click();
    }
  }

  async verifyFreeShipping() {
    await expect(this.freeLabel).toContainText("Free");
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
}