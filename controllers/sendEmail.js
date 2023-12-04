require("dotenv").config();
const express = require("express");
const joiSchemasUser = require("../joiSchemasUser");
const User = require("../models/user");
const sendEmail = require("../helpers/user");
const { default: mongoose } = require("mongoose");

mongoose.connect()

async function postSendEmail(req, res, next) {
  const { name, email, phone, message } = req.body;

    try {
      // Валидация данных пользователя
      const validation = joiSchemasUser.validate({ name, email, phone });

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
            text: `От ${user.email}n/nСообщение: ${message}`
        };

        await sendEmail(emailMessage);
         res.status(201).send(user);
    } catch (error) {
      next(error)
  }
}

module.exports = {
  postSendEmail,
};
