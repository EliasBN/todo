# Getting Started

If you want to contribute to the project this can be done by both trying it out and giving constructive feedback, or just simply making pull requests suggesting improvements. To be able to accomplish either one you need to build the project locally on your computer. To do this you will require some prerequsite software. 

## Node.js

The entire backend of our application is written in Node.js. Because of this all dependencies are managed by npm, which makes the installation very quick for new users, as long as they have node installed. This can be done easily from https://nodejs.org/

## Git

Everything related to the exchange and improvement of code and ideas is done through git. If you don't already have it installed then this can be done from https://git-scm.com/downloads


## PostgreSQL

Since our project is supposed to be entirely open-source we have chosen to use PostgreSQL for our backend. You can download this from: https://www.postgresql.org/download/
We connect to the database by using sequalize, and a json file with all the database login info. This is called config.json and is placed in a folder called conig inside the server folder. Make sure that this is then added to your .gitignore so you don't share personal information. 


## Building and running the application locally
1. Clone the project from https://github.com/EliasBN/todo
	
`$ git clone git@github.com:EliasBN/todo.git` with SSH  
`$ git clone https://github.com/EliasBN/todo.git` with HTTPS  

2. Install dependencies with npm install
navigate to the cloned directory using the command-line. Then run   
`$ npm install`

3. Setup database connection
Create a new folder called config inside the server folder. Create config.json inside the config folder. Add your db-login. 

Example:
```
{
    "development": {
      "username": "postgres",
      "password": 12345,
      "database": "postgres",
      "host": "localhost",
      "dialect": "postgres"
    },
    "test": {
      "username": "postgres",
      "password": 12345,
      "database": "postgres",
      "host": "localhost",
      "dialect": "postgres"
    },
    "production": {
      "username": "postgres",
      "password": 12345,
      "database": "postgres",
      "host": "localhost",
      "dialect": "postgres"
    }
  }
```

4. Start the application with npm start  
`$ npm start:dev` This will run the development server referenced above

5. Visit localhost:8000 to see the result. 