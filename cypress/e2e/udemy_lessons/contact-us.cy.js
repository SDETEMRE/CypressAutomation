describe("Test Contact Us Form via webdriveruni", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("How can I learn Cypress");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.get("#contact_reply>h1").should(
      "have.text",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("blogs");

    cy.get("textarea.feedback-input").type("How can I learn Cypress");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});