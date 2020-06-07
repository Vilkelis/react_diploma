import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCatalogRequest, 
         fetchCategoriesRequest, 
         changeActiveCategory,
         changeSearchText } from '../actions/actionCreators';
import Error from './Error';
import Preloader from './Preloader';
import Categories from './Categories';
import GoodList from './GoodList';
 
function Catalog(props) {
  const { useSearch } = props;
  const {
    items, 
    allItemsLoaded, 
    categories, 
    searchText, 
    activeCategoryId, 
    error, 
    loading
  } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  React.useEffect( () => {               
    dispatch(fetchCategoriesRequest());
  }, [dispatch]);

  React.useEffect( () => {       
    dispatch(fetchCatalogRequest(false, useSearch));
  }, [dispatch, activeCategoryId, useSearch]);

  const handleRetry = () => {     
    dispatch(fetchCategoriesRequest());
  }

  const handleCategoryClick = (categoryId) => {     
    dispatch(changeActiveCategory(categoryId));
  }

  const handleLoadMoreClick = () => {
    dispatch(fetchCatalogRequest(true, useSearch));
  }

  const handleSearch = evt => {
    const { value } = evt.target;
    dispatch(changeSearchText(value));
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      
      { useSearch ? <form className="catalog-search-form form-inline">
                      <input className="form-control" placeholder="Поиск" onChange={handleSearch} value={searchText} />
                    </form> : null }

      <Categories items={categories} 
                  activeItemId={activeCategoryId} 
                  handleItemClick={handleCategoryClick}/>                       
      <GoodList items={items} />
      {error ? <Error text={'Произошла ошибка'} handleRetry={handleRetry}/> : null} 
      {loading ? <Preloader/> : null}
      {!loading ?  <div className="text-center">
                      <button className="btn btn-outline-primary" 
                              onClick={handleLoadMoreClick}
                              disabled={allItemsLoaded}
                              >Загрузить ещё</button>
                   </div> : null}      
    </section>
  );
}
 
export default Catalog;