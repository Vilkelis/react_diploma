import {
  FETCH_CATEGORIES_FAILURE, 
  FETCH_CATEGORIES_SUCCESS, 
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATALOG_FAILURE, 
  FETCH_CATALOG_SUCCESS, 
  FETCH_CATALOG_REQUEST,
  CHANGE_ACTIVE_CATEGORY,
  CHANGE_SEARCH_TEXT,
  REDIRECT_TO_CATALOG_WITH_SEARCH 
} from '../actions/actionTypes'

const fetchItemsPortion = 6;

const categoryAll = {id: 0, title: 'Все'};

const initialState = {
  categories: [],
  activeCategoryId: null,
  items: [],
  searchText: '',
  allItemsLoaded: false,
  loading: false,
  error: null
};

export default function catalogReducer(state = initialState, action) {     
  switch (action.type) {  
  case REDIRECT_TO_CATALOG_WITH_SEARCH:
    return {...state, items: [], searchText: action.payload, activeCategoryId: categoryAll.id}
  case CHANGE_SEARCH_TEXT:     
    return {...state, items: [], searchText: action.payload}
  case CHANGE_ACTIVE_CATEGORY:    
    return {...state, items: [], 
                      allItemsLoaded: false, 
                      activeCategoryId: action.payload}    
  case FETCH_CATEGORIES_REQUEST:
    return {...state, loading: true, error: null}
  case FETCH_CATEGORIES_SUCCESS:
    let newCategories = action.payload;
    newCategories.unshift(categoryAll);
    const newActiveCategoryId =  state.activeCategoryId || categoryAll.id;      
    return {...state, categories: newCategories, 
                      items: [], 
                      allItemsLoaded: false, 
                      activeCategoryId: newActiveCategoryId, 
                      error: null, 
                      loading: false}    
  case FETCH_CATEGORIES_FAILURE:       
    return {...state, loading: false, error: action.payload.error}   
  case FETCH_CATALOG_REQUEST:
    const {fetchNext} = action.payload;    
    return {...state, 
               items: (fetchNext ? state.items : []),
               loading: true, 
               error: null}
  case FETCH_CATALOG_SUCCESS:
    const newItems = state.items.concat(action.payload);
    const allItemsLoaded = action.payload.length < fetchItemsPortion;
    return {...state, items: newItems, 
                      allItemsLoaded: allItemsLoaded, 
                      error: null, 
                      loading: false}  
  case FETCH_CATALOG_FAILURE:       
    return {...state, loading: false, error: action.payload.error}
  default:
    return state;
  }
}