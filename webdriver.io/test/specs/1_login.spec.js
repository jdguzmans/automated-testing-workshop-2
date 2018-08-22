/* global describe expect it browser */

describe('Register and login', function () {
  it('Creates an account', function () {
    browser.url('https://losestudiantes.co')
    browser.click('button=Cerrar')
    browser.waitForVisible('button=Ingresar', 5000)
    browser.click('button=Ingresar')

    const cajaSignUp = browser.element('.cajaSignUp')

    const firstNameInput = cajaSignUp.element('input[name="nombre"]')
    firstNameInput.click()
    firstNameInput.keys('Pruebas')

    const lastNameInput = cajaSignUp.element('input[name="apellido"]')
    lastNameInput.click()
    lastNameInput.keys('Automaticas')

    const emailInput = cajaSignUp.element('input[name="correo"]')
    emailInput.click()
    emailInput.keys('taller_tan_largo@hotmail.commmmm')

    const programInput = cajaSignUp.element('select[name="idPrograma"]')
    programInput.selectByValue('59')

    const passwordInput = cajaSignUp.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys('12345678')

    const acceptTerms = cajaSignUp.element('input[name="acepta"]')
    acceptTerms.click()

    browser.click('button=Registrarse')
    browser.pause(4000)

    const alertText = browser.element('div[class="sweet-alert "]').element('h2').getText()
    expect(alertText).toBe('Registro exitoso!')

//       cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Juan David')
//       cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Guzmán')
//       cy.get('.cajaSignUp').find('input[name="correo"]').click().type('jd.guzman10@uniandes.edssu.co')
//       cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('59')
//       cy.get('.cajaSignUp').find('input[name="password"]').click().type('12345678')
//       cy.get('.cajaSignUp').find('input[name="acepta"]').check()
//       cy.get('.cajaSignUp').contains('Registrarse').click()
//       cy.contains('Verifica tu correo y activa tu cuenta Con esto ya podrás calificar profesores')
  })

//     it('Tries to create an account with an already existing account', function () {
//       cy.visit('https://losestudiantes.co')
//       cy.contains('Cerrar').click()

//       cy.contains('Ingresar').click()
//       cy.get('.cajaSignUp').find('input[name="nombre"]').click().type('Juan David')
//       cy.get('.cajaSignUp').find('input[name="apellido"]').click().type('Guzmán')
//       cy.get('.cajaSignUp').find('input[name="correo"]').click().type('jd.guzman10@uniandes.edu.co')
//       cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('59')
//       cy.get('.cajaSignUp').find('input[name="password"]').click().type('12345678')
//       cy.get('.cajaSignUp').find('input[name="acepta"]').check()
//       cy.get('.cajaSignUp').contains('Registrarse').click()
//       cy.contains('Error: Ya existe un usuario registrado con el correo')
//     })
})
