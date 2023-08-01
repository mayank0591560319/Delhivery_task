const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'process.env.MAILTRAP_USERNAME',
        pass: 'process.env.MAILTRAP_PASSWORD '
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Your Name" <your-email@gmail.com>', // sender address
    to: 'user-email@example.com', // list of receivers
    subject: 'Welcome to My Website', // Subject line
    html: '<p>Hello {{username}},</p><p>Thank you for registering on My Website.</p>' // html body with dynamic content
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
