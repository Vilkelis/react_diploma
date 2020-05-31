import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

 
function Header(props) {
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
                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>                           
                    <Link to={"/basket"} className="header-controls-pic header-controls-cart">
                        <div className="header-controls-cart-full">1</div>
                        <div className="header-controls-cart-menu"></div>
                    </Link>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                    <input className="form-control" placeholder="Поиск"/>
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