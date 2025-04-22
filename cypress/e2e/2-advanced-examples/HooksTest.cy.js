context('Hooks Tutorial',()=>{
  before(()=>{
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
  })
  beforeEach(()=>{
    cy.visit('/');
  })
  afterEach(()=>{
    cy.log('each hook after each test')
  })

  it('visits the homepage', () => {
  });
  it('checks h1 exists', () => {
    cy.get('h1').should('exist')
        
  });
}
)