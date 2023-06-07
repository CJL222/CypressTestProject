describe('template spec', () => {
  it.only('passes', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.visit('https://demoqa.com/alerts')

    cy.get('button[id="alertButton"]').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
    })

    cy.get('button[id="timerAlertButton"]').click()
    cy.wait(5000)
    .then(() => {
      expect(stub.getCall(1)).to.be.calledWith('This alert appeared after 5 seconds')
    })

    cy.get('button[id="confirmButton"]').click()
      cy.on('window:confirm', (t) =>{
        expect(t).to.equal('Do you confirm action?')
      })

      cy.on('window:confirm', (t) =>{
        return false;
      })

      cy.get('button[id="confirmButton"]').click()
      cy.get('span[id="confirmResult"]').should('have.text', 'You selected Cancel')

      cy.window().then(function(p){
        cy.stub(p, "prompt").returns('corey')
      })

      cy.get('button[id="promtButton"]').click()
      cy.get('span[id="promptResult"]').should('have.text', 'You entered corey')
  })
})