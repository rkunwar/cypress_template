# cypress_template
Cypress Test for Website and API. 


#UI Tests: 
Implementation Details: 
This spec file has tests in three parts which is basically done for 3 Viewports as requested. 
1. Web Desktop with FULL HD Resolution(1920*1080)
2. Tablet where presets been selected as iPad
3. Mobile Device selected as iPhone. 

Test will run through Each menu items in Nav Bar and verify after the page is loaded looks for the title as Assertions. 

To run the test for CommBank Browser Navigation Tab - Replace the Browser with firefox or chrome: 
cypress run --browser {{browser}} --spec .\cypress\integration\commbank\home_specs.js 




#API Tests: 
1. First Test will make a request to check the origin of word. 
   On the Response received, if the test is run in Browser, I have parsed the body of the JSON Response and you can see the origin of the word printed on the Console of the Dev    Tools. 
2. Second and thord tests are basically stubbing out the response to have the response code 404 and 400. I have a assertion in place to check the response codes match the expected output. 

To run test for API: 
cypress run --spec .\cypress\integration\commbank\api_specs.js


