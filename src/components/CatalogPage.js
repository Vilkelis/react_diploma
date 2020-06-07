import React from 'react'; 
import Catalog from './Catalog';
 
function CatalogPage(props) {
  return (
    <React.Fragment>          
      <Catalog useSearch={true}/>      
    </React.Fragment>  
  );
}

export default CatalogPage;