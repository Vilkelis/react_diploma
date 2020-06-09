import React from 'react'; 
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatSum, onImgError } from '../lib/tools'; 

function GoodListItem(props) {
  const {item} = props;
  const image = (item.images && item.images.length > 0) ? item.images[0] : '';
 
  return (   
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={image} onError={onImgError} className="card-img-top img-fluid"  alt={item.title}/>
        <div className="card-body">
            <p className="card-text">{item.title}</p>
            <p className="card-text">{formatSum(item.price)}</p>
            <Link to={`/catalog/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </div>
  );
}
 
GoodListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string)  
}

export default GoodListItem;