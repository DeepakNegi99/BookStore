import express from "express";
import { PORT, mongoDBURL } from "./config.mjs";    

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welocome to MERN Stack Tutorial');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});