const express = require('express');

const router = express.Router();

const response = require('./response');

// eslint-disable-next-line no-unused-vars
router.get('/actuators', (req, res, next) => {
  res.json(response);
});

module.exports = router;
