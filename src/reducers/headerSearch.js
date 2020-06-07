import getHistory from '../lib/GlobalHistory';
import {
  CLICK_HEADER_SEARCH, 
  CHANGE_HEADER_SEARCH_TEXT,
  REDIRECT_TO_CATALOG_WITH_SEARCH
} from '../actions/actionTypes'

const initialState = {
  visible: false,
  searchText: '' 
};

export default function headerSearchReducer(state = initialState, action) {     
  switch (action.type) {
  case CLICK_HEADER_SEARCH:
    return {...state, visible: !state.visible}
  case CHANGE_HEADER_SEARCH_TEXT:
    return {...state, searchText: action.payload}
  case REDIRECT_TO_CATALOG_WITH_SEARCH:
    const history = getHistory();
    if (history.location.pathname !== '/catalog') {
      history.push('/catalog');
    }
    return state;
  default:
    return state;
  }
}