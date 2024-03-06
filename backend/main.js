import "dotenv/config";
import express from 'express';
import routes from "./src/index.js";
import getMongoDbConnection from './src/gateway/noSqlDataContext.js';
import loadSequelizeModels from './src/gateway/sqlDataContext.js';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`LibApp listening on port ${port}`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
  next();
});

loadSequelizeModels().then(db => {
  if (process.env.CREATE_SQL_DATABASE === 'true') {
    db.sequelize.sync({ force: true})
  }
  
  routes(app, db);
});

const noSqlConnection = await getMongoDbConnection();
noSqlConnection.on("error", (error) => {
  console.error("Mongo database connection failed:", error);
});

noSqlConnection.once("open", () => {
  console.log("Mongo database connection successful");
})

export default app;