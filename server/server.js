import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import pizzasRoute from './routes/pizzasRoute';
import config from './config';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log(err))


const db = mongoose.connection;

const app = express();

app.use(cors());

app.use("/api/pizzas", pizzasRoute);
