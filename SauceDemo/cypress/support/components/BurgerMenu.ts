import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
export class BurgerMenu {
  private locators = {
    burgerBtn: "#react-burger-menu-btn",
    allButtons: ".menu-item",
    closeBtn: "#react-burger-cross-btn",
    allItemsBtn: '[data-test="inventory-sidebar-link"]',
    aboutBtn: '[data-test="about-sidebar-link"]',
    logoutBtn: '[data-test="logout-sidebar-link"]',
    resetAppStateBtn: '[data-test="reset-sidebar-link"]',
  };

  public closeBtnClick() {}

  public allItemsBtnClick(): Cypress.Chainable<ProductsPage> {
    return cy
      .get(this.locators.allItemsBtn)
      .click()
      .then(() => {
        return new ProductsPage();
      });
  }

  public aboutBtnClick(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.locators.aboutBtn).click();
  }

  public logoutBtnClick(): Cypress.Chainable<LoginPage> {
    return cy
      .get(this.locators.logoutBtn)
      .click()
      .then(() => {
        return new LoginPage();
      });
  }

  public resetAppStateBtnClick(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.locators.resetAppStateBtn).click();
  }

  public burgerBtnMenuClick(): Cypress.Chainable<this> {
    return cy
      .get(this.locators.burgerBtn)
      .click()
      .then(() => {
        return this;
      });
  }
}
