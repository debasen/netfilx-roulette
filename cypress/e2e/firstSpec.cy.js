describe('Test Genre Selection', () => {
  it('Test search button', () => {
    cy.visit('http://localhost:3000/')

    // open the login modal
    cy.get('button').contains('Horror').click()
    cy.contains('p', 'Horror').should('be.visible')
  })
})