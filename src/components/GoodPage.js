import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchGoodRequest, 
         changeGoodSelectedSize, 
         changeGoodQtyBy, 
         putGoodIntoCart } from '../actions/actionCreators';
import Good from './Good';
import Error from './Error';
import Preloader from './Preloader';

function GoodPage(props) {
  const { item, qty, selectedSize, error, loading } = useSelector(state => state.good);  
  const { match } = props; 
  const dispatch = useDispatch();   
  
  React.useEffect( () => {         
    dispatch(fetchGoodRequest(match.params.id));
  }, [dispatch, match.params.id]);
  
  const handleRetry = () => {     
    dispatch(fetchGoodRequest(match.params.id));
  }
  
  const handleSizeChange = (size) => {
    dispatch(changeGoodSelectedSize(size));
  }

  const handleQtyMinus = () => {     
    dispatch(changeGoodQtyBy(-1));
  }  

  const handleQtyPlus = () => {     
    dispatch(changeGoodQtyBy(1));
  }  

  const handleIntoCart = () => {
    dispatch(putGoodIntoCart(item, qty, selectedSize));
  }

  return (
    <section className="catalog-item">
      {error ? <Error text={'Произошла ошибка'} handleRetry={handleRetry}/> : null} 
      {loading ? <Preloader/> : null}     
      {!loading ? <Good item={item} 
                        qty={qty} 
                        selectedSize={selectedSize} 
                        handleSizeChange={handleSizeChange}
                        handleQtyMinus={handleQtyMinus}
                        handleQtyPlus={handleQtyPlus}
                        handleIntoCart={handleIntoCart} /> : null }
    </section>
  );
}

export default GoodPage;