describe("Checking if user can login", () => {
  it("Login as a standard user", () => {
    const actualResults = {
      isUserLogged: false,
      isProductsDisplayed: "",
      url: "",
    };
    let expectedResults: any;

    cy.fixture("loginSuccess").then((results) => {
      expectedResults = results;
    });
    cy.loginAsValidUser()
      .then((productsPage) => {
        productsPage.isBurgerBtnVisible().then((isDisplayed) => {
          actualResults.isUserLogged = isDisplayed;
        });

        productsPage.getProductsTitle().then((isVisible) => {
          actualResults.isProductsDisplayed = isVisible;
        });

        cy.url().then((url) => {
          actualResults.url = url;
        });
      })
      .then(() => {
        expect(actualResults).to.deep.equal(expectedResults);
      });
  });
  it("Login as a locked out user", () => {
    const actualResults = {
      isErrorMessageContainsText: "",
      isErrorIconsDisplayed: false,
    };
    let expectedResults: any;

    cy.fixture("loginAsLockedUser").then((results) => {
      expectedResults = results;
    });
    cy.loginAsLockedUser()
      .then((loginPage) => {
        loginPage.getErrorMessage().then((text) => {
          actualResults.isErrorMessageContainsText = text;
        });

        loginPage.isErrorIconsDisplayed().then((isVisible) => {
          actualResults.isErrorIconsDisplayed = isVisible;
        });
      })

      .then(() => {
        expect(actualResults).to.deep.equal(expectedResults);
      });
  });
});
