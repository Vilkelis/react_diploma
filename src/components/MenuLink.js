import React from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';

function MenuLink(props) {
  const {to} = props;
  const location = useLocation();   

  if (location.pathname === to) {
    return (
      <li className="nav-item active">
        <span className="nav-link">{props.children}</span>
      </li>
    );
  
  } else {
    return (
      <li className="nav-item">
        <Link to={to} className="nav-link">{props.children}</Link>
      </li>
    );  
  }
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired 
}

export default MenuLink;