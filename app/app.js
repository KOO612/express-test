// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require('./src/routes/home');

//앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

// use -> 미들웨어를 등록해주는 메소드
app.use('/', home);

module.exports = app;