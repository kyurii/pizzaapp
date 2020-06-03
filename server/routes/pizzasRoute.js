import express from 'express';
import mongoose from 'mongoose';

import Pizza from '../models/pizzaModel';
import data from '../data';

const router = express.Router();
const db = mongoose.connection;


router.get("/", async (req, res) => {
  const pizzas = await Pizza.find();

  if (pizzas.length) {
    const pizzas = await Pizza.find();
    res.send(pizzas);
  } else {
    const dataPizzas = data.pizzas;

    for (const pizza of dataPizzas) {
      const product = new Pizza({
        name: pizza.name,
        image: pizza.image,
        calories: pizza.calories,
        description: pizza.description,
        price: pizza.price
      });

      const newProduct = await product.save();
    }

    const pizzas = await Pizza.find();
    res.send(pizzas);
  }

})


export default router;
