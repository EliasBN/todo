# Getting Started

If you want to contribute to the project this can be done by both trying it out and giving constructive feedback, or just simply making pull requests suggesting improvements. To be able to accomplish either one you need to build the project locally on your computer. To do this you will require some prerequsite software.

## Git

Everything related to the exchange and improvement of code and ideas is done through git. If you don't already have it installed then this can be done from https://git-scm.com/downloads

## Node.js

The entire backend of our application is written in Node.js. Because of this all dependencies are managed by npm, which makes the installation very quick for new users, as long as they have node installed. This can be done easily from https://nodejs.org/

### Sequalize

-Få inn noe om sequalize.

### Express

-Få inn noe om express.

## PostgreSQL

Since our project is supposed to be entirely open-source we have chosen to use PostgreSQL for our backend. You can download this from: https://www.postgresql.org/download/
We connect to the database by using sequalize, and a json file with all the database login info. This is called config.json and is placed in a folder called conig inside the server folder. Make sure that this is then added to your .gitignore so you don't share personal information.

## Other Software

### Visual Studio Code

You can of course use whatever IDE you want, but for our development we prefer using Visual Studio Code with the Prettier Extension installed. This keeeps all the code formatted the same, wich helps ensure code that is easy to read, even when written by new developers. Other than this there are some other standards that we try to keep. There are:

- Her tenker jeg at vi kommer på noen gode prinsipper vi kan følge.
- Hvis ikke kan dette bare fjernes

# Building and running the application locally

1. Clone the project from https://github.com/EliasBN/todo

`$ git clone git@github.com:EliasBN/todo.git` with SSH  
`$ git clone https://github.com/EliasBN/todo.git` with HTTPS

2. Install dependencies with npm install
   navigate to the cloned directory using the command-line. Then run  
   `$ npm install`

3. Setup database connection
   Create a new folder called config inside the server folder. Create config.json inside the config folder. Add your db-login. You may want to add this file to your .gitignore to avoid any potential data-leaks.

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

# How to contribute

## Project Structure --Gonna be changed to a how to contribute guide.

Individual branch: When working on a new feature you will work on your own branch. When the feature is ready you will merge the development branch into your individual branch. You will then clean up any conflicts in your own branch, before you can suggest your feature for the project. This ensures that the development branch remains clean.

Development Branch: Can only get pushed to when two other group members have approved the commit. If something is not good enough the code has to get refactored according to the wishes of the other members, and then it will go through another round of Q/A.

Master branch: only gets pushed to from the development branch when everything is working properly.
