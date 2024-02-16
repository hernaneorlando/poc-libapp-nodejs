import express from "express";
import AuthorController from "./authorController.js";

const authorRoute = (db) => {
  const routes = express.Router();
  const controller = new AuthorController(db);

  routes.get("/authors", (req, res) => controller.getAll(req, res));

  return routes;
}

export default authorRoute;