import { client } from "./index.js";

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
