const cron = require('node-cron');
const twilio = require('twilio');

const accountSid = "ACab8104a8b687b76bda332f714325839f";
const authToken = "3fba0f2d88ce756f5c99f0e194919a99";
const client = twilio(accountSid, authToken);

// Schedule the message to be sent every day at 9:44 : 35 AM

cron.schedule('35 44 09 * * *', () => {
  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      body: 'Hello, there! This is your daily reminder.',
      to: 'whatsapp:+917974138035'
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error('Error sending message:', err));
}, {
  scheduled: true,
  timezone: "Asia/Kolkata" // Adjust the timezone as per your requirements
});
