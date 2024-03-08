///<reference types="cypress" />

describe("Verify checkboxes viw webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_WebdriverUni_Homepage();
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });
  it("check and validate cheeckboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");  //should("not.be.checked")
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");
  });

  it("uncheck and validate cheeckbox", () => {
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
    //cy.get("@option-3").should("not.be.checked");
  });

  it("check multiple cheeckboxes", () => {
    cy.get("[type=checkbox]")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });

  it("Validate radio buttons", () => {
    //cy.get("[value=green]").check();
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("Validate the states of specific button", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");
    cy.get("[value='lettuce']").check().should("be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
