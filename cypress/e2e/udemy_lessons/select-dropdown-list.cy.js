///<reference types="cypress" />

describe("Interact with dropdown list", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();

    cy.get("#dropdowm-menu-1").select("c#"); // attribute value
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng"); //text value
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");// attribute value
    cy.get("#dropdowm-menu-2").select("junit").contains("JUnit");//text valuegit 
  });
});
