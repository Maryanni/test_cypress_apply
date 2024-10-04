class CheckoutPage {
  registerUser(faker) {
    cy.get('[data-qa="signup-name"]').type(faker.name.fullName());
    cy.get('[data-qa="signup-email"]').type(faker.internet.email());
    cy.get('[data-qa="signup-button"]').click();
    const randomGender = Math.floor(Math.random() * 2);
    const genderSelector = randomGender === 0 ? "#id_gender1" : "#id_gender2";
    cy.get(genderSelector).check();
    cy.get('[data-qa="password"]').type("Password123");
    const randomDay = Math.floor(Math.random() * 30);
    cy.get('[data-qa="days"]').select(randomDay);
    const randomMonth = Math.floor(Math.random() * 12);
    cy.get('[data-qa="months"]').select(randomMonth);
    const startYear = 1900;
    const endYear = 2020;
    const randomYear =
      Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    cy.get('[data-qa="years"]').select(randomYear.toString());
    cy.get('[data-qa="first_name"]').type(faker.name.fullName());
    cy.get('[data-qa="last_name"]').type(faker.name.lastName());
    cy.get('[data-qa="address"]').type(
      `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.country()}`
    );
    cy.get('[data-qa="state"]').type(faker.location.state());
    cy.get('[data-qa="city"]').type(faker.location.city());
    cy.get('[data-qa="zipcode"]').type(faker.location.zipCode());
    cy.get('[data-qa="mobile_number"]').type(faker.phone.number("9########"));
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
  }

  logOut() {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
  }
}
export const checkoutPage = new CheckoutPage();
