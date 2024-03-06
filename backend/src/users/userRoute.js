import express from "express";
import UserController from "./userController.js";

const routes = express.Router();

routes.get("/users", UserController.getAll);
routes.get("/users/:id", UserController.getUserById);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

export default routes;
