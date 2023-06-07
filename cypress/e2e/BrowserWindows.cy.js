describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://demoqa.com/browser-windows', {
      onBeforeLoad (win) {
        cy.stub(win, 'open').as('open')
      }
    })
    cy.get('button[id="windowButton"]').click()
    cy.get('@open').should('have.been.calledOnce')

    cy.visit('https://demoqa.com/sample')
    cy.get('h1[id="sampleHeading"]').should('have.text', 'This is a sample page')

    cy.visit('https://demoqa.com/browser-windows', {
        onBeforeLoad(win) {
          cy.stub(win, 'open')
        }
      })
 
    cy.get('button[id="tabButton"]').click()
    cy.window().its('open').should('have.been.called')

    cy.get('button[id="messageWindowButton"]').click()
    cy.window().its('open').should('have.been.called')

  })
})