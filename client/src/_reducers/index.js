import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { currency } from './currency.reducer';

const rootReducer = combineReducers({
  alert,
  currency
});

export default rootReducer;
