
## &nbsp; Developer Ion Chirita

## &nbsp; Todos App

Stack used for this project: 

React Hooks, Redux, useDispatch, useEffect, useSelector, useState Styled Components Typescript  React Router Responsive Design Material UI, react-hook-form, react-toastify

## &nbsp; How to run the code

Then just run the following command:

```sh
    1. Clone repository
    2. yarn
    3. make sure port 3000 is empty
    4. yarn start
```
 ## &nbsp; Features

Response from server is sent to Toast message logic : Success actions is displayed with green. All errors, validation responses with red.
GOOD TASTE CODE HANDLING implemented, using LODASH:  eg:  const text = _.get(req, "body.text", "");

Validation, edge cases implemented for Errors Handling:

1.  MongoDB ValidationError, text should be > 4 characters
	This can be tested by changing some settings in React form validation. 
	Go to React  src/types/constants.ts , change NUM_CHARACTERS_VALIDATION to 2, then add only 3 charaters in Add Todo Form, then press Submit. 
	An error message will appear: Text should be at least 5 characters
	This value can be changed also from NodeJS  app/constants/constants.js  NUM_CHARACTERS_VALIDATION

2. Other validation made for delete action: 
   - multiple validations on Nodejs are implemented: ID with empty value, INVALID ID,  NO_TODO FOUND WITH SPECIFIED ID.
3. Validation for create action on Nodejs is implemented : Empty text value
4. On success delete and add Todo action, a green toast will be displayed with success message.
5. Implementation for Front end error message if nodejs app is down. To test it Stop node app, then refresh react app to check behaviour.

