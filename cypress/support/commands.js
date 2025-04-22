// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'


//CUSTOM COMMANDS TO SET AND GET LOCAL STORAGE WITH KEY & VALUE PAIR.
Cypress.Commands.add('setLocalStorage',(key,value)=>{
  cy.window().then((window)=>{
    window.localStorage.setItem(key, value)
  })
})

Cypress.Commands.add('getLocalStorage',(key)=>{
  cy.window().then((window)=>{
    return window.localStorage.getItem(key)
  })
})

//CUSTOM COMMAND TO OVERWRITE EXISTING TYPE COMMAND
Cypress.Commands.overwrite('type', (originalFn, ele, text, options)=>{
  if(options && options.sensitive){
    options.log = false

    Cypress.log({
      $el: ele,
      name:'type',
      message: '*'.repeat(text.length)
    })
  }
  return originalFn(ele,text,options)
})