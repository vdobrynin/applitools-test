describe('visual test', () => {

    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'ngx cypress test app',
            testName: Cypress.currentTest.title,
        })
    })

    it('test applitools demo app', () => {
        cy.visit('/')
        cy.eyesCheckWindow({
            tag: "Home Page"
        });

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.eyesCheckWindow({
            tag: "Form Layouts Page"
        });
    })
    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })
})