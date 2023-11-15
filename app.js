const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 7000);

app.get('/', (req, res) => {
  // res.send('hello express');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트 대기중');
});
