#Learning Node JS


## Express JS, View Engines(EJS) and Middlewares

###Express JS

Express is an npm module that allows you to easily build node js applications. Primarily used in setting up a server and the respective url routes on your webapp.

It provides almost the same functionality as the manage.py and the settings.py files in case of Django.

###View Engines(EJS)

View Engines like EJS can be used to pass on dynamic data to html templates/views. This dynamic data usually includes data pulled from a database.

The view engines, that are much similar to templates in django, allow us with the ability to use vanilla javascript code in our templates.

###Middlewares

It is essentially the code that runs between the process of receiving a request and sending a response. All the url routing, authentications and things like the 404 status come under this.

###Static Files

In node we use express to load static files by using a middleware function.


###MongoDB

A NoSQL Database that works on the basis of schemas. Currently using MongoDB Atlas, a cloud based mongodb system. Accessing the database using a connection string and executing operations on it using the mongoose module.  