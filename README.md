# EDU API CoR3
> Q & A platform where people can ask questions and provide responses.

## Tech Stack

* Node.js
* Express.js
* JSON web token (JWT)
* Bcrypt


## Main Files: Project Structure
```Project Folder
     |-- src
        |-- index.js' ** the main driver of the app'
        |-- server
            |-- app.js
            |-- config
            |   |-- connect.js
            |   |-- envTypes.js
            |-- controllers
            |   |-- authControllers.js
            |   |-- authMiddleware.js
            |   |-- qnControllers.js
            |-- models
            |   |-- Questions.js
            |   |-- User.js
            |   |-- schemas
            |       |-- question.js
            |       |-- user.js
            |-- routes
                |-- authRouter.js
                |-- qnRouter.js

```


## Environment Variables

* PORT -- `server port number`
* DB_URL -- `database URL`
* SECRET -- `Secret key for verifying the token`
* NODE_ENV -- `Specifies the Server environment (development, local)`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.
   (you must have [node](https://nodejs.org) installed)
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.


----
## Authentication CRUD Operations

**SignUp User**
----
Signs in a single user into the Application.

| Endpoint      | Method |
|---------------|--------|
| `/api/signup` | POST   |   


**Login User**
----
  Logs in a single user in the application.       

| Endpoint     | Method |
|--------------|--------|
| `/api/login` | GET    |



## Authentication CRUD Operations

**Get Question By ID**
----
  Returns json data about a single question.

| Endpoint  | Method|
|-----------|-------|
|`/api/:id` | GET   |

<br/>
<br/>

**Delete User By ID**
----
  Delets a single user from the Data Base.

| Endpoint  | Method |
|-----------|--------|
| `/api/:id`| DELETE |

<br/>
<br/>


**Create a question**
----
  Create in a single user profile into the Application.

| Endpoint      | Method |
|-------------- |--------|
| `/api/create` | POST   |
<br/>
<br/>

**View all questions & Answers**
----
  Logs in all single user profiles in the application.

| Endpoint | Method |
|----------|--------|
|`/api/`   | GET    |

<br/>

## Remarks
More features to be added in the near future