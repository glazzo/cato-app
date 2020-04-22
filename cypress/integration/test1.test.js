import statuses from '../../src/statuses';
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Selected Status 200 ', () => {
    cy.chooseReactSelectOption('#selector-status', '200', '200');
    cy.get('p').contains('OK');
    cy.get('img').invoke('attr', 'src')
      .should('include', '200')
  });

  it('Selected Status 100 ', () => {
    cy.chooseReactSelectOption('#selector-status', '100', '100');
    cy.get('p').contains(statuses[100].message);
    cy.get('img').invoke('attr', 'src')
      .should('include', '100')
  });

  it('Selected Status 404 ', () => {
    cy.statusSelector('#selector-status','404',statuses[404].message);
  });
  
  // Object.keys(statuses).map(statusCode=>{
  //   it(`Selected Status ${statusCode} `, () => {
  //     cy.statusSelector('#selector-status',`${statusCode}`,statuses[statusCode].message);
  //   });
  // })
 
});