///<reference types="cypress" />

describe("Contact form", () => {
  it("submit form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.title();
    cy.get("a[href$='contact']")
      .click()
      .then("textOftheContact", function (linkText) {
        cy.log("clicked on link using text: " + linkText.text());
        console.log(linkText.text());
      });
  });
  it("origin usage", () => {
    cy.origin("www.google.com", () => {
      cy.visit("/");
    });
    cy.origin("www.amazon.com", () => {
      cy.visit("/");
    });
  });
});
