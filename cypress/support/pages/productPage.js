class ProductPage {
  chooseProduct() {
    cy.get(".features_items .col-sm-4").eq(2).click();
    cy.get(
      ":nth-child(5) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
  }

  enterQuantity(quantity) {
    cy.get("#quantity").clear().type(quantity).should("have.value", quantity);
  }

  addToCart() {
    cy.get(":nth-child(5) > .btn").click();
  }

  proceedToCheckout() {
    cy.get("u").click();
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".modal-body > :nth-child(2) > a > u").click();
  }
}
export const productPage = new ProductPage();
