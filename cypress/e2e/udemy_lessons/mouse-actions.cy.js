///<reference types="cypress" />

describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });
  it("drag and drop", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("double click", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#double-click").trigger("dblclick");
  });
  it("Click and hold with assertion", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
