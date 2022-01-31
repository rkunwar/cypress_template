# cypress_template
Cypress Test for Website and API. 


# Installations
1. Node JS and Cypress is Required.
2. Navigate to the /cypress_template and hit npm i to install the required packages. I have excluded the node_modules as it makes the repo unnecessarily big. 

Alternatively, if you have Cypress Test Runner installed, then the test can be run by extracting the source code to local and run from Test Runner with 'cypress open' command on /cypress_template directory. 

# UI Tests: 
Implementation Details: 
Tests are all stored in /cypress_template/cypress/integration/test_task 

This spec file has tests Web Desktop with FULL HD Resolution(1920*1080) Viewports as requested. 


To run the test for Browser - Replace the {{browser}} with 'firefox' or 'chrome': 
Navigate to /cypress_template and hit: 

cypress run --browser {{browser}} --spec .\cypress\integration\test_task\home_specs.js 

# API Tests: 
API tests are done to login to the application and get the list of products and verify the response data structures. 

To run test for API: 
cypress run --spec .\cypress\integration\test_task\api_specs.js



# CI Test Run
To run test in CI(headless mode) just type below command: 

npm run test:ci

# Known Problems
There could be issues while running the tests in Firefox Browser with version < 80. This is because of the slowness of the Firefox browser to do the Garbage Collection cleanup between the tests. To mitigate i have disabled the GC Collection on Global Cypress Configs and my tests were running on Firefox Browser version 81. 


