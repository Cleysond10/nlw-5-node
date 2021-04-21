import express, { request, response } from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: "Olá, Mundo!"
  })
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo."
  })
});

app.listen(3333, () => {
  console.log("Server is Running")
});
