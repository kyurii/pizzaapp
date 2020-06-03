import mongoose from 'mongoose';

const currencySchema = {
  EUR: { type: Number, required: true },
  USD: { type: Number, required: true }
};

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  calories: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  price: currencySchema
});

const pizzaModel = mongoose.model("Pizza", pizzaSchema);

export default pizzaModel;
