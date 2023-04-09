import { client } from "./index.js";
import bcrypt from "bcrypt";
export async function getAllBooks(req) {
  return await client.db("b41we").collection("books").find(req.query).toArray();
}
export async function getBookById(id) {
  return await client.db("b41we").collection("books").findOne({ id: id });
}
export async function deleteBookById(id) {
  return await client.db("b41we").collection("books").deleteOne({ id: id });
}
export async function addBooks(newBook) {
  return await client.db("b41we").collection("books").insertMany(newBook);
}
export async function updateBookById(id, updatedBook) {
  return await client
    .db("b41we")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBook });
}

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); //bcrypt.genSalt(no. of rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b41we")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}
