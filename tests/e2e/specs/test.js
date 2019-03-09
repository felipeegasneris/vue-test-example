// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'HOLA')
    cy.get('button').click()
    cy.contains('p', '1')
    cy.get('button').click()
    cy.contains('p', '2')

  })
})
