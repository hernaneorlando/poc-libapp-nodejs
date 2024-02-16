import User from "./user.js";
import { Role } from "./role.js";

class UserController {
  static async getAll(req, res) {
    const users = await User.find({});
    res.status(200).json(users);
  }

  static async getUserById(req, res) {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  }

  static async create(req, res) {
    req.body.role = {...(await Role.findById(req.body.role))._doc};
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  }

  static async update(req, res) {
    req.body.role = {...(await Role.findById(req.body.role))._doc};
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  }

  static async delete(req, res) {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  }
};

export default UserController;