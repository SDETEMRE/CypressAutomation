///<reference types="cypress" />

describe("JSON Object", () => {
  it("Json Object Examples", () => {
    const exampleObject = { key: "Tim", key2: "Jones" };
    const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];

    const exampleArrayOfObjects = [
      { key: "Luke" },
      {
        firstName: "Jim",
        lastName: "Blogs",
      },
      {
        firstName: "Sarah",
        lastName: "Parker",
      },
    ];

    const users = {
      firstName: "Joe",
      lastName: "Blogs",
      Age: 30,
      Students: [
        {
          firstName: "Jim",
          lastName: "Blogs",
        },
        {
          firstName: "Sarah",
          lastName: "Parker",
        },
      ],
    };

    cy.log(exampleObject["key"]);
    cy.log(exampleObject["key2"]);
    cy.log(exampleObject.key);

    cy.log(exampleArrayOfValues[0]);
    cy.log(exampleArrayOfValues[1]);
    cy.log(exampleArrayOfValues[2]);

    cy.log(users.Students[0].firstName);

    cy.log(exampleArrayOfObjects[0].key);
    cy.log(exampleArrayOfObjects[1].lastName);
    cy.log(exampleArrayOfObjects[2]);
  });
});
