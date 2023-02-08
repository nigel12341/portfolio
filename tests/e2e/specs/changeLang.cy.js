// https://docs.cypress.io/api/table-of-contents

describe('Language switcher working', () => {
  it('See if the current language is Dutch', () => {
    cy.viewport(1496, 1362)
    cy.visit('/')
    cy.contains('p', 'Ik ben een 2e jaars HBO-ICT Software Engineering student bij de Hogeschool Van Amsterdam.')
  })
  it('Switch to English', () => {
    cy.viewport(1496, 1362)
    cy.visit('/')
    cy.get('#langSwitcher').select('en')
    cy.contains('p', 'I am a second year Software Engineering student at the Amsterdam University of Applied Sciences.')
  })
})