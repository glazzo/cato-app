Cypress.Commands.add("chooseReactSelectOption", (selector, text, option) => {
  cy
    .get(`${selector} input`)
    .first()
    .click({ force: true })
    .type(text, { force: true })
    .get('[class$="MenuList"]')
    .contains(option)
    .click({ force: true });
});

Cypress.Commands.add("statusSelector",(selector, status, expectedMessage)=>{
    cy.chooseReactSelectOption(selector, status, status);
    cy.get('p[data-cy="status-message"]').contains(expectedMessage);
    cy.get('img[data-cy="status-image"]').invoke('attr', 'src')
      .should('include', status)
})