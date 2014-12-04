var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Image = require('../models/Image.js');


/* GET images listing. */
router.get('/', function(req, res, next) {
  Image.find(function(err, images) {
    if (err) return next(err);
    res.json(images);
  })
});

// POST image
router.post('/', function(req, res, next) {
  Image.create(req.body, function(err, image) {
    if (err) return next(err);
    res.json(image);
  });
});


module.exports = router;


