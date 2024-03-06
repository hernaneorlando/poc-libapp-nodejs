import mongoose from "mongoose";

async function getMongoDbConnection() {
  mongoose.connect(process.env.NOSQL_DBCONNECTION_STRING, { dbName: "library" });
  return mongoose.connection;
}

export default getMongoDbConnection;