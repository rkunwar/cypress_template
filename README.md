# cypress_template
Cypress Test for Website and API. 


# Installations
1. Node JS and Cypress is Required.
2. Navigate to the /cypress_template and hit npm i to install the required packages. I have excluded the node_modules as it makes the repo unnecessarily big. 

Alternatively, if you have Cypress Test Runner installed, then the test can be run by extracting the source code to local and run from Test Runner with 'cypress open' command on /cypress_template directory. 

# UI Tests: 
Implementation Details: 
Tests are all stored in /cypress_template/cypress/integration/commbank 

This spec file has tests in three parts which is basically done for 3 Viewports as requested. 
1. Web Desktop with FULL HD Resolution(1920*1080)
2. Tablet where presets been selected as iPad
3. Mobile Device selected as iPhone. 

Test will run through Each menu items in Nav Bar and verify after the page is loaded looks for the title as Assertions. 

To run the test for CommBank Browser Navigation Tab - Replace the {{browser}} with 'firefox' or 'chrome': 
Navigate to /cypress_template and hit: 

cypress run --browser {{browser}} --spec .\cypress\integration\commbank\home_specs.js 


# API Tests: 
The OXFORD Dictionary API app_id and app_key is stored in the cypress.env.json file. Stored this here as they will be different to each users. While making API Calls, the test specs retrieves those details from env file and uses them on the request. 

1. First Test will make a request to check the origin of word. 
   On the Response received, if the test is run in Browser, I have parsed the body of the JSON Response and you can see the origin of the word printed on the Console of the Dev    Tools. 
2. Second and third tests are basically making invalid Requests to have the response code 404 and 400. I have a assertion in place to check the response codes match the expected output. 

3. Third Test will make a request to translate the word to French and the subsequent calls will be invalid Requests to have the response code 404 and 400. I have a assertion in place to check the response codes match the expected output.  

To run test for API: 
cypress run --spec .\cypress\integration\commbank\api_specs.js

# Known Problems
There could be issues while running the tests in Firefox Browser with version < 80. This is because of the slowness of the Firefox browser to do the Garbage Collection cleanup between the tests. To mitigate i have disabled the GC Collection on Global Cypress Configs and my tests were running on Firefox Browser version 81. 


