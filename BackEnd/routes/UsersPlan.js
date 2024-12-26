var express = require('express');
var RegisterSchema = require('./model/RegisterSchema.js');
var router = express.Router();
var {hashPassword} =require('../bcryptUtiles.js')
var bcrypt =require("bcrypt")
var jwt =require('jsonwebtoken')

/* GET users listing. */
router.get('/plan', async function (req, res, next) {

  try {
    const Registers = await RegisterSchema.find();
    res.json({
      status: "success",
      data: Registers
    });
  }
  catch (e) { console.log("error", e) }
});


router.post('/plan', async function (req, res,next) {
    console.log(req.body.plan);

    try {
        const { name, email, password, plan } = req.body;

        const Paytime = new Date();
        let expirytime;

        // Determine plan expiry time
        switch (plan) {
            
            case "free":
                expirytime = 1;
                break;
            case "Pro":
                expirytime = 7;
                break;
            case "Advance":
                expirytime = 30;
                break;
            default:
                return res.status(400).json({
                    message: "Invalid Selected Plan"
                });
        }

        const expiryDate = new Date(Paytime.getTime() + expirytime * 24 * 60 * 60 * 1000);

        // Generate hash and salt for the password
        const { hash, salt } = await hashPassword(password);

        // Create new user data
        const NewUserData = new RegisterSchema({
            name,
            email,
            hashPassword: hash,
            salt,
            plan,
            expiryDate,
            Paytime
        });

        await NewUserData.save();
        console.log("User data saved:", NewUserData);

      

    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({
            message: "An error occurred",
            error: e.message
        });
    }
});

module.exports = router;







