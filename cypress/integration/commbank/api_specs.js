const { isExportDeclaration } = require("typescript");

describe('Oxford API Calls', () => {
   
const appid = Cypress.env('app_id');
const appkey = Cypress.env('app_key');
var word = 'insurance'
var url = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/'+word+'?fields=etymologies&strictMatch=false'

it('successfully makes a Request to check the origin of words', ()=> {
    cy.request({
        method: 'GET',
        url: url, // baseUrl will be prepended to this url
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
    cy.server()
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

    cy.server()
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

/*
it("Translate Word into French", () =>{
    cy.request({
        method: 'GET',
        url: url, // baseUrl will be prepended to this url
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
*/
})
  