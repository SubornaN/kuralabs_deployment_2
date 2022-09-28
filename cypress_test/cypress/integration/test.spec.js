describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://127.0.0.1:5000/')

        cy.get('title')
            .invoke('text')
            .should("equal", "URL Shortener")
    });

});
