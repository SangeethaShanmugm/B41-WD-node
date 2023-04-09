import express from "express";
import { genPassword, createUser } from "../helper.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

export const usersRouter = router;
//task
//Validate if username already present
//Validate if password matches
