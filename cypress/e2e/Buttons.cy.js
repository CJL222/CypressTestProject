describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/buttons')

    cy.get('button[id="doubleClickBtn"]').dblclick()
    cy.get('p[id="doubleClickMessage"]').should('have.text', 'You have done a double click')

    cy.get('button[id="rightClickBtn"]').rightclick()
    cy.get('p[id="rightClickMessage"]').should('have.text', 'You have done a right click')

    cy.get('button').contains(/^Click Me$/).click()
    cy.get('p[id="dynamicClickMessage"]').should('have.text', 'You have done a dynamic click')
  })
})