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
 Cypress.Commands.add("login", (user, password) => { 
    cy.get('#signin').click();
    cy.get('#username').type(`${user}{enter}`)
    cy.get('#password').type(`${password}{enter}`)
    cy.get('#login-btn').click()
  })
//
//
// -- This is a child command --
 Cypress.Commands.add("filters", (options) => { 
    cy.get('.filters').within(()=>{ 
        cy.get('label').contains(options).click()
    })
  })



  Cypress.Commands.add('isExistElement', selector => {
    cy.get(selector).then(($selector) => {
      if ($selector.find(selector).length > 0) {
        return true
      } else {
        return false
      }
    })
  });
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })