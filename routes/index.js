var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/home', function (req, res, next) {
  res.redirect('/new');
});

router.get('/new', function (req, res, next) {
  res.render('new');
});

router.post('/new', function (req, res, next) {
  const text = req.body.messageText;
  const user = req.body.authorName;

  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
