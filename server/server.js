import express from 'express';
import data from './data';

const app = express();

app.get("/api/pizzas", (req, res) => {
  res.send(data.pizzas)
})


app.listen(1234, () => {
  console.log("server started at 1234")
})
