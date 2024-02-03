const nodemailer = require('nodemailer');

async function sendEmail(name, senderEmail, message, svc) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
          }
    });
    
    let mailOptions = {
    from: process.env.EMAIL,
    replyTo: senderEmail,
    to: process.env.RECIPIENT_EMAIL,
    subject: `${svc}`,
    text: `From: ${name} Email: ${senderEmail}\n\nMessasge:\n${message}`
   };


    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;

