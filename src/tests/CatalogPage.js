class CatalogPage {
  constructor(page) {
    this.page = page
  }

  async clickSignIn() {
    await this.page.getByRole("link", { name: "Sign In" }).click()
  }
}

module.exports = CatalogPage
