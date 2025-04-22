const emailInput = Cypress.env('emailInput')

context('UI Commands Tutorial',()=>{

  it('links to the actions page correctly', () => {
    // cy.findAllByText('Actions').last().click()
    cy.visit('/');
    cy.findAllByText('Actions').first().click({force:true})
    cy.url().should('include','/commands/action')
  });
  it('types in the password input', () => {
    cy.visit('/commands/actions');
    cy.findByPlaceholderText('Email').type(emailInput).should('have.value','test@example.com')
  });

  it('lets clear an input field', () => {
    cy.visit('/commands/actions');
    cy.findByLabelText('Describe:').type('abc123').should('have.value','abc123')
            .clear().should('have.value','')
        
  });

  it('lets check the checkboxes', () => {
    cy.visit('/commands/actions');
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  });
})