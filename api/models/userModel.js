import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { 
    type: String, 
    required: true, 
    min: 3, 
    max: 20, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    max: 50 
  },
  password: { 
    type: String, 
    required: true, 
    max: 50 
  },
  avatarImage: { 
    type: String, 
    default: "" 
  },
});

export default model("ChatUser", userSchema);