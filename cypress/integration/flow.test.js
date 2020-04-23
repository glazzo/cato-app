describe('FLOW TEST', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Welcome and status', () => {
    cy.get('[data-cy="status"]').click();
    cy.url().should('include', 'status');
    cy.get('[data-cy="home"]').click()
    cy.url().should('include', '/');
  });
});