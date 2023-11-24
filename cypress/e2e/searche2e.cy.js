describe('SearchForm Component, should update form and trigger search', () => {
  it('Should update the search value', () => {
    cy.visit('http://localhost:3000/');

    const searchTerm = 'TestMovie';
    cy.get('.search-box').type(searchTerm);
    cy.get('.search-box').should('have.value', searchTerm);

  });

  it('Should trigger search when submitted', () => {
    cy.visit('http://localhost:3000/');

    const searchTerm = 'TestMovie';
    cy.get('.search-box').type(searchTerm);
    cy.intercept('GET', '**/movies**').as('searchRequest');
    cy.get('.btn-submit').click();
    cy.wait('@searchRequest', { timeout: 10000 }).then((interception) => {
      expect(interception.request.url).to.include('search=TestMovie');
    });
  })
});
