import mongoose from "mongoose";

export const roleSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

export const Role = mongoose.model("roles", roleSchema);