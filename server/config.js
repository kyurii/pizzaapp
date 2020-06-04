import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  connectionString: 'mongodb://localhost/pizzaapp'
};
