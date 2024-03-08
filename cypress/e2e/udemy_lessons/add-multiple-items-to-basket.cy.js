///<reference types="cypress" />
import AutoStore_Homepage_Po from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_Po from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
describe("Add multiple items to basket", () => {
  const autoStore_Homepage_PO = new AutoStore_Homepage_Po();
  const autoStore_HairCare_Po = new AutoStore_HairCare_Po();
  before(() => {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    // cy.visit("https://www.automationteststore.com/");
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
  });

  it("Add specific items to basket", () => {
    // globalThis.data.productName.forEach(function (element) {
    //   cy.addProductToBasket(element);
    // });
    // cy.get(".dropdown-toggle > .fa").click();
    autoStore_HairCare_Po.addHairCareProductsToBasket();
  });
});
