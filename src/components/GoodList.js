import React from 'react'; 
import GoodListItem from './GoodListItem';

function GoodList(props) {
  const {items} = props;

  if (!items || items.length === 0) {
    return null;
  }; 
      
  return (   
    <div className="row">        
      {items.map( o => (<GoodListItem key={o.id} item={o} />) )}      
    </div>
  );
}

export default GoodList;