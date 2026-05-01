// pages/CheckoutPage.js
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.name = page.getByRole('textbox', { name: 'Full Name' });
    this.cardOption = page.locator("//label[normalize-space()='Credit Card']");
    this.cardNumber = page.getByRole('textbox', { name: 'Card Number' });
    this.expiryMonth = page.getByRole('combobox', { name: 'Expiry Month' });
    this.monthOption = page.getByRole('option', { name: '03' });
  }

  async fillDetails() {
    await this.name.fill("Kiran Kumar");
    await this.cardOption.click();
    await this.cardNumber.fill("23456789111");
    await this.expiryMonth.click();
    await this.monthOption.click();
  }
}