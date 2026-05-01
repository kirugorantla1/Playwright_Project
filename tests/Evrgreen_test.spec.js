// tests/shopping.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Evergreen_page';
import { CartPage } from '../pages/Cart_page';
import { CheckoutPage } from '../pages/checkoutpage';

test('End-to-End Shopping Flow', async ({ page }) => {

  const home = new HomePage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.goto();

  const categories = await home.getCategories();
  expect(categories).toContain("Groceries");

  await home.selectGroceries();
  await home.addItemsToCart();
  await home.goToCart();

  await cart.verifyProduct();
  await cart.increaseQuantity(7);
  await cart.verifyFreeShipping();
  await cart.proceedToCheckout();

  await checkout.fillDetails();
});