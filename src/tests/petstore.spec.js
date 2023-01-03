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
    await this.page.getByRole("link", { name: "Enter the Store" }).click()
  }
}

class CatalogPage {
  constructor(page) {
    this.page = page
  }

  async signin() {
    await this.page.getByRole("link", { name: "Sign In" }).click()
  }
}

function createpetstore(page) {
  return {
    homePage: new HomePage(page),
    catalogPage: new CatalogPage(page),
  }
}

test("Buy a dog", async ({ page }) => {
  const petstore = createpetstore(page)

  await petstore.homePage.goto()
  await petstore.homePage.verifyTitle()
  await petstore.homePage.enterStore()
  await petstore.catalogPage.signin()
})
