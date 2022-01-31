
describe('API Calls', () => {

    it('successfully makes a Login Request', ()=> {
        cy.request({
            method: 'POST',
            url: 'api/signin', 
            body: {
                "userName":"demouser",
                "password":"testingisfun99"
            }  
        }).then((resp) => {
            console.log(resp.body)
            expect(resp.status).to.eq(200);      
        })
    })

    it('Get Products and verify data structures', ()=>{
        cy.request({
            method: 'GET',
            url: 'api/products', 
            qs: 'demouser' 
        }).then((resp) => {
            console.log(resp.body)
            expect(resp.status).to.eq(200);
            expect(resp.body.products).to.be.a('array')  
            expect(resp.body).to.not.be.null
            expect(resp.body.products)
            expect(resp.body.products[0]).to.have.property('availableSizes')
        })
    })
    })
      