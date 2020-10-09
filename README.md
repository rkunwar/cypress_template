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

To run test for API: 
cypress run --spec .\cypress\integration\commbank\api_specs.js


