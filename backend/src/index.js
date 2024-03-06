import express from "express";
import userRoute from "./users/userRoute.js";
import roleRoute from "./users/roleRoute.js";
import authorRoute from "./authors/authorRoute.js";

const routes = (app, db) => {
  app.get('/healthz', (req, res) => res.status(200).send("OK"));

  app.use(express.json(), 
    userRoute,
    roleRoute,
    authorRoute(db));
}

export default routes;