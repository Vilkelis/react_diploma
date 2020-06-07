import React from 'react'; 
import {useSelector, useDispatch} from 'react-redux'; 
import { deleteItemFromCart,
         changeBuyerPhone,
         changeBuyerAddress,
         changeBuyerAgree, 
         orderCartItemsRequest } from '../actions/actionCreators';
import Error from './Error';
import Preloader from './Preloader';         
import CartItems from './CartItems';
import CartSendForm from './CartSendForm';
 
function CartPage(props) {
  const {     
      items,
      totalSum,
      buyer,
      loading,
      error
    } = useSelector(state => state.cart);
  const dispatch = useDispatch();    

  const handleItemDelete = (item) => {     
    dispatch(deleteItemFromCart(item));
  };

  const handleBuyerPhoneChange = (value) => {
    dispatch(changeBuyerPhone(value));
  }

  const handleBuyerAddressChange = (value) => {
    dispatch(changeBuyerAddress(value));
  }

  const handleBuyerAgreeChange = (value) => {
    dispatch(changeBuyerAgree(value));
  }

  const handleSendCart = () => {
    dispatch(orderCartItemsRequest(buyer, items));
  }
  
  return (
    <React.Fragment>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <CartItems items={items} 
                   totalSum={totalSum} 
                   deleteItemsDisabled={loading}
                   handleItemDelete={handleItemDelete} />
      </section>
      {error ? <Error text={'Произошла ошибка'} /> : null} 
      {loading ? <Preloader/> : null}      
       <section className="order">                  
          { !loading && items.length > 0 ? <CartSendForm buyer={buyer} 
                                                         handlePhoneChange={handleBuyerPhoneChange} 
                                                         handleAddressChange={handleBuyerAddressChange}
                                                         handleAgreeChange={handleBuyerAgreeChange}
                                                         formDisabled={loading}
                                                         handleSend={handleSendCart} /> : null}           
      </section>
    </React.Fragment>
  );
}

export default CartPage;