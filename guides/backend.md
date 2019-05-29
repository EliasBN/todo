# Getting started with the Node.js backend

## Building and running the Node backend locally

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

4. OPTIONAL: Setup postgres database using sequalize (Taken from this tutorial: https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)

    Install sequelize and postgres with npm (This should already be included from your npm install command. If however it is not, run the command.)
      `$ npm install --save sequelize pg pg-hstore`


    Initialize Sequelize  
      `$ sequelize init`

      If installing this on a windows pc you may have to add sequalize to your PATH enviroment variable. See this guide: https://medium.com/@jzioria/how-i-fixed-my-sequelize-command-not-found-error-e3ec651b3abc?fbclid=IwAR17vDmm3NqhOc57UfRYwCVI1VKI37bhbi8C_q0mNWNczTIMtT2k-afTZHM  


    Create a database  
      `$ createdb todos-dev` 
      PS: you might have to create a role or similar here if you've never configured a postgres database.  


    This will create the table containing the different lists.  
      `$ sequelize model:create --name Todo --attributes title:string`


    This will create a table which contains each todoitem, residing in the different lists.  
      `$ sequelize model:create --name TodoItem --attributes content:string,complete:boolean`

  

5. Start the application with npm start  
   `$ npm run start:dev` This will run the development server referenced above

6. Visit localhost:3000 to see the result.


# How it's built

## Sequalize

Sequalize is a Node.js object-relational mapping tool (ORM) that we use to communicate with our postgres database. Sequalize works by mapping database entries to objects (and objects to database entries). We use Sequalize because it offers good database synchronization, loading, and easily done migrations. Sequalize somewhat serves as the "model" part of a standard MVC architecture. <b>vet ikke om vi skal ha siste linja her </b>

## Express

Express is a node.js web framework. It helps us manage the routes used to access our data, and serves as the "backbone" of our Rest-api.

## PostgreSQL

Since our project is supposed to be entirely open-source we have chosen to use PostgreSQL for our backend. You can download this from: https://www.postgresql.org/download/
We connect to the database by using sequalize, and a json file with all the database login info. This is called config.json and is placed in a folder called conig inside the server folder. Make sure that this is then added to your .gitignore so you don't share personal information.

## Other Software

While software mentioned here is not mandatory, it can be a good starting point for those who are inexperienced. 

### Visual Studio Code

You can of course use whatever IDE you want, but for our development we prefer using Visual Studio Code with the Prettier Extension installed. This keeeps all the code formatted the same, wich helps ensure code that is easy to read, even when written by new developers. Other than this there are some other standards that we try to keep. There are:

- Her tenker jeg at vi kommer på noen gode prinsipper vi kan følge.
- Hvis ikke kan dette bare fjernes

# Write about how to change database?
