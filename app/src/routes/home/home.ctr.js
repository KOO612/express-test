const users = {
  id: ['qwer', '나개발', '김팀장'],
  pass: ['1234', '1234', 'qwer'],
};

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pass = req.body.pass;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pass[idx] === pass) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: '로그인 실패',
    });
  },
};

module.exports = {
  output,
  process,
};
