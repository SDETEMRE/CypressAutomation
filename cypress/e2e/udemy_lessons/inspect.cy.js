///<reference types="cypress" />

describe("Inspect Automation Test Store items using chain of commans", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });

  it.only("Click on the first item using index", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
