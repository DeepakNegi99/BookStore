import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.mjs";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";

const app = express();
app.use(express.json());  // Add this line to parse JSON requests

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welocome to MERN Stack Tutorial');
});

app.post('/books', async (request, response) => {
  try {
    if (!request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).json({ error: "All fields are required" });

    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).json(book);
  }
  catch (error) {
    console.error("Error creating book:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
        count: books.length,
        data: books
    });
      
  }
  catch (error) {
    console.error("Error fetching books:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.get('/books/:id', async (request, response) => {
  try {
    const {id} = request.params;
    const books = await Book.findById(id);
    return response.status(200).json({
        count: books.length,
        data: books
    });
      
  }
  catch (error) {
    console.error("Error fetching books:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

// Route for updating a book
app.put('/books/:id', async (request, response) => {
  try {
    if (!request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).json({ error: "All fields are required" });

    }
    const {id} = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body)

    if(!result){
      return response.status(404).json({message: "Book not found"});
  }
    return response.status(200).json({
        message: "Book updated successfully",
        data: result
    });
    
  }
  catch (error) {
    console.error("Error creating book:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });