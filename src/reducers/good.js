import getHistory from '../lib/GlobalHistory';
import {
  FETCH_GOOD_FAILURE, 
  FETCH_GOOD_SUCCESS, 
  FETCH_GOOD_REQUEST,
  CHANGE_GOOD_SELECTED_SIZE,
  CHANGE_GOOD_QTY_BY
} from '../actions/actionTypes'

const initialState = {
  item: null,
  selectedSize: null,
  qty: 1,
  loading: false,
  error: null
};

export default function GoodReducer(state = initialState, action) {     
  switch (action.type) {
  case FETCH_GOOD_REQUEST:
    return {...state, item: null, loading: true, error: null}  
  case FETCH_GOOD_SUCCESS:                   
    return {...state, item: action.payload, selectedSize: null, qty: 1, error: null, loading: false}
  case FETCH_GOOD_FAILURE:            
    const error = action.payload.error;
    if ( error && error.status === 404 ) {
      getHistory().replace('/404', 301);
      return {...state, loading: false, error: null}
    } else {
      return {...state, loading: false, error: action.payload.error}
    }
  case CHANGE_GOOD_SELECTED_SIZE:
    return {...state, selectedSize: action.payload}
  case CHANGE_GOOD_QTY_BY:
    let qty = state.qty + action.payload;
    qty = qty <= 0 ? 1 : (qty > 10 ? 10 : qty); 
    return {...state, qty: qty};
  default:
    return state;
  }
}