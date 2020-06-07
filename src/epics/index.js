import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { debounceTime, filter, map, retry, switchMap, catchError } from 'rxjs/operators';
import { FETCH_TOP_SALES_REQUEST, 
         FETCH_CATALOG_REQUEST,
         FETCH_CATEGORIES_REQUEST,          
         CHANGE_SEARCH_TEXT,
         CLICK_HEADER_SEARCH,
         FETCH_GOOD_REQUEST,
         ORDER_CART_ITEMS_REQUEST          
        } from '../actions/actionTypes';
import { fetchTopSalesSuccess, 
         fetchTopSalesFailure,
         fetchCatalogRequest,
         fetchCatalogSuccess, 
         fetchCatalogFailure,
         fetchCategoriesSuccess, 
         fetchCategoriesFailure,
         redirectToCatalogWithSearch,
         fetchGoodSuccess,
         fetchGoodFailure,
         orderCartItemsSuccess,
         orderCartItemsFailure                
         } from '../actions/actionCreators';
import { of } from 'rxjs';

export const fetchTopSalesEpic = action$ => action$.pipe(
  ofType(FETCH_TOP_SALES_REQUEST),   
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/top-sales`).pipe(
      retry(3),            
      map(o => fetchTopSalesSuccess(o)),
      catchError(e => of(fetchTopSalesFailure(e)))     
  )),
);

function urlForCatalogFetch(action, state) {
  let url = `${process.env.REACT_APP_API_URL}/items?categoryId=${state.value.catalog.activeCategoryId}&offset=${state.value.catalog.items.length}`;
  if (action.payload.useSearch) {
    url = url + `&q=${state.value.catalog.searchText}`;
  }
  return url;
}

export const fetchCatalogEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_CATALOG_REQUEST),
  filter( o => state$.value.catalog.activeCategoryId != null ),    
  switchMap(o => ajax.getJSON(urlForCatalogFetch(o,state$)).pipe(
      retry(3),            
      map(o => fetchCatalogSuccess(o)),
      catchError(e => of(fetchCatalogFailure(e)))     
  )),
);

export const fetchCategoriesEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_CATEGORIES_REQUEST),  
  filter( o => state$.value.catalog.categories.length === 0 ), 
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/categories`).pipe(
      retry(3),            
      map(o => fetchCategoriesSuccess(o)),
      catchError(e => of(fetchCategoriesFailure(e)))     
  )),
);

export const changeSearchTextEpic = (action$, state$) => action$.pipe(
  ofType(CHANGE_SEARCH_TEXT),
  map(o => o.payload.trim()),
  filter(o => o !== ''),
  debounceTime(500),
  map(o => fetchCatalogRequest(false, true))
)

export const clickHeaderSearchEpic = (action$, state$) => action$.pipe(
  ofType(CLICK_HEADER_SEARCH),
     filter(o => !state$.value.headerSearch.visible),
     filter(o => state$.value.headerSearch.searchText !== ''), 
     map( o => redirectToCatalogWithSearch(state$.value.headerSearch.searchText))
)

export const fetchGoodEpic = action$ => action$.pipe(
  ofType(FETCH_GOOD_REQUEST),     
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API_URL}/items/${o.payload}`).pipe(
      retry(3),            
      map(o => fetchGoodSuccess(o)),
      catchError(e => of(fetchGoodFailure(e)))     
  )),
);

export const orderCartItemsEpic = action$ => action$.pipe(
  ofType(ORDER_CART_ITEMS_REQUEST), 
  map(o => o.payload),    
  switchMap(o =>  
    ajax({
      url: `${process.env.REACT_APP_API_URL}/order`,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: {
        owner: {phone: o.buyer.phone, address: o.buyer.address},
        items: o.items.map( it => { return {id: it.item.id, price: it.item.price, count: it.qty} } )
      }
    }).pipe(
      retry(3),            
      map(o => orderCartItemsSuccess(o)),
      catchError(e => of(orderCartItemsFailure(e)))     
  )),
);