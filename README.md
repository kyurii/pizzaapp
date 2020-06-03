Pizza app is a simple app for ordering food.


## Available Scripts
To run the local project you need to install packages in the root directory and in the client .

After that, in the root directory and in the client directory, you should run:
### `npm start`

### Used modules

## CLIENT
The app was blueprinted with react-create-app

To extend webpack condig I used:
    copy-webpack-plugin
    react-app-rewired

Styling packages:
    bootstrap
    react-icons

For asynchronous state management:
    react-redux
    redux
    redux-logger
    redux-thunk

Routing:
    react-router-dom

## SERVER
    body-parser - not used
    cors- CORS
    dotenv - to share env variables
    express - to create a server
    jsonwebtoken - NOT used. For user  validation
    mongoose - to manage Data

###  What could be added :
    - proptypes and testing or typescript
    - JWT authentication for user and admin ( to add pizzas directly from the UI)
    - controllers in the server
    - order forms and validation, for example with FORMIK package
