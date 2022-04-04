# Learning Node JS


## Express JS, View Engines(EJS) and Middlewares

### Express JS

Express is an npm module that allows you to easily build node js applications. Primarily used in setting up a server and the respective url routes on your webapp.

It provides almost the same functionality as the manage.py and the settings.py files in case of Django.

### View Engines(EJS)

View Engines like EJS can be used to pass on dynamic data to html templates/views. This dynamic data usually includes data pulled from a database.

The view engines, that are much similar to templates in django, allow us with the ability to use vanilla javascript code in our templates.

### Middlewares

It is essentially the code that runs between the process of receiving a request and sending a response. All the url routing, authentications and things like the 404 status come under this.

### Static Files

In node we use express to load static files by using a middleware function.


### MongoDB

A NoSQL Database that works on the basis of schemas. Currently using MongoDB Atlas, a cloud based mongodb system. Accessing the database using a connection string and executing operations on it using the mongoose module.  


### CRUD Model

The crud model stands for `Create, Read, Update and Delete`. 

Therefore in accordance with this module we have the following types of requests:

- GET
- POST
- DELETE
- PUT

The requests have the following url structre as to be considered in the given demo learning project:

- For retrieving all items from the dataset : localhost:3000/blogs
- For adding an item to the data set : localhost:3000/blogs/create
- For retrieving a single item from the dataset using id as a param : localhost:3000/blogs/:id
- For deleteing a single item from the dataset : localhost:3000/blogs/:id

### URL Routing with express

The router module `const router = express.Router()` provides us with the capability to connect url route files to our main express application as a middleware function.

### MVC - Model, View and Controller

MVC is a basic structure defined which is usually followed while developing web applications using node.js

The idea behind MVC is that in our application we have a Model for our database and some views, i.e html pages to be rendered with dynamic data from the models, and a controller is used to link these two thus providing a safe passage of data from the model to the view.