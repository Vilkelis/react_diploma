import React from 'react';
import CategoryLink from './CategoryLink';
 
function Categories(props) {
  const {items, activeItemId, handleItemClick} = props

  return (
    <ul className="catalog-categories nav justify-content-center">
      {items.map( o => <CategoryLink active={o.id === activeItemId} 
                                     handleClick={handleItemClick} 
                                     id={o.id}
                                     key={o.id}>{o.title}</CategoryLink>)}      
    </ul>
  );
}
 
export default Categories;