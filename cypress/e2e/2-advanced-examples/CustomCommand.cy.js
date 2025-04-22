const token = 'abcd123'

context('Custom Command Tutorial',()=>{
  it('sets a token in local storage', () => {
    cy.setLocalStorage('token',token)
  });

  it('sets and gets a token in local storage', () => {
    cy.setLocalStorage('token',token)
    cy.getLocalStorage('token').should('eq',token)
  }); 

  it('overwrites the type command by using sensitive characters', () => {
    cy.visit('/commands/actions');
    cy.findAllByPlaceholderText('Password').type('abc123')
    cy.findAllByPlaceholderText('Password').type('abc123',{sensitive:true})
  });
})