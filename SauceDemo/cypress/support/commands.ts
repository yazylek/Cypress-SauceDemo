/// <reference types="cypress" />

import { ProductsPage } from "./pages/ProductsPage";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import { LoginPage } from "./pages/LoginPage";
import { BurgerMenu } from "./components/BurgerMenu";

const loginPage = new LoginPage();
const users = Cypress.env().users;
const password = Cypress.env().passwordAll;
const burger = new BurgerMenu();

// VALID USER
Cypress.Commands.add("login", (username: string, password: string) => {
  return loginSuccess(username, password);
});

Cypress.Commands.add("loginAsValidUser", () => {
  return loginSuccess(users.standardUser.username, password);
});

// OTHER USERS

Cypress.Commands.add("loginAsLockedUser", () => {
  return loginFailed(users.lockedOutUser.username, password);
});
// Burger

Cypress.Commands.add("burgerClick", () => {
  return burger.burgerBtnMenuClick();
});

// -------------------------------------------------------------

function loginSuccess(username: string, password: string) {
  cy.visit("");
  return loginPage.loginSuccess({ username, password });
}

function loginFailed(username: string, password: string) {
  cy.visit("");
  return loginPage.loginFailed(username, password);
}

declare global {
  namespace Cypress {
    interface Chainable {
      loginAsValidUser(): Cypress.Chainable<ProductsPage>;
      loginAsLockedUser(): Cypress.Chainable<LoginPage>;
      burgerClick(): Cypress.Chainable<BurgerMenu>;
      login(
        username: string,
        password: string
      ): Cypress.Chainable<ProductsPage>;
    }
  }
}
