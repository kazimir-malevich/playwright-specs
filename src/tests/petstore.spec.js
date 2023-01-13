import { faker } from "@faker-js/faker"
const { test, expect } = require("@playwright/test")

test("Buy a dog", async ({ page }) => {
  await navigateToStore(page)
  await clickLink(page, "Sign In")
  await clickLink(page, "Register Now")
  const { username, password } = await register(page)
  await login(page, username, password)
})

async function login(page, username, password) {
  await clickLink(page, "Sign In")
  await page.locator('input[name="username"]').fill(username)
  await page.locator('input[name="password"]').fill(password)
  await page.getByRole("button", { name: "Login" }).click()
}

async function clickLink(page, name) {
  await page.getByRole("link", { name: name }).click()
}

async function navigateToStore(page) {
  // baseURL is set in the config
  await page.goto("/")
  await expect(page).toHaveTitle("JPetStore Demo")
  await clickLink(page, "Enter the Store")
}

async function register(page) {
  const username = faker.internet.userName()
  const password = faker.internet.password()
  await page.locator('input[name="username"]').fill(username)
  await page.locator('input[name="password"]').fill(password)
  await page.locator('input[name="repeatedPassword"]').fill(password)
  await page
    .locator('input[name="account\\.firstName"]')
    .fill(faker.name.firstName())
  await page
    .locator('input[name="account\\.lastName"]')
    .fill(faker.name.lastName())
  await page
    .locator('input[name="account\\.email"]')
    .fill(faker.internet.email())
  await page.locator('input[name="account\\.phone"]').fill(faker.phone.number())
  await page
    .locator('input[name="account\\.address1"]')
    .fill(faker.address.streetAddress())
  await page.locator('input[name="account\\.city"]').fill(faker.address.city())
  await page
    .locator('input[name="account\\.state"]')
    .fill(faker.address.stateAbbr())
  await page
    .locator('input[name="account\\.zip"]')
    .fill(faker.address.zipCode())
  await page
    .locator('input[name="account\\.country"]')
    .fill(faker.random.locale())
  await page.getByRole("button", { name: "Save Account Information" }).click()
  return { username, password }
}
