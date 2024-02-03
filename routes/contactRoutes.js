const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/mailer');

router.post('/', async (req, res) => {
    const { name, email, message, service } = req.body;

    try {
        await sendEmail(name, email, message, service);
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in sending email');
    }
});

module.exports = router;

