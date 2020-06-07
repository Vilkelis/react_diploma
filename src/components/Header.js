import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import {useSelector, useDispatch} from 'react-redux';
import { clickHeaderSearch, changeHeaderSearchText } from '../actions/actionCreators';
 
function Header(props) {
  const { searchText, visible } = useSelector(state => state.headerSearch);
  const cart = useSelector( state => state.cart );
  const dispatch = useDispatch();

  const handleSearchExpanderClick = (event) => {
    event.preventDefault();
    dispatch(clickHeaderSearch());
  } 

  const handleSearchTextChange = (event) => {     
    const { value } = event.target;
    dispatch(changeHeaderSearchText(value));
  } 

  return (     
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <HeaderLogo/>
            <div className="collapase navbar-collapse" id="navbarMain">
              <HeaderMenu/>
              <div>
                <div className="header-controls-pics">
                    <div data-id="search-expander" 
                         className="header-controls-pic header-controls-search"
                         onClick={handleSearchExpanderClick}     
                    >
                    </div>                           
                    <Link to={"/cart"} className="header-controls-pic header-controls-cart">
                      { cart.items.length > 0 ? <div className="header-controls-cart-full">{cart.items.length}</div> : null }
                      <div className="header-controls-cart-menu"></div>
                    </Link>
                </div>
                <form data-id="search-form" className={'header-controls-search-form form-inline' + ( visible ? '' : ' invisible')}>
                    <input className="form-control" placeholder="Поиск" onChange={handleSearchTextChange} value={searchText} />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>      
    </header>          
  );
}

export default Header;