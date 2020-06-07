import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchTopSalesRequest } from '../actions/actionCreators';
import Error from './Error';
import Preloader from './Preloader';
import GoodList from './GoodList';
 
function TopSales(props) {
  const {items, error, loading} = useSelector(state => state.topSales);
  const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchTopSalesRequest());
  }

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading ? <Preloader/> : null}
      {error ? <Error text={'Произошла ошибка'} handleRetry={handleRetry}/> : null}
      <GoodList items={items} />
    </section>
  );
}

export default TopSales;