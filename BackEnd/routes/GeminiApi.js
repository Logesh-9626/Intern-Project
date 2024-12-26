var express = require('express');
var RegisterSchema = require('./model/RegisterSchema.js');
var router = express.Router();
var bcrypt =require("bcrypt")
var jwt =require('jsonwebtoken')
var {hashPassword}=require('../bcryptUtiles.js')

/* GET home page. */
router.get('/GeminiApi', function(req, res, next) {
  res.render('index', { title: 'Express' }
);
});


router.post('/GeminiApi', async function(req, res, next) {

   });



module.exports = router;
