import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

import pizzasRoute from './routes/pizzasRoute';
import config from './config';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.log(err))


const db = mongoose.connection;

const app = express();

app.use(cors());

app.use("/api/pizzas", pizzasRoute);

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});


app.listen(config.PORT, () => {
  console.log("server started at " + config.PORT)
})
