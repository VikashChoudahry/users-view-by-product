const express = require('express');
const router = express.Router();

const views = require('./views');

router.use('/views', views);

module.exports = router;
