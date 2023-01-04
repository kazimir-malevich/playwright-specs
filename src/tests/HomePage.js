const { expect } = require("@playwright/test")

class HomePage {
  constructor(page) {
    this.page = page
  }

  async goto() {
    await this.page.goto("https://petstore.octoperf.com")
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle("JPetStore Demo")
  }

  async clickEnterStore() {
    await this.page.getByRole("link", { name: "Enter the Store" }).click()
  }
}

module.exports = HomePage
