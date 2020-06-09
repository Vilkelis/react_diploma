import { FETCH_TOP_SALES_REQUEST,
         FETCH_TOP_SALES_SUCCESS,
         FETCH_TOP_SALES_FAILURE,
         FETCH_CATALOG_REQUEST,
         FETCH_CATALOG_SUCCESS,
         FETCH_CATALOG_FAILURE,
         FETCH_CATEGORIES_REQUEST,
         FETCH_CATEGORIES_SUCCESS,
         FETCH_CATEGORIES_FAILURE,
         CHANGE_ACTIVE_CATEGORY,
         CHANGE_SEARCH_TEXT,
         CLICK_HEADER_SEARCH,
         CHANGE_HEADER_SEARCH_TEXT,
         REDIRECT_TO_CATALOG_WITH_SEARCH,
         FETCH_GOOD_REQUEST,
         FETCH_GOOD_SUCCESS,
         FETCH_GOOD_FAILURE,
         CHANGE_GOOD_SELECTED_SIZE,
         CHANGE_GOOD_QTY_BY,
         PUT_GOOD_INTO_CART,
         DELETE_ITEM_FROM_CART,
         ORDER_CART_ITEMS_REQUEST,
         ORDER_CART_ITEMS_SUCCESS,
         ORDER_CART_ITEMS_FAILURE,
         CLEAR_ORDER_SUCCESS_MESSAGE,
         CHANGE_BUYER_ADDRESS,
         CHANGE_BUYER_PHONE,
         CHANGE_BUYER_AGREE         
 } from './actionTypes';

/** Top Sales */
export function fetchTopSalesRequest() {
  return {type: FETCH_TOP_SALES_REQUEST};
}

export function fetchTopSalesSuccess(items) {
  return {type: FETCH_TOP_SALES_SUCCESS, payload: items};
}

export function fetchTopSalesFailure(error) {
  return {type: FETCH_TOP_SALES_FAILURE, payload: {error}};
}

/** Catalog */
export function fetchCatalogRequest(fetchNextPortion, useSearch) {
  return {type: FETCH_CATALOG_REQUEST, payload: {fetchNext: fetchNextPortion, useSearch: useSearch} };
}

export function fetchCatalogSuccess(items) {
  return {type: FETCH_CATALOG_SUCCESS, payload: items};
}

export function fetchCatalogFailure(error) {
  return {type: FETCH_CATALOG_FAILURE, payload: {error}};
}

export function changeSearchText(searchText) {
  return {type: CHANGE_SEARCH_TEXT, payload: searchText}
}

/** Catalog Categories */
export function fetchCategoriesRequest() {
  return {type: FETCH_CATEGORIES_REQUEST};
}

export function fetchCategoriesSuccess(items) {
  return {type: FETCH_CATEGORIES_SUCCESS, payload: items};
}

export function fetchCategoriesFailure(error) {
  return {type: FETCH_CATEGORIES_FAILURE, payload: {error}};
}

export function changeActiveCategory(activeCategoryId) {
  return {type: CHANGE_ACTIVE_CATEGORY, payload: activeCategoryId}
}

/** Header search field */
export function clickHeaderSearch() {
  return {type: CLICK_HEADER_SEARCH, payload: null}
}

export function changeHeaderSearchText(searchText) {
  return {type: CHANGE_HEADER_SEARCH_TEXT, payload: searchText}
}

export function redirectToCatalogWithSearch(searchText) {
  return {type: REDIRECT_TO_CATALOG_WITH_SEARCH, payload: searchText}
}

/** Good */
export function fetchGoodRequest(goodId) {
  return {type: FETCH_GOOD_REQUEST, payload: goodId};
}

export function fetchGoodSuccess(item) {
  return {type: FETCH_GOOD_SUCCESS, payload: item};
}

export function fetchGoodFailure(error) {
  return {type: FETCH_GOOD_FAILURE, payload: {error}};
}

export function changeGoodSelectedSize(size) {
  return {type: CHANGE_GOOD_SELECTED_SIZE, payload: size}
}

export function changeGoodQtyBy(value) {
  return {type: CHANGE_GOOD_QTY_BY, payload: value}
}

/** Cart */
export function putGoodIntoCart(item, qty, size) {   
  return {type: PUT_GOOD_INTO_CART, payload: {item, qty, size}}
}

export function deleteItemFromCart(cartItem) {   
  return {type: DELETE_ITEM_FROM_CART, payload: cartItem}
}

export function orderCartItemsRequest(buyer, items) {   
  return {type: ORDER_CART_ITEMS_REQUEST, payload: {buyer, items}}
}

export function orderCartItemsSuccess(answer) {   
  return {type: ORDER_CART_ITEMS_SUCCESS, payload: answer}
}

export function clearOrderSuccessMessage() {
  return {type: CLEAR_ORDER_SUCCESS_MESSAGE, payload: null}
}

export function orderCartItemsFailure(error) {   
  return {type: ORDER_CART_ITEMS_FAILURE, payload: {error}}
}

export function changeBuyerPhone(phone) {
  return {type: CHANGE_BUYER_PHONE, payload: phone}
}

export function changeBuyerAddress(address) {
  return {type: CHANGE_BUYER_ADDRESS, payload: address}
}

export function changeBuyerAgree(agree) {
  return {type: CHANGE_BUYER_AGREE, payload: agree}
}
