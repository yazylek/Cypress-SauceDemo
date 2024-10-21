describe("Burger menu tests", () => {
  it("Logout button works properly", () => {
    let expectedResults: any;
    let actualResults = {
      url: "",
      isLoginBtn: false,
    };

    cy.fixture("burgerMenuLogout").then((result) => {
      expectedResults = result;
    });
    cy.loginAsValidUser();
    cy.burgerClick().then((burger) => {
      burger
        .logoutBtnClick()
        .then((loginPage) => {
          loginPage.isLoginButtonDisplayed().then((isDisplayed) => {
            actualResults.isLoginBtn = isDisplayed;
          });
          cy.url().then((url) => {
            actualResults.url = url;
          });
        })
        .then(() => {
          expect(actualResults).to.deep.equal(expectedResults);
        });
    });
  });
  it("About button works properly", () => {
    cy.loginAsValidUser();
    cy.burgerClick().then((burger) => {
      burger.aboutBtnClick().url().should("eq", "https://saucelabs.com/");
    });
  });
  it("Reset App State works properly", () => {
    cy.loginAsValidUser().then((products) => {
      products.labsBackpackProductClick();
      products.getRemoveLabsBackpackProduct().should("be.visible");
      products.Cart.getCartBadge().should("exist");
      cy.burgerClick().then((burger) => {
        burger.resetAppStateBtnClick();
      });
      products.Cart.getCartBadge().should("not.exist");
    });
  });
  it("All items button works properly", () => {
    cy.loginAsValidUser().then((productsPage) => {
      productsPage.Cart.cartClick();
      cy.burgerClick().then((burger) => {
        burger
          .allItemsBtnClick()
          .url()
          .should("eq", "https://www.saucedemo.com/inventory.html");
      });
    });
  });
});
