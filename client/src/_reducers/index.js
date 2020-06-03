import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { pizzas } from './pizzas.reducer';
import { currency } from './currency.reducer';
import { cart } from './cart.reducer';

const rootReducer = combineReducers({
  alert,
  currency,
  pizzas,
  cart
});

export default rootReducer;
