import moment from 'moment';

describe('Stories', () => {
    context('Full HD Resolution', () => {
        beforeEach(() => {
           cy.viewport(1920, 1080)
        })

    it('successfully loads home page', () => {
      cy.visit('/'); 
      cy.url().should('include', 'https://bstackdemo.com/')
    });
    
    it('Login and check out', () =>{
        //Check if user is already in the logged in State. 
        //Useful when the tokens are not cleared on restarting the browser or refresh
        cy.get('body').then(($body) => {
            if ($body.find('#logout').length > 0) {
                cy.get('#logout').click()
            }
        })
        cy.login('demouser', 'testingisfun')
        cy.filters('Apple')
        cy.get('.shelf-container').within(() => {
            cy.get('.shelf-item__title').contains('iPhone 12')
            cy.get('.shelf-item__buy-btn').first().click()
        })
        cy.get('.buy-btn').click()
        cy.get('#firstNameInput').type('Rubesh')
        cy.get('#lastNameInput').type('Kunwar')
        cy.get('#addressLine1Input').type('Just Random Address')
        cy.get('#provinceInput').type('NSW')
        cy.get('#postCodeInput').type('2000')
        cy.get('#checkout-shipping-continue').click()
        cy.get('#confirmation-message').contains('Your Order has been successfully placed.')
        
    });

    it('Verify Order', () => {
        cy.get('.button').click()
        cy.get('#orders').click()
        const orderDate = moment().format('LL');
        //Check SHIP TO Contains current User and check Order Date
        cy.get('.a-color-offset-background > .a-box-inner').within(() => {
            cy.get('.a-span3 > .a-size-base > .a-color-secondary').contains(orderDate)
            cy.get(':nth-child(3) > .a-size-base > .a-color-secondary').contains('demouser')
        
        })
    })
    });
});





 

  