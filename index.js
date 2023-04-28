require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const port = process.env.PORT || 3000;
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(express.static('public'));

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('*', (req, res) => {
  res.render('error404');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
