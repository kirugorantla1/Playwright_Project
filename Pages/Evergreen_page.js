import {test, expect} from '@playwright/test'
import testdata from '../pages/testdata.json';

// pages/HomePage.js
export class HomePage {
  constructor(page) {
    this.page = page;
    this.products = page.locator("//div[@class='flex justify-center flex-wrap gap-2 mb-8']/button");
    this.groceriesBtn = page.locator("//button[text()='Groceries']");
    this.addButtons = page.locator("//button[@aria-label='Add Organic Avocado to cart' or @aria-label='Add Gourmet Olive Oil to cart']");
    this.cartBtn = page.getByRole('button', { name: 'Shopping Cart' });
  }

  async goto() {
    await this.page.goto(testdata.url);
  }

  async getCategories() {
    return await this.products.allTextContents();
  }

  async selectGroceries() {
    await this.groceriesBtn.click();
  }

  async addItemsToCart() {
    const count = await this.addButtons.count();
    for (let i = 0; i < count; i++) {
      await this.addButtons.nth(i).click();
    }
  }

  async goToCart() {
    await this.cartBtn.click();
  }
}

