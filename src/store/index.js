import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import topSalesReducer from '../reducers/topSales';
import catalogReducer from '../reducers/catalog'; 
import headerSearchReducer from '../reducers/headerSearch'; 
import goodReducer from '../reducers/good'; 
import cartReducer from '../reducers/cart'; 
import { 
  fetchTopSalesEpic, 
  fetchCatalogEpic, 
  fetchCategoriesEpic, 
  clickHeaderSearchEpic,
  fetchGoodEpic,
  orderCartItemsEpic,
  changeSearchTextEpic 
} from '../epics';

const epic = combineEpics(
  fetchTopSalesEpic,
  fetchCatalogEpic,
  fetchCategoriesEpic,
  clickHeaderSearchEpic,
  fetchGoodEpic,
  orderCartItemsEpic,
  changeSearchTextEpic
);

const reducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogReducer,
  headerSearch: headerSearchReducer,
  good: goodReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;