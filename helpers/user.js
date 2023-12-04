const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_USERNAME,
  port: 3000,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail(emailData) {
  const { to, subject, text } = req.body;

  try {
    const mailOptions = {
      from: emailData.from,
      to: process.env.EMAIL_USERNAME,
      subject: emailData.subject,
      text: emailData.text,
    };

    await transporter.sendMail(mailOptions)
    console.log("Электронное письмо отправлено");
  } catch (error) {
      console.error("Ошибка отправки электронного письма:", error);
      throw error;
  }

}

module.exports = sendEmail;