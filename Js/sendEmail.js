
require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

// Створюємо об'єкт для відправки електроної почти
const transporter = nodemailer.createTransport({
    service: 'GMAIL',
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    }
})

// Обробка даних з веб-форми та відправка листа
app.post('/sendEmail', (req, res) => {
    const { name, number} = req.body;


    // Налаштування даних листа
    const mailOption = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: "Ваші дані відправленно, скоро з вами зв'яжиться наш прораб!",
        text: `Ім'я: ${name}\nНомер телефону: ${number}`
    };

    // Відправлення листа
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error('Помилка відправки листа:', error);
            res.status(500).send("Виникла помилка при відправлені листа");
        } else {
            console.log("Лист успішно відправлений:", info.response);
            res.status(200).send("Лист успішно відправлений!")
        }
    })
})

app.get('/', (req, res) => {
    res.send('Добро пожаловать на мой веб-сайт!');
  });

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});