import React from 'react';
import PropTypes from 'prop-types'; 

function CategoryLink(props) {
  const {active, handleClick, id} = props;
  const handleItemClick = (event) => {
    event.preventDefault();
    handleClick(id);     
  }

  return (
    <li className="nav-item">
      <a href="/" 
         onClick={handleItemClick} 
         className={'nav-link' + (active ? ' active' : '')}>{props.children}</a>
    </li>
  );    
}

CategoryLink.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.number,
  handleClick: PropTypes.func
}

export default CategoryLink;