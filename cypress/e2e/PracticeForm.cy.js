describe('Submit Practice Form', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('Corey')
    cy.get('#lastName').type('Little')
    cy.get('#userEmail').type('CoreyJLittle@outlook.com')
    cy.get('input[id="gender-radio-1"]').click({force: true})
    cy.get('input[id="userNumber"]').type('6478841365')
    cy.get('input[id="dateOfBirthInput"]').click({force: true})
    cy.get('select[class="react-datepicker__month-select"]').select('September')
    cy.get('select[class="react-datepicker__year-select"]').select('1986')
    cy.get('div[class*="react-datepicker__day--017"]').click()
    cy.get('input[id="subjectsInput"]').type('Computer Science')
    cy.get('input[id="subjectsInput"]').type('{enter}')
    cy.get('label[for*="hobbies-checkbox"]').contains('Sports').click()
    cy.get('input[type=file]').selectFile('cypress/fixtures/BlueJays.jpg') 
    cy.get('textarea[id="currentAddress"]').type('123 Fake Street, Uxbridge, Ontario L9P 1T7')
    cy.get('div[id="state"]').click()
    cy.get('div[id="state"]').children('div').contains('NCR').click()
    cy.get('div[id="city"]').click()
    cy.get('div[id="city"]').children('div').contains('Delhi').click()
    /*
    Normally I try and avoid behind the scenes browser actions that a user wouldn't normally be able to do but the submit button wasn't rendering properly when running
    the test in cypress.
    */
    cy.get('#userForm').submit()
    cy.get('div[class= "modal-title h4"]').should('have.text', 'Thanks for submitting the form')

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Student Name").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "Corey Little")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Student Email").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "CoreyJLittle@outlook.com")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Gender").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "Male")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Mobile").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "6478841365")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Date of Birth").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "17 September,1986")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Subjects").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "Computer Science")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Hobbies").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "Sports")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "Address").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "123 Fake Street, Uxbridge, Ontario L9P 1T7")
    })

    cy.contains("th", "Label")
    .invoke("index").then((index) => {
      cy.contains("td", "State and City").should("have.length", 1).siblings().eq(index - 1).invoke("text").should("eq", "NCR Delhi")
    })

    cy.get('button[id=closeLargeModal]').click()
    cy.get('div[class= "modal-title h4"]').should('not.exist');

  })
})