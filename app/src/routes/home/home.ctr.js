const User = require('../../models/User');
const UserStorage = require('../../models/UserStorage');

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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // const id = req.body.id,
    //   pass = req.body.pass;

    // const users = UserStorage.getUsers('id', 'pass', 'name');
    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pass[idx] === pass) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }

    // response.success = false;
    // response.msg = '로그인 실패';
    // return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
