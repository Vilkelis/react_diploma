import {
  FETCH_TOP_SALES_FAILURE, 
  FETCH_TOP_SALES_SUCCESS, 
  FETCH_TOP_SALES_REQUEST
} from '../actions/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function topSalesReducer(state = initialState, action) {     
  switch (action.type) {
  case FETCH_TOP_SALES_REQUEST:
    return {...state, items: [], loading: true, error: null}    
  case FETCH_TOP_SALES_SUCCESS:
    return {...state, items: action.payload, error: null, loading: false}
  case FETCH_TOP_SALES_FAILURE:       
    return {...state, loading: false, error: action.payload.error}
  default:
    return state;
  }
}