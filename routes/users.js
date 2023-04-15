import express from "express";
import bcrypt from "bcrypt";

import { genPassword, createUser, getUserByName } from "../helper.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);
  if (isUserExist) {
    res.status(400).send({ message: "User already taken" });
    return;
  }
  if (
    !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/g.test(password)
  ) {
    res.status(400).send({ message: "Password does not match" });
    return;
  }

  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  res.send(result);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  if (!userFromDB) {
    res.status(400).send({ message: "Invalid credentials" });
    return;
  }
  const storedDbPassword = userFromDB.password;
  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);

  if (!isPasswordMatch) {
    res.status(400).send({ message: "Invalid credentials" });
    return;
  }

  res.send(isPasswordMatch);
});

export const usersRouter = router;
//task
//Validate if username already present ✅
//Validate if password matches
