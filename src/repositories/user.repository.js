const { User } = require("../models");

class UserRepository {
  create(data) {
    return User.create(data);
  }

  findAll() {
    return User.findAll();
  }

  findById(id) {
    return User.findByPk(id);
  }

  update(id, data) {
    return User.update(data, { where: { id } });
  }

  delete(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();
