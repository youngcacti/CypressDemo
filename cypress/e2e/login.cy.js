import login from "../support/page_objects/login";
import products from "../support/page_objects/products";

describe("Login", function () {
    it("HAPPY PATH: the user tries to log in the site with correct information", function() {
        let siteURL = 'https://www.saucedemo.com/';
        cy.visit(siteURL);
        cy.login('standard_user', 'secret_sauce').then(() => {
            cy.url().should('eq', siteURL+'inventory.html')
            products.productsTitle().should("have.text", "Products");
        })        
    })
});