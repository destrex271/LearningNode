const express = require('express')
const app = express();
const titles = ["Home Page", "About Page", "Create Page", "404 Not Found"]

// Dependencies
const morgan = require('morgan')
const mongoose = require('mongoose')

// Connection to mongo DB
const dbURI = "mongodb+srv://destrex271:akshat26@learningnode.lknsj.mongodb.net/nodetuts?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })
;

// View Engine set up
app.set('view engine', 'ejs');

// Listening on port number 3000
app.listen(3000);

// Middleware stuff
app.use(express.static('styles'))
app.use(morgan('dev'));

// Setting up app routes

app.get('/', (req,res) => {
    const blogs = [
        {title: 'Blog1', snippet: 'You are not a good person akshat'},
        {title: 'Blog2', snippet: 'You are not a good person akshat'},
        {title: 'Blog3', snippet: 'You are not a good person akshat'}
    ]
    res.render('index', {title:titles[0], blogs})
})

app.get('/about',(req,res) => {
    res.render('about', {title:titles[1]})
})

// Path for create view

app.get('/blogs/create', (req,res) => {
    res.render('create', {title:titles[2]})
})

// redirect setup for wrong path but similar to above
app.get('/about-us',(req,res) => {
    res.redirect('/about')
})



// setting up 404 redirect -- middleware
app.use((req, res) => {
    res.status(404).render('404',{title: titles[3]})
})