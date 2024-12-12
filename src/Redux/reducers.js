import { combineReducers } from 'redux';
import productReducer from './reducer';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;