context('Asynchornus Test',()=>{
  it('types into an email field',()=>{
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    // cy.wait(2000).then(()=>{
    //   fetch('https://api.spacexdata.com/v3/missions')
    //             .then((res)=>res.json())
    //             .then((data)=>{
    //               console.log(data)
    //             })
    // })
        
  })
})