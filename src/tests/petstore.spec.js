const { test, expect } = require("@playwright/test")

test("Visit homepage and verify title", async ({ page }) => {
  await page.goto("https://petstore.octoperf.com")
  await expect(page).toHaveTitle("JPetStore Demo")
})
