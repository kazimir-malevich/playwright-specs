const { test, expect } = require("@playwright/test")

test("Buy a dog", async ({ page }) => {
  await navigateToStore(page, "/", "JPetStore Demo", "Enter the Store")
})

async function navigateToStore(page, url, expectedTitle, linkText) {
  // baseURL is set in the config
  await page.goto(url)
  await expect(page).toHaveTitle(expectedTitle)
  await page.getByRole("link", { name: linkText }).click()
}
