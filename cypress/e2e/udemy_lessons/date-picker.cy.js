/// <reference types="Cypress" />

//const { use } = require("chai");

describe("Test Datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate()); //get current date i.e.
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date.getDate() + 5); //get current date+5 days i.e.
    // cy.log(date2.getDate());

    let date = new Date();
    date.setDate(date.getDate() + 8);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleDateString("default", { month: "long" });
    let futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear);
    cy.log("Future year to select: " + futureMonth);
    cy.log("Future year to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }
    function selectFutureDay() {
      cy.get('[class = "day"]').contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
