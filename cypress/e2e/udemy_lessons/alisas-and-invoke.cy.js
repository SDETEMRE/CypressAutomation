///<reference types="cypress" />

describe("alias and invoke", () => {
  it("validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("validate numbers of product and cart text", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("lengthOfProduct");
    cy.get("@lengthOfProduct").should("have.length", 16);
    cy.get("@lengthOfProduct")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("validate numbers of product and cart text", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("lengthOfProduct");

    
  });
});
