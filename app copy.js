const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 7000);
// const port = 7000; 하드 코딩과 다르게 동적 설정
// process.env 객체에 PORT 속성을 넣어서 사용

app.use(morgan('dev'));
// morgan 미들웨어

app.use('/', express.static(path.join(__dirname, 'public')));
// static 미들웨어

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
// body-parser 사용
// req.body로 변경해줌

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
);

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('get 요청에 실행');
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어');
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트 대기중');
});