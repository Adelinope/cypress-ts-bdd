declare namespace Cypress{
    interface Chainable {
        accessAccount(): Chainable<Element>
        visitHost(): Chainable<Element>
    }
}
Cypress.Commands.add('accessAccount',()=>{
    cy.fixture('loginData').then(({ username, password }) => {
        cy.get('#user-name').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
    })
})
Cypress.Commands.add('visitHost', ()=>{
    cy.visit('www.saucedemo.com/')
})