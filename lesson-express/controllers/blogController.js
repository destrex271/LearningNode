// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../models/blog");
const titles = ["Home Page", "About Page", "Create Page", "404 Not Found"]


// Displays all blogs
const blog_index = (req,res) => {
    Blog.find()
        .then((results) => {
            res.render('blogs/index',{title:titles[0], 'blogs': results});
        })
        .catch((err) => console.log(err));
}

// Displays a single Blog
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((results) => {
            res.render('blogs/details',{title: results.title,'blog': results});
        })
        .catch((err) => {
            res.status(404).render('404',{title:'Blog Not Found'});
        });
}

// Creates a new blog
const blog_create_get = (req, res) => {
    res.render('blogs/create', {title:titles[2], 'blog': Blog})
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            console.log(result);
            res.redirect('/blogs')
        })
        .catch((err) => console.log(err));
}

// Deletes a Blog
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err));
}


// Exporting controller functions
module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_details,
    blog_delete
}