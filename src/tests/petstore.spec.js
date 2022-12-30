const { test, expect } = require("@playwright/test")

test("Buy a dog", async ({ page }) => {
  await page.goto("https://petstore.octoperf.com")
  await expect(page).toHaveTitle("JPetStore Demo")
  await page.click("a[href='actions/Catalog.action']")
})
