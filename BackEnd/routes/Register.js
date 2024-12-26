var express = require('express');

var RegisterSchema =require('./model/RegisterSchema.js');

var router = express.Router();


router.get('/',async function(req, res, next) {


    try{ const Registers = await RegisterSchema.find();
        res.json({ 
            status:"success",
            data: Registers
             });}
    catch(e)
    {console.log("error",e)}
   
  });


router.post('/verification',async function (req,res,next) {
console.log(req.body)  

   try{
    const {name,email,password}=req.body
    const emailexisting= await RegisterSchema.findOne({email})
    if(emailexisting){
        return res.status(201).json({
              status:false,
              message:"Email alredy existing"
             })
    }
    res.json({
               status:true,
               message:"sucess",
       })

}
    catch(e)
    {
        console.log("error",e)
    }
})






  module.exports = router;








