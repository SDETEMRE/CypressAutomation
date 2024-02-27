describe("verifying variables,cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup");
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare");
    makeupLink.click();
    cy.get('[class="maintext"]').contains("Makeup");
  });

  it("contact form work", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //all can run at the same time because promises (using then help us to use the same
    // webelement)
    //cypress commands and chaining example

    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");

    //jquery approach

    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstName = text.find("#field_11").text();
      expect(firstName).to.contains("First name:");

      //embeded commands closure
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
      });
    });
  });

  it("contact form work", () => {
    cy.visit(
      "https://automationteststore.com/index.php?rt=product/category&path=52"
    );

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("index " + index + ": " + $el.text());
    });
  });

  it.only("contact form work", () => {
    cy.visit(
      "https://automationteststore.com/index.php?rt=product/category&path=52"
    );

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
