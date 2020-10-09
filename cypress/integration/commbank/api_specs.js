describe('Oxford API Calls', () => {
   
const appid = Cypress.env('app_id');
const appkey = Cypress.env('app_key');
const rapidapi_host = Cypress.env('x-rapidapi-host');
const rapidapi_key = Cypress.env('x-rapidapi-key');

var word = 'insurance'
var url = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'+word+'?fields=etymologies&strictMatch=false'

it('successfully makes a Request to check the origin of words', ()=> {
    cy.request({
        method: 'GET',
        url: url, 
        headers : {
            'app_id': appid,
            'app_key': appkey
        }
       
    }).then((resp) => {
        console.log(resp.body.results[0].lexicalEntries[0].entries[0].etymologies);
        expect(resp.status).to.eq(200);
        expect(resp.body.results[0].lexicalEntries[0].entries[0]).to.have.property('etymologies');
    
    })
})

it('Mock the Response Code to 404', ()=>{
    cy.server();
    cy.route({
      method: 'GET',
      url: 'url',
      status: 404,
      response: {
       message: "Server not Found."
    },
    headers : {
        'app_id': appid,
        'app_key': appkey
    }
    }).then((resp) => {
        console.log(resp.response.message);
        expect(resp.status).to.eq(404);

    })
})

it('Mock the Response Code to 400', ()=>{

    cy.server();
    cy.route({
      method: 'GET',
      url: 'url',
      status: 400,
      response: {
       message: "Bad Request, Check the Request."
      },
      headers : {
        'app_id': appid,
        'app_key': appkey
    }
    }).then((resp) => {
        console.log(resp.response.message);
        expect(resp.status).to.eq(400);

    })
})


it("Translate Word into French", () =>{
    cy.request({
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2', 
        headers : {
            "x-rapidapi-host": rapidapi_host,
	        "x-rapidapi-key": rapidapi_key,
	        "accept-encoding": "application/gzip",
	        "content-type": "application/x-www-form-urlencoded",
	        "useQueryString": true
        }, 
        body: {
            "source": "en",
            "q": "Test",
            "target": "fr"
        }
       
    }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.data.translations[0]).to.have.property('translatedText');
        console.log(resp.body.data.translations[0].translatedText);
            
    });
});

it('Mock the Response Code to 400', ()=>{
    cy.server();
    cy.route({
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2', 
        headers : {
            "x-rapidapi-host": rapidapi_host,
	        "x-rapidapi-key": rapidapi_key,
	        "accept-encoding": "application/gzip",
	        "content-type": "application/x-www-form-urlencoded",
	        "useQueryString": true
        }, 
        body: {
            "source": "en",
            "q": "Test",
            "target": "fr"
        }, 
           
        status: 400,
        response: {
         message: "Bad Request, Check the Request."
        }
       
       
    }).then((resp) => {
        console.log(resp.response.message);
        expect(resp.status).to.eq(400);

    })  
})
it('Mock the Response Code to 404', ()=>{
    cy.server();
    cy.route({
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2', 
        headers : {
            "x-rapidapi-host": rapidapi_host,
	        "x-rapidapi-key": rapidapi_key,
	        "accept-encoding": "application/gzip",
	        "content-type": "application/x-www-form-urlencoded",
	        "useQueryString": true
        }, 
        body: {
            "source": "en",
            "q": "Test",
            "target": "fr"
        },  
        
        status: 404,
        response: {
         message: "Server not Found."
        } 
    }).then((resp) => {
        console.log(resp.response.message);
        expect(resp.status).to.eq(404);

    })  
})

})
  