const express = require('express');
const app = express();
const port = process.env.PORT || 3000
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});