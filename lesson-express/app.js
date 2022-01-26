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

const Blog = require('./models/blog');

// View Engine set up
app.set('view engine', 'ejs');

// Listening on port number 3000
app.listen(3000);

// Middleware stuff
app.use(express.static("styles"))
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// Setting up app routes

app.get('/', (req,res) => {
    res.redirect('/blogs')
})

app.get('/about',(req,res) => {
    res.render('about', {title:titles[1]})
})

// Blog Routes

app.get('/blogs', (req, res) => {
    Blog.find()
        .then((results) => {
            res.render('index',{title:titles[0], 'blogs': results});
        })
        .catch((err) => console.log(err));
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            console.log(result);
            res.redirect('/blogs')
        })
        .catch((err) => console.log(err));
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((results) => {
            res.render('details',{title: results.title,'blog': results});
        })
        .catch((err) => console.log(err));
})

app.delete('/blogs/:id', (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err));
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title:titles[2], 'blog': Blog})
})

// redirect setup for wrong path but similar to above
app.get('/about-us',(req,res) => {
    res.redirect('/about')
})



// setting up 404 redirect -- middleware
app.use((req, res) => {
    res.status(404).render('404',{title: titles[3]})
})