context('Assertion Test',()=>{
  beforeEach(()=>{
    cy.visit('/commands/actions')
  })
  it('shows an active class for the current page',()=>{
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })

  it('should not habe an active class on inactive pages',()=>{
    cy.get('.dropdown-menu').find('li').first().should('not.have.class','active')
  })
})