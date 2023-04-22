require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('*', (req, res) => {
  res.render('error404');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;


/*require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.set('views', __dirname + '/view')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('Home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.listen(process.env.PORT)*/
//app.use(express.urlencoded({ extended: true }))
