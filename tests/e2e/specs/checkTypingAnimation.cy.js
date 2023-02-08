// https://docs.cypress.io/api/table-of-contents

describe('NPM text types', () => {
    it("See if the text NPM is not yet present on load", () => {
        cy.viewport(1496, 1362)
        cy.visit('/')
        cy.contains('#typingAnimation', 'npm aannemen @Nigel/CV').should('not.exist')
        cy.wait(4000)
        cy.contains('#typingAnimation', 'npm aannemen @Nigel/CV').should('exist')
    })
})