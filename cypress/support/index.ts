// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
before(() => {
  cy.exec('npx tailwindcss -i ./src/assets/css/tailwind.css -m').then(
    ({ stdout }) => {
      if (!document.head.querySelector('#tailwind-style')) {
        const link = document.createElement('style')
        link.id = 'tailwind-style'
        link.innerHTML = stdout

        document.head.appendChild(link)
      }
    }
  )
})
