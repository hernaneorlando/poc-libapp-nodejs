import mongoose from "mongoose";
import { roleSchema } from "./role.js"

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  alias: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  role: roleSchema
}, {
  versionKey: false
});

const User = mongoose.model("users", userSchema);

export default User;