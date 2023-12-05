require("dotenv").config();
const User = require("../models/user");
const sendEmail = require("../helpers/user");
const { joiSchema } = require("../schemas/joiSchemasUser");
const mongoose = require("mongoose");
const BASE_URL = process.env.BASE_URL;

mongoose
  .connect(BASE_URL)
  .then(() => console.info("Database connection successful"))
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

async function postSendEmail(req, res, next) {
  const { name, phone } = req.body;
  console.log("Name:", name);
  console.log("Phone:", phone);

  try {
    // Валидация данных пользователя
    const validation = joiSchema.validate({ name, phone });

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
    const user = await User.create({ name, phone });
    if (!user) {
      return res
        .status(500)
        .send({ message: "Ошибка при создании пользователя" });
    }

    // Отправка электронного письма
   const emailMessage = {
     subject: "Новое сообщение от пользователя",
     name: user.name,
     phone: user.phone,
   };

    console.log(`Отправка письма: От ${user.name}, Номер: ${user.phone}`);
    await sendEmail(emailMessage);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postSendEmail,
};
