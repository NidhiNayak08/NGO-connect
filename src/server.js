import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { create, findOne } from "../components/user_register.js";

const app = express();
app.use(json());
app.use(cors());

// mongconnect("mongodb://127.0.0.1:27017/ngo");
mongoose.connect("mongodb://127.0.0.1:27017/ngo");

app.post("/register", (req, res) => {
  create(req.body)
    .then((register = res.json(register)))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password == password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});