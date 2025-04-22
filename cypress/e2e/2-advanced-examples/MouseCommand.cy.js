context('Mouse Command Tutorial',()=>{
  beforeEach(()=>{
    cy.visit('/commands/actions')     
  })

  it('triggers a popover on click',()=>{
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })
  it('clicks on different places on canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 100)
  });

  it('can double click to type in', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible').clear().type('Hello World')
  });

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible').clear().type('Edit',{sensitive:true})
  });
  it('shows dropdown menu with mouse hover gesture', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  });
})