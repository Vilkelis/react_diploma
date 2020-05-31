import React from 'react';
//import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
 
function HeaderLogo(props) {
  const location = useLocation();

  if(location.pathname === '/') {
    return (
      <span className="navbar-brand">
      <img src="/img/header-logo.png" alt="Bosa Noga"/>
      </span>      
    );
  } else {
    return (
      <Link to={'/'} className="navbar-brand">
        <img src="/img/header-logo.png" alt="Bosa Noga"/>
      </Link>      
    );
  }
}

export default HeaderLogo;