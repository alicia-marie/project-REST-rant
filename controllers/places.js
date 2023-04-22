require('dotenv').config();
const express = require('express');
const router = express.Router();
const places = [];

router.get('/', (req, res) => {
  let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: 'http://placekitten.com/250/250'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'http://placekitten.com/250/250'
    }]
  res.render('places/index', { places });
});

router.post('/', (req, res) => {
  if (!req.body.pic) {
    //default image
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.use('/places', require('./controllers/places'));

router.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>');
});

const port = process.env.PORT || 3000;
router.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = router;

/*require('dotenv').config()
const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    //default image
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.use('/places', require('./controllers/places'))

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', { places })
})

router.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

router.listen(process.env.PORT)
module.exports = router*/