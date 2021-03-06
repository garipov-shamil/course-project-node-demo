// используем библиотеку express
const express = require('express');
// используем библиотеку для парсинга входящих запросов
const bodyParser = require('body-parser');
// создаем объект express (сервер для раздачи статики)
const app = express();
// говорим, что используем bodyParser
app.use(bodyParser.urlencoded({extended: true}));
// говорим, что мы раздаем папку public
app.use(express.static('public'));
// require('./app/routes')(app, pool);
const port = process.env.PORT || 3000;
// говорим, что запускаемся на порту 80
app.listen(port);

console.log("Server started at 5000");
