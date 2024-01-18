const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const { id, pass } = UserStorage.getUsers('qwer');

    if (id === this.body.id && pass === this.body.pass) {
    }
  }
}

module.exports = User;
