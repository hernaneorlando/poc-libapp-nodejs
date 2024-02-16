import { Role } from "./role.js";

class RoleController {
  static async getAll(req, res) {
    const roles = await Role.find({});
    res.status(200).json(roles);
  }

  static async getRoleById(req, res) {
    const role = await Role.findById(req.params.id);
    res.status(200).json(role);
  }

  static async create(req, res) {
    const newrole = await Role.create(req.body);
    res.status(201).json(newrole);
  }

  static async update(req, res) {
    await Role.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  }

  static async delete(req, res) {
    await Role.findByIdAndDelete(req.params.id);
    res.status(204).send();
  }
}

export default RoleController;