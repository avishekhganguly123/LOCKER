const express = require('express');
const app = express();

const nodemailer = require("nodemailer");
var randomNumber = 565213;
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req,res)=>{
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ritaganguly5513@gmail.com',
      pass: '9835956742'
    }
  })

  const mailOptions = {
    from: 'ritaganguly5513@gmail.com',
    to: req.body.email,
    subject: `Your password ${req.body.email}: ${req.body.subject}`,
    text: `YOUR MESSAGE: ${req.body.message} YOUR PASSWORD IS:${randomNumber}`
  }

  transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log('Email Sent: ' + info.response);
      res.send('success');
    }
  })


})




app.listen(PORT, ()=>{
  console.log(`server is up for use ${PORT}`)
})
