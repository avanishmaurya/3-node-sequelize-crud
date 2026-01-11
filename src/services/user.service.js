const userRepository = require("../repositories/user.repository");

class UserService {
  createUser(data) {
    return userRepository.create(data);
  }

  getUsers() {
    return userRepository.findAll();
  }

  getUserById(id) {
    return userRepository.findById(id);
  }

  updateUser(id, data) {
    return userRepository.update(id, data);
  }

  deleteUser(id) {
    return userRepository.delete(id);
  }
}

module.exports = new UserService();
