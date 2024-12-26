var express = require('express');
var RegisterSchema = require('./model/RegisterSchema.js');
var router = express.Router();
var bcrypt =require("bcrypt")
var jwt =require('jsonwebtoken')
var {hashPassword}=require('../bcryptUtiles.js')

/* GET home page. */
router.get('/Login', function(req, res, next) {
  res.render('index', { title: 'Express' }
);
});


router.post('/Login', async function(req, res, next) {

    const {email,password}=req.body
    console.log(email,password)

    
       try{  
        // Verify email for login module
         const UserDetails = await RegisterSchema.findOne({ email });
         if (!UserDetails) {
             return res.status(404).json({
                status:false,
                message: "User Not Found"
             });
         }
 
         // Validate password
         const isValidPassword = bcrypt.compare(password, UserDetails.hashPassword);
         if (!isValidPassword) {
             return res.status(401).json({
                status:false,
                 message: "Invalid Password"
             });
         }
 
         // Check if plan has expired
         const Expirydate =new Date(UserDetails.expiryDate) 
         const CurrentDate = new Date();
      
         if (CurrentDate > Expirydate) {
             return res.status(500).json({
                status:false,
                 message: "Plan Expired, Please Upgrade Your Plan!"
             });
         }
         console.log(Expirydate)
         console.log(CurrentDate)
         
 
         // Generate JWT token
         const Token = jwt.sign({email},process.env.JWTSECRET,{ expiresIn: "1d" });
         
         res.status(200).json({
             message: "Success",
             Token
         });
 
     } catch (e) {
         console.error("Error:", e);
         res.status(500).json({
             message: "An error occurred",
             error: e.message
         });
     }
   
  });



module.exports = router;
