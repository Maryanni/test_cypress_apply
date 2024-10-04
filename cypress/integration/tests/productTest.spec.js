import { homePage } from "../../support/pages/homePage.js";
import { productPage } from "../../support/pages/productPage.js";
import { checkoutPage } from "../../support/pages/checkoutPage.js";
import { faker } from "@faker-js/faker";

describe("E-commerce Product Flow", () => {
  beforeEach(() => {
    // Set the viewport to a mobile size
    cy.viewport("iphone-6");
  });
  it("should select a product and complete checkout", () => {
    const randomQuantity = Math.floor(Math.random() * 20) + 1;

    // Navigate to website and go to products section
    homePage.visit();
    homePage.goToProducts();

    // Choose third product and view details
    productPage.chooseProduct();

    // Enter random quantity and add to cart
    productPage.enterQuantity(randomQuantity);
    productPage.addToCart();

    // Proceed to checkout
    productPage.proceedToCheckout();

    // Optional: Register new user and confirm order
    checkoutPage.registerUser(faker);

    // Log out
    checkoutPage.logOut();
  });
});
