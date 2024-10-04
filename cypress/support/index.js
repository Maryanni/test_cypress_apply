import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Error detectado:', err);
    if (err.message.includes('fbq')) {
      return false;
    }
      return false;
  });
  