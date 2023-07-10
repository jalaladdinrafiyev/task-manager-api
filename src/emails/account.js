const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jalal.rafiyev@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jalal.rafiyev@gmail.com',
    subject: `Goodbye, ${name}`,
    text: `Farewell ${name}, thank you for the incredible memories and connections we've shared – wishing you boundless success and happiness on your journey ahead.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}
