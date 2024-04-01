var usermodel =require('../model/usemodel');
var nodemailer = require('nodemailer');

 var {LocalStorage} = require('node-localstorage')
localStorage = new LocalStorage('./scratch')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'patilpravin3065@gmail.com',
      pass: 'jimifyvwevuhybyc'
    }
  });

exports.insert= async (req,res)=>{

  var OTP= Math.random();
  localStorage.setItem("OTP",OTP)

    var mailOptions = {
        from: 'patilpravin@gmail.com',
        to: 'pp274619@gmail.com',
        subject: 'hello pravin Node.js',
        text: 'your otp is'+ OTP
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
   
    var data=await usermodel.create(req.body);

    res.status(200).json({
        status:data
    })
}

exports.get_data= async (req,res)=>{

  var data=await usermodel.find();
  var old_otp=  await localStorage.getItem("OTP")


    res.status(200).json({
        status:data,
        old_otp
    })
}


