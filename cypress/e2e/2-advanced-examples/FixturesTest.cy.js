context('Cypress Fixture Tutorial',()=>{
  beforeEach(()=>{
    cy.fixture('example').then(function (data){
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })
  it('uses fixture data in a network request', function()  {
    cy.visit('/commands/network-requests');
    cy.intercept('GET', '**/comments/*',this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res)=>{
      cy.log('Response: ', res)
    })

  });
  it('pulls data from a fixture', () => {
    cy.fixture('example').then((data)=>{
      cy.log('Data:',data)
    })
  });

  it('updates fixture data inline', () => {
    cy.fixture('example').then((data)=>{
      data.email = 'emailtest@example.com'
      cy.log('UPDATED:', data)
    })
  });

})