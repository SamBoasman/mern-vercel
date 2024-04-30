import mongoose from "mongoose"
import Express  from "express";
import cors from "cors";

import ChatUser from "./models/userModel.js"

const app = Express();

app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Succesfull!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get("/api/record/", async (req, res) => {
  try {
    const users = await ChatUser.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    res.json(users);
  } catch (ex) {
    console.log(ex);
  }
});

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
})