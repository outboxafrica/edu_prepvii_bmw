# EDU API CoR3
> Q & A platform where people can ask questions and get responses.

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
            |-- controllers
            |   |-- auth.js
            |   |-- commentController.js
            |   |-- postController.js
            |-- models
            |   |-- Comment.js
            |   |-- Posts.js
            |   |-- User.js
            |-- public
            |   |-- index.js
            |-- routes
                |-- routes.js

```


## Environment Variables

* PORT -- `server port number`
* DB_URL -- `database URL`
* SECRET -- `Secret key for verifying the token`
* NODE_ENV -- `Specifies the Server environment (development, local, production)`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.
   (you must have [node](https://nodejs.org) installed)
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.


----
## User CRUD Operations

**Register User**
-----------------
Registers a single user into the Application.

| Endpoint       | Method | Params  | Data type |
|--------------- |--------|---------|-----------|
| `/api/register` | POST   | `None`  |   `None`  |  

* **Request Body**
    ```json
        {
            "username"    : "phillip",
            "password"    : "123",
            "passwordCheck" : "123"
        }


* **Success Response:**

  **Status:** 200 OK <br />

   ```json
        {
              "_id": "5f906ee71d4b54736cec8159",
            "username": "phillip",
             "password": "$2a$10$lZ6TiO6ifojJpe8v1SZTM.eRxGWT5rF3OHJMOdCY88KJUQV/FOPcK",
            "createdAt": "2020-10-21T17:24:55.833Z",
        }
    ```  

**Login User**
-----------------
  Logs in a user in the application.       


| Endpoint     | Method | Params  | Data type |
|--------------|--------|---------|-----------|
| `/api/login` | POST   | `None`  |   `None`  |  

* **Request Body**
    ```json
        {
            "username"    : "phillip",
            "password"    : "123"
        }


* **Success Response:**

  **Status:** 200 OK <br />

   ```json
       {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTA2ZWU3MWQ0YjU0NzM2Y2VjODE1OSIsImlhdCI6MTYwMzMwMjQ1OX0.1Nv-j48x8bLu2kFkzpKJBCu46pkLLcytNROyoBzfRAg",
    "user": {
        "id": "5f906ee71d4b54736cec8159",
        "username": "phillip"
    }
}
    ```  
**Post Question**
----------------
 Post a question

| Endpoint       | Method | Params  | Data type |
|--------------- |--------|---------|-----------|
| `/api/posts   `| POST  | `None`  |   `None`  |  


* **Request Body**
    ```json
        {
            "post"    : "How old are you?",
        }

* **Success Response:**

  **Status:** 200 OK <br />

   ```json
        {
            "_id": "5f7a15835fb2bc11729fecee",
            "comment": [],
            "post": "how old are you ?",
            "userId": "5f7a14c85fb2bc11729feced",
            "createdAt": "2020-09-27T17:42:40.669Z"
        }
    ```  
<br/>
<br/>


**Get Question**
----------------
  Returns json data of questions.

| Endpoint       | Method | Params  | Data type |
|--------------- |--------|---------|-----------|
| `/api/post   ` | GET   | `None`  |   `None`  |  


* **Success Response:**

  **Status:** 200 OK <br />

   ```json
        {
            "_id": "5f7a15835fb2bc11729fecee",
            "comment": [],
            "post": "how old are you ?",
            "userId": "5f7a14c85fb2bc11729feced",
            "createdAt": "2020-09-27T17:42:40.669Z"
        }
    ```  
<br/>
<br/>



**Post answer**
----------------
 Post an answer to a question

| Endpoint           | Method | Params    | Data type |
|--------------------|--------|-----------|-----------|
| `/api/comment     `| POST   | `required`|  `string` | 


* **Request Body**
    ```json
        {
            "answer"    : "i am 100 years",
        }

* **Success Response:**

  **Status:** 200 OK <br />

   ```json
        {
            "_id": "5f7a15835fb2bc11729fecee",
            "post": [],
            "comment": "i am 100 years",
            "userId": "5f7a14c85fb2bc11729feced",
            "createdAt": "2020-09-27T17:42:40.669Z"
        }
    ```  
<br/>
<br/>

**Get answer**
----------------
 Returns all answers posted

| Endpoint     | Method | Params | Data type |
|--------------|--------|--------|-----------|
| `/api/answer`| GET    | `None` |  `None`   | 

* **Success Response:**

  **Status:** 200 OK <br />

   ```json
        {
             "_id": "5f7a15835fb2bc11729fecee",
            "post": [],
            "comment": "i am 100 years",
            "userId": "5f7a14c85fb2bc11729feced",
            "createdAt": "2020-09-27T17:42:40.669Z"Z"
        }
    ```  
<br/>
<br/>

**Delete Question By ID**
-------------------------
  Deletes a question from the Db.

| Endpoint             | Method | Params    | Data type |
|--------------------- |--------|---------  |-----------|
| `/api/deletepost/:id`| DELETE | `required`|  `string` |  


* **Success Response:**

  **Status:** 200 OK <br />

   ```json
   {
    "comment": [],
    "_id": "5f984c4de0fb367e96926282",
    "post": "how old are you ?",
    "userId": "5f980db5d3292c31a7313a30",
    "createdAt": "2020-10-27T16:35:25.917Z",
   }

    ``` 
## Remarks
Project still under build 