describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://url-shortner-dev.us-east-1.elasticbeanstalk.com/')

        cy.get('title')
            .invoke('text')
            .should("equal", "URL Shortener")
    });

});