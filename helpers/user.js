const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmail(email) {

  try {
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: "New user"
    };

    await transporter.sendMail(mailOptions)
    console.log("Электронное письмо отправлено");
  } catch (error) {
      console.error("Ошибка отправки электронного письма:", error);
      throw error;
  }

}

module.exports = sendEmail;