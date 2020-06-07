import React from 'react';
import TopSales from './TopSales';
import Catalog from './Catalog';
 
 
function MainPage(props) {
  return (
    <React.Fragment>           
        <TopSales/>
        <Catalog useSearch={false}/>
    </React.Fragment>
  );
}

export default MainPage;