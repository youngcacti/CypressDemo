class Login {
    usernameInput() {
      return cy.get('#login_button_container > .login-box > form > .form_group > #user-name');
    }
  
    passwordInput() {
      return cy.get('#login_button_container > .login-box > form > .form_group > #password');
    }
  
    submitButton() {
      return cy.get('.login_wrapper-inner > #login_button_container > .login-box > form > #login-button');
    }
  }
  
  export default new Login();