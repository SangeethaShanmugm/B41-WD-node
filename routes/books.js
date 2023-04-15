import express from "express";
import {
  getAllBooks,
  getBookById,
  deleteBookById,
  addBooks,
  updateBookById,
} from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);

  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const book = await getAllBooks(req);
  res.send(book);
});

//get Books by ID

router.get("/:id",auth, async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  //db..findOne({id:"001"})
  const book = await getBookById(id);
  book ? res.send(book) : res.status(404).send({ message: "No Book Found" });
});

//delete by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  //db..findOne({id:"001"})
  const book = await deleteBookById(id);
  res.send(book);
});

//post
//where you will pass data - body
router.post("/", async (req, res) => {
  const newBook = req.body;
  console.log(newBook);
  const result = await addBooks(newBook);
  res.send(result);
});

//put - update based on ID - 15 mins

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  console.log(updatedBook);
  const result = await updateBookById(id, updatedBook);
  res.send(result);
});

export const booksRouter = router;
