const HomePage = require("./HomePage")
const CatalogPage = require("./CatalogPage")
const SignInPage = require("./SignInPage")
const RegisterPage = require("./RegisterPage")

const { test } = require("@playwright/test")

function createPages(page) {
  return {
    homePage: new HomePage(page),
    catalogPage: new CatalogPage(page),
    signInPage: new SignInPage(page),
    registerPage: new RegisterPage(page),
  }
}

test("Buy a dog", async ({ page }) => {
  const petstore = createPages(page)

  await petstore.homePage.goto()
  await petstore.homePage.verifyTitle()
  await petstore.homePage.clickEnterStore()
  await petstore.catalogPage.clickSignIn()
  await petstore.signInPage.clickRegisterNow()
  await petstore.registerPage.register()
})
