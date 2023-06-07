describe('template spec', () => {
  it.only('passes', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.visit('https://demoqa.com/alerts')

    cy.get('button[id="alertButton"]').click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
    })
   
  })
})