import login from "../support/page_objects/login";

describe("Login", function () {
    it("the user logs in the site", function() {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.intercept('GET', '/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html').as('loginCaptcha');

        cy.wait('@loginCaptcha').then(() => {
            cy.login('yohelmuro@gmail.com', 'Test12345');
        })
        
        login.welcomeText().should("have.text", "Welcome, Yohel Muñoz!");
        
    })
});