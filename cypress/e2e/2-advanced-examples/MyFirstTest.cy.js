
const navbarText = Cypress.env('navbarText')
context('MyFirstTest',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })

  // it('Enter Coupon Code and Submit',()=>{
  //     cy.get('.action-form').find('#couponCode1').type('abc123');
  //     cy.get('.action-form').submit();
  //     cy.get('.action-form').next().should('contain','Your form has been submitted!')
  // })

  // it('Find Button with horizontal scrolling',()=>{
  //     cy.get('#scroll-horizontal button').should('not.be.visible')
  //     cy.get('#scroll-horizontal button').scrollIntoView()
  //     cy.get('#scroll-horizontal button').should('be.visible')
  // })

  it('Correctly renders the cypress website link',()=>{
    cy.findByText(navbarText).should('exist')
  })
    
})