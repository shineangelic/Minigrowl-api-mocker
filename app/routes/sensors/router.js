const express = require('express');
const router = express.Router();

const response = require('./response');

/* GET home page. */
router.get('/sensors', function(req, res, next) {
  res.json(response);
});

module.exports = router;
