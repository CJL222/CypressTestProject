describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('input[name="like"][id="yesRadio"]').should('not.be.checked')
    cy.get('input[name="like"][id="impressiveRadio"]').should('not.be.checked')
    cy.get('input[name="like"][id="noRadio"]').should('be.disabled')
    cy.get('input[name="like"][id="yesRadio"]').check({force: true})
    cy.get('input[name="like"][id="yesRadio"]').should('be.checked')
    cy.get('p[class="mt-3"]').should('have.text', 'You have selected Yes')
    cy.get('input[name="like"][id="impressiveRadio"]').should('not.be.checked')
    cy.get('input[name="like"][id="noRadio"]').should('be.disabled')

    cy.get('input[name="like"][id="impressiveRadio"]').check({force: true})
    cy.get('p[class="mt-3"]').should('have.text', 'You have selected Impressive')
    cy.get('input[name="like"][id="noRadio"]').should('be.disabled')
    cy.get('input[name="like"][id="yesRadio"]').should('not.be.checked')

  })
})