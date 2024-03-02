/// <reference types="Cypress" />

//const { use } = require("chai");

describe("Test File Upload via webdriveruni", () => {
  it("Upload a file....", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myFile").selectFile("cypress/fixtures/istqb_Emre_Dincsoy.png");
    cy.get("#submit-button").click();
  });
  it("Upload NO file....", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
  });
});
