import React from 'react';
import Banner from './Banner';
import TopSales from './TopSales';
import Catalog from './Catalog';
 
 
function MainPage(props) {
  return (
    <React.Fragment>           
        <TopSales/>
        <Catalog/>
    </React.Fragment>
  );
}

export default MainPage;