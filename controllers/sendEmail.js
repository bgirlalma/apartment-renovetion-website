const User = require("../models/user");
const sendEmail = require("../helpers/user");
const { joiSchema } = require("../schemas/joiSchemasUser");
const mongoose = require("mongoose");
const BASE_URL = process.env.BASE_URL;

mongoose
  .connect(BASE_URL)
  .then(() => console.info("Database connection successful"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

async function postSendEmail(req, res, next) {
  const { name, email, phone, message } = req.body;

  try {
    // Валидация данных пользователя
    const validation = joiSchema.validate({ name, email, phone });

    if (validation.error) {
      console.log(
        "Ошибка валидации:",
        validation.error.details.map((error) => error.message).join(", ")
      );

      return res.status(400).send({
        message: validation.error.details
          .map((error) => error.message)
          .join(", "),
      });
    }

    // Создание пользователя
    const user = await User.create({ name, email, phone });

    // Отправка электронного письма
    const emailMessage = {
      subject: "Новое сообщение от пользователя",
      text: `От ${user.email}n/nСообщение: ${message}`,
    };

    await sendEmail(emailMessage);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postSendEmail,
};
