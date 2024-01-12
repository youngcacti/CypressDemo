import login from "../support/page_objects/login";

Cypress.Commands.add('login', (email, password) => { 
    login.loginButton().click();
    login.usernameInput().type(email);
    login.passwordInput().type(password);
    login.submitButton().click();
})
