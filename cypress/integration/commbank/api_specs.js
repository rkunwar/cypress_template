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
    
    //Invalid Lexical Category
    it('Response Code to 400', ()=>{
       
        cy.request({
            method: 'GET',
            url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/ace?lexicalCategory=asdad&strictMatch=false', 
            failOnStatusCode: false,	
            headers : {
                'app_id': appid,
                'app_key': appkey
            },
              
        }).then((resp) => {
           expect(resp.status).to.eq(400);
           console.log(resp.body.error);
        
        })     
    })
    //Invalid Word
    it('Response Code to 404', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/acasdadae?strictMatch=false', 
            failOnStatusCode: false,	
            headers : {
                'app_id': appid,
                'app_key': appkey
            },
              
        }).then((resp) => {
           expect(resp.status).to.eq(404);
           console.log(resp.body.error);
        
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
    
    it('Translation Response Code to 400', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2', 
            failOnStatusCode: false,
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
                "target": "far"
            }
           
        }).then((resp) => {
            expect(resp.status).to.eq(400);
            
            console.log(resp.body.error.errors[0].message);
                
        });
    })
    it('Translation Response Code to 404', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/', 
            failOnStatusCode: false,
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
                "target": "far"
            }
           
        }).then((resp) => {
            expect(resp.status).to.eq(404);
            console.log(resp.body.message);
                
        });
    })
    
    })
      