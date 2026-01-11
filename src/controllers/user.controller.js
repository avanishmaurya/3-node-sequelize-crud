const userService = require("../services/user.service");

class UserController {
  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async findAll(req, res) {
    const users = await userService.getUsers();
    res.json(users);
  }

  async findOne(req, res) {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  }

  async update(req, res) {
    await userService.updateUser(req.params.id, req.body);
    res.json({ message: "User updated" });
  }

  async delete(req, res) {
    await userService.deleteUser(req.params.id);
    res.json({ message: "User deleted" });
  }
}

module.exports = new UserController();
