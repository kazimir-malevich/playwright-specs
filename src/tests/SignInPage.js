class SignInPage {
  constructor(page) {
    this.page = page
  }

  async clickRegisterNow() {
    await this.page.getByRole("link", { name: "Register Now!" }).click()
  }
}

module.exports = SignInPage
