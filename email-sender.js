const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testnode@gmail.com',
    pass: 'node'
  }
});

const mailOptions = {
  from: 'testnode@gmail.com',
  to: 'mouna.klaii10@gmail.com',
  subject: 'Sending Email',
  text: 'Good luck!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});