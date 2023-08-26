describe("STotalizador", () => {
  it("Shows the amount of the cantidad", () => {
    cy.visit("/");
    cy.get("#cantidad").type(4);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "4");
  });
});
