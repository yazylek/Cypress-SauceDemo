import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  private locators = {
    burgerBtn: "#react-burger-menu-btn",
    removeBtn: '[data-test="remove-sauce-labs-backpack"]',
    productTitle: '[data-test="title"]',
    labsBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
  };

  public isBurgerBtnVisible(): Cypress.Chainable<boolean> {
    return cy.get(this.locators.burgerBtn).then((burger) => {
      return burger.length === 1;
    });
  }

  public getProductsTitle(): Cypress.Chainable<string> {
    return cy.get(this.locators.productTitle).then((title) => {
      return title.text();
    });
  }

  public labsBackpackProductClick(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.locators.labsBackpack).click();
  }

  public getRemoveLabsBackpackProduct(): Cypress.Chainable<
    JQuery<HTMLElement>
  > {
    return cy.get(this.locators.removeBtn);
  }
}
