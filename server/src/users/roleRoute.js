import express from "express";
import RoleController from "./roleController.js";

const routes = express.Router();

routes.get("/roles", RoleController.getAll);
routes.get("/roles/:id", RoleController.getRoleById);
routes.post("/roles", RoleController.create);
routes.put("/roles/:id", RoleController.update);
routes.delete("/roles/:id", RoleController.delete);

export default routes;