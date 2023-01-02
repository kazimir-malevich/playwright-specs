const { test, expect } = require("@playwright/test")

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

  async enterStore() {
    await this.page.click("a[href='actions/Catalog.action']")
  }
}

test("Buy a dog", async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()
  await homePage.verifyTitle()
  await homePage.enterStore()
})
