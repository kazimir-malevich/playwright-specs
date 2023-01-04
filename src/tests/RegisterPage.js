class RegisterPage {
  constructor(page) {
    this.page = page
  }

  async register() {
    await this.page.locator('input[name="username"]').fill("username")
    await this.page.locator('input[name="password"]').fill("password")
    await this.page.locator('input[name="repeatedPassword"]').fill("password")
    await this.page.locator('input[name="account\\.firstName"]').fill("aidy")
    await this.page.locator('input[name="account\\.lastName"]').fill("bamber")
    await this.page.locator('input[name="account\\.email"]').fill("x@x.com")
    await this.page.locator('input[name="account\\.phone"]').fill("07551377577")
    await this.page
      .locator('input[name="account\\.address1"]')
      .fill("139 Kings Road")
    await this.page.locator('input[name="account\\.city"]').fill("Manchester")
    await this.page.locator('input[name="account\\.state"]').fill("MCR")
    await this.page.locator('input[name="account\\.zip"]').fill("OL68EZ")
    await this.page
      .locator('input[name="account\\.country"]')
      .fill("United States")
  }
}

module.exports = RegisterPage
