const express = require('express');
const router = express.Router();

/* GET new page.*/
router.get('/new', function (req, res, next) {
  res.render('new', { tite: 'Express' });
});

module.exports = router;
