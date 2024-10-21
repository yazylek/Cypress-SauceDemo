import { ProductsPage } from "./ProductsPage";

export class LoginPage {
  private locators = {
    loginWrapper: ".login_wrapper-inner",
    loginContainer: "#login_button_container",

    username: '[data-test="username"]',
    password: '[data-test="password"]',
    errorMsg: ".error-message-container",
    errorIcons: '[data-icon="times-circle"]',

    loginButton: '[data-test="login-button"]',
  };

  public login(
    username: string,
    password: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    cy.get(this.locators.loginContainer)
      .find(this.locators.username)
      .type(username);

    cy.get(this.locators.loginContainer)
      .find(this.locators.password)
      .type(password);

    return cy
      .get(this.locators.loginContainer)
      .find(this.locators.loginButton)
      .click();
  }

  public isLoginButtonDisplayed(): Cypress.Chainable<boolean> {
    return cy.get(this.locators.loginButton).then((btn) => {
      return btn.length === 1;
    });
  }

  public loginSuccess({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Cypress.Chainable<ProductsPage> {
    return this.login(username, password).then(() => {
      return new ProductsPage();
    });
  }

  public loginFailed(
    username: string,
    password: string
  ): Cypress.Chainable<LoginPage> {
    return this.login(username, password).then(() => {
      return new LoginPage();
    });
  }

  public getErrorMessage(): Cypress.Chainable<string> {
    return cy.get(this.locators.errorMsg).then((error) => {
      return error.text();
    });
  }

  public isErrorIconsDisplayed(): Cypress.Chainable<boolean> {
    return cy.get(this.locators.errorIcons).then((icon) => {
      return icon.length === 2;
    });
  }
}
