class HomePage {
  visit() {
    cy.visit("https://automationexercise.com/");
  }

  goToProducts() {
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
  }
}
export const homePage = new HomePage();
