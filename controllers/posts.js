const Post = require('../models/post');

module.exports = (app) => {
    // FORM
    app.get('/posts/new', (req, res) => {
        res.render('posts-new');
    });

    app.post('/posts/new', (req, res) => {
        
        var post = new Post(req.body);
        // ASK QUESTION ABOUT THIS:
        post.save((err, post) => {
            console.log(`Hello ${post}`)
            return res.redirect('/');
        });

        // Post.create(req.body).then((post) => {
        //     res.redirect('/');
        // }).catch(err => {
        //     console.log(err.message);
        // })
    });
};