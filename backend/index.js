import express from "express";
import { PORT, mongoDBURL } from "./config.mjs";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());  

// Middleware for hadling CORS policy
// options1:
//app.use(cors());
// options2:
app.use(cors({
  origin: 'http://localhost:5000', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welocome to MERN Stack Tutorial');
});

app.use('/books', booksRoute);

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