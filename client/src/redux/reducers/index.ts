import { combineReducers } from 'redux';
import homeReducer from './home.reducer';
import OrderReducer from './order.reducer';
import productReducer from './product.reducer';
import productDetailReducer from './productDetail.reducer';
import userReducers from './user';

const rootReducer = combineReducers({
  user: userReducers,
  product: productReducer,
  home: homeReducer,
  productDetails: productDetailReducer,
  order: OrderReducer,
});

export default rootReducer;
