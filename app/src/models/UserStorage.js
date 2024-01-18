class UserStorage {
  static #users = {
    id: ['qwer', '나개발', '김팀장'],
    pass: ['1234', '1234', 'qwer'],
    name: ['가나다', '마바사', '아자차'],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.indexOf(id);
    const userskeys = Object.keys(users);
    const userInfo = userskeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
