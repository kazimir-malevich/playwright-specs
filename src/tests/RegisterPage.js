import { faker } from "@faker-js/faker"

class RegisterPage {
  constructor(page) {
    this.page = page
  }

  async register() {
    const password = faker.internet.password()
    await this.page
      .locator('input[name="username"]')
      .fill(faker.internet.userName())
    await this.page.locator('input[name="password"]').fill(password)
    await this.page.locator('input[name="repeatedPassword"]').fill(password)
    await this.page
      .locator('input[name="account\\.firstName"]')
      .fill(faker.name.firstName())
    await this.page
      .locator('input[name="account\\.lastName"]')
      .fill(faker.name.lastName())
    await this.page
      .locator('input[name="account\\.email"]')
      .fill(faker.internet.email())
    await this.page
      .locator('input[name="account\\.phone"]')
      .fill(faker.phone.number())
    await this.page
      .locator('input[name="account\\.address1"]')
      .fill(faker.address.streetAddress())
    await this.page
      .locator('input[name="account\\.city"]')
      .fill(faker.address.city())
    await this.page
      .locator('input[name="account\\.state"]')
      .fill(faker.address.stateAbbr())
    await this.page
      .locator('input[name="account\\.zip"]')
      .fill(faker.address.zipCode())
    await this.page
      .locator('input[name="account\\.country"]')
      .fill(faker.random.locale())
  }
}

module.exports = RegisterPage
