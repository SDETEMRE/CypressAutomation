///<reference types="cypress" />
require("@cypress/xpath");

describe("Contact form", () => {
  before(function () {
    cy.fixture("userDetails").as("user");
  });
  it("submit form", () => {
    cy.visit("https://www.automationteststore.com/");

    cy.get("a[href$='contact']") //$ means ends with in CSS locator ^ starts with and * contains
      .click()
      .then(function (linkText) {
        cy.log("clicked on link using text: " + linkText.text());
      });
    cy.get("@user").then((user) => {
      //cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.xpath("//input[@name = 'first_name']").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });

    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Do you provide...");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
