import React from 'react';

function Good(props) {
  const { item, 
          qty, 
          selectedSize,  
          handleSizeChange, 
          handleQtyMinus, 
          handleQtyPlus,
          handleIntoCart } = props;
  const sizesAvailable = item && item.sizes.filter( o => o.avalible );

  const handleSizeClick = (event) => {
    event.preventDefault();
    handleSizeChange(event.target.textContent);
  }

  const handleQtyMinusClick = (event) => {
    event.preventDefault();
    handleQtyMinus();
  }

  const handleQtyPlusClick = (event) => {
    event.preventDefault();
    handleQtyPlus();
  }

  const handleQtyClick = (event) => {
    event.preventDefault();
    handleQtyPlus();
  }

  const handleIntoCartClick = (event) => {
    event.preventDefault();
    handleIntoCart();
  }

  if ( !item ) {
    return null;
  }

  return (
    <React.Fragment>
      <h2 className="text-center">{item.title}</h2>
      <div className="row">
          <div className="col-5">
              <img src={item.images[0]}
                  className="img-fluid" alt={item.title}/>
          </div>
          <div className="col-7">
              <table className="table table-bordered">
                  <tbody>
                      <tr>
                          <td>Артикул</td>
                          <td>{item.sku}</td>
                      </tr>
                      <tr>
                          <td>Производитель</td>
                          <td>{item.manufacturer}</td>
                      </tr>
                      <tr>
                          <td>Цвет</td>
                          <td>{item.color}</td>
                      </tr>
                      <tr>
                          <td>Материалы</td>
                          <td>{item.material}</td>
                      </tr>
                      <tr>
                          <td>Сезон</td>
                          <td>{item.season}</td>
                      </tr>
                      <tr>
                          <td>Повод</td>
                          <td>{item.reason}</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center">
                  <p>Размеры в наличии: 
                    {sizesAvailable.map( o => ( <span key={o.size} onClick={handleSizeClick} className={'ml-2 catalog-item-size' + ((selectedSize === o.size ) ? ' selected' : '')} >{o.size}</span>) )}      
                  </p>
                { (sizesAvailable.length > 0 ) ? <p>Количество: <span className="btn-group btn-group-sm pl-2">
                          <button className="btn btn-secondary" onClick={handleQtyMinusClick} disabled={qty <= 1}>-</button>
                          <span className="btn btn-outline-primary" onClick={handleQtyClick}>{qty}</span>
                          <button className="btn btn-secondary" onClick={handleQtyPlusClick} disabled={qty >= 10}>+</button>
                      </span>
                  </p> : null }
              </div>
              {(sizesAvailable.length > 0 ) ? <button className="btn btn-danger btn-block btn-lg" onClick={handleIntoCartClick} disabled={!selectedSize}>В корзину</button> : null}
          </div>
      </div>       
    </React.Fragment>
  );
}

export default Good;