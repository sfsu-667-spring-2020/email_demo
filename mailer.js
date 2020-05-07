const nodemailer = require('nodemailer');

const fromEmail = 'put throw away gmail account here';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromEmail,
    pass: '', // DO NOT COMMIT THIS
  },
});

const mailOptions = {
  from: fromEmail,
  to: fromEmail,
  subject: 'Hello World',
  text: 'Hi!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
