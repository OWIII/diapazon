const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8090;
const axios = require('axios');

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/getMesures', cors(), (req, res) => {
  const API = "https://api.slav-nayka.ru/api/contents?search=parent_id:94;is_active:1&offset=12&orderBy=ord&sortedBy=asc&searchJoin=and";

  axios(API)
    .then(response => {
      res.json(response.data);
    }).catch(err => {
      res.send('error!!!');
    })
});

//обслуживание html
app.get('/*', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);