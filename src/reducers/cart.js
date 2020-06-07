import getHistory from '../lib/GlobalHistory';
import {
  PUT_GOOD_INTO_CART, 
  DELETE_ITEM_FROM_CART,    
  ORDER_CART_ITEMS_REQUEST,
  ORDER_CART_ITEMS_SUCCESS,
  ORDER_CART_ITEMS_FAILURE,
  CHANGE_BUYER_ADDRESS,
  CHANGE_BUYER_PHONE,
  CHANGE_BUYER_AGREE     
} from '../actions/actionTypes'

const initialState = {
  items: [],
  totalSum: 0,
  buyer: { phone: '', address: '', agreeWithRooles: false},
  loading: false,
  error: null
};

const totalSumCalc = ( cartItems ) => {
  return cartItems.reduce( 
    (accumulator, currentItem) => { return accumulator + currentItem.totalSum }, 0 
  );   
}

const getCartItemsFromStorage = (initialItems) => {
  const value = localStorage.getItem('cart');
  return (value && JSON.parse(value)) || initialItems;  
}

const putCartItemsToStorage = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
}

initialState.items = getCartItemsFromStorage(initialState.items);
initialState.totalSum = totalSumCalc(initialState.items);

export default function cartReducer(state = initialState, action) {       
  switch (action.type) {
  case PUT_GOOD_INTO_CART:     
    const history = getHistory();
    if (history.location.pathname !== '/cart') {
      history.push('/cart');
    }
    const {item, qty, size} = action.payload;
    const items = getCartItemsFromStorage(state.items);     
    let cartItem = items.find( o => o.item.id === item.id && o.size === size );
    if ( cartItem ) {
      cartItem.item.price = item.price;
      cartItem.qty = cartItem.qty + qty;
      cartItem.totalSum = cartItem.item.price * cartItem.qty;  
    }
    else {
      cartItem = { item: item, qty: qty, size: size, totalSum: qty*item.price };
      items.push(cartItem);
    }          
    putCartItemsToStorage(items);
    return {...state, items: items, totalSum: totalSumCalc(items) };
  case DELETE_ITEM_FROM_CART:     
    const newItems = getCartItemsFromStorage(state.items).filter( o => o.item.id !== action.payload.item.id && o.size !== action.payload.size);
    putCartItemsToStorage(newItems);
    return {...state, items: newItems, totalSum: totalSumCalc(newItems)};
  case ORDER_CART_ITEMS_REQUEST:
    return {...state, loading: true, error: null}
  case ORDER_CART_ITEMS_FAILURE:        
    return {...state, loading: false, error: action.payload.error}   
  case ORDER_CART_ITEMS_SUCCESS:     
    putCartItemsToStorage([]);
    return {...state, loading: false, error: null, items: [], totalSum: 0}
  case CHANGE_BUYER_ADDRESS:
    return {...state, buyer: {...state.buyer, address: action.payload}}
  case CHANGE_BUYER_PHONE:
    return {...state, buyer: {...state.buyer, phone: action.payload}}
  case CHANGE_BUYER_AGREE:
    return {...state, buyer: {...state.buyer, agreeWithRooles: action.payload}}
  default:
    return state;
  }
}