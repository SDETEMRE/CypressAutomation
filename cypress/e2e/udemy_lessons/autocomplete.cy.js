///<reference types="cypress" />

describe("Verify autocomplete dropdown lists via webdriveruni", () => {
  it.only("Select specific product via autocomplete list", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").as("textBox");
    cy.get("@textBox").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if (prod === productToSelect) {
          $el.click();
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").as("textBox");
        cy.get("@textBox").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";

          if (prod === productToSelect) {
            // $el.click(); deprecated
            $el.click();
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });

        // cy.get("#myInput")
        //   .type("Ginger")
        //   .then(() => {
        //     cy.get('[value="Ginger"]').click({ force: true });
        //     cy.get("#submit-button").click();
        //     cy.url().should("contains", "Ginger");
        //   });
      });
    it("Select specific product via autocomplete list", () => {
      cy.visit("https://www.webdriveruniversity.com/");
      cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

      cy.get("#myInput").type("G");
      cy.get("#myInputautocomplete-list").each(($el, index, $list) => {
        const prodList = $el.text();
        const product = "Grapes";

        if (prodList === product) {
          $el.trigger().click();
          cy.get("@submit-button").click();
          cy.url().should("include", product);
        }
      });
    });
  });
});
