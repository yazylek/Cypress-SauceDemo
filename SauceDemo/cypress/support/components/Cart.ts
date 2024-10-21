import { CartView } from "../pages/CartView";

export class Cart {
  private locators = {
    cartIcon: '[data-test="shopping-cart-link"]',
    cartBadgeIcon: '[data-test="shopping-cart-badge"',
  };

  public getCartBadge(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.locators.cartBadgeIcon);
  }

  public cartClick(): Cypress.Chainable<CartView> {
    return cy
      .get(this.locators.cartIcon)
      .click()
      .then(() => {
        return new CartView();
      });
  }
}
