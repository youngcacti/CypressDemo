class Login {
    loginButton() {
        return cy.get('.panel > .panel > .header > .authorization-link > a');
    }

    welcomeText() {
        return cy.get(':nth-child(2) > .greet > .logged-in');
    }

    usernameInput() {
      return cy.get('#email');
    }
  
    passwordInput() {
      return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass');
    }
  
    submitButton() {
      return cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2');
    }
  }
  
  export default new Login();