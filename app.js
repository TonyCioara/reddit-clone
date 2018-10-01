const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var exphbs = require('express-handlebars');

const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/reddit-clone';

mongoose.connect(dbURI);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

require('./controllers/posts.js')(app);

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});