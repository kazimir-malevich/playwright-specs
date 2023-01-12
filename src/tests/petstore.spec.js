const { test, expect } = require("@playwright/test")

test("Buy a dog", async ({ page }) => {
  await navigateToStore(page, "/")
  await clickLink(page, "Sign In")
  await clickLink(page, "Register Now")
})

async function clickLink(page, name) {
  await page.getByRole("link", { name: name }).click()
}

async function navigateToStore(page) {
  // baseURL is set in the config
  await page.goto("/")
  await expect(page).toHaveTitle("JPetStore Demo")
  await clickLink(page, "Enter the Store")
}
