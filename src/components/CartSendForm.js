import React from 'react'; 
 
function CartSendForm(props) {
  const {buyer, 
         handlePhoneChange, 
         handleAddressChange, 
         handleAgreeChange, 
         formDisabled, 
         handleSend} = props;

  const handleAgreeValueChange = (event) => {     
    handleAgreeChange(event.target.checked);
  }

  const handlePhoneValueChange = (event) => {     
    handlePhoneChange(event.target.value);
  }

  const handleAddressValueChange = (event) => {     
    handleAddressChange(event.target.value);
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSend();
  }

  const canOrder = buyer.agreeWithRooles && buyer.phone && buyer.address;
  
  return (            
    <React.Fragment>
      <h2 className="text-center">Оформить заказ</h2>
      <div className="card card-styled">
          <form className="card-body">
              <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input className="form-control" id="phone" placeholder="Ваш телефон" value={buyer.phone} onChange={handlePhoneValueChange} disabled={formDisabled}/>
              </div>
              <div className="form-group">
                  <label htmlFor="address">Адрес доставки</label>
                  <input className="form-control" id="address" placeholder="Адрес доставки" value={buyer.address} onChange={handleAddressValueChange}  disabled={formDisabled}/>
              </div>
              <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="agreement" checked={buyer.agreeWithRooles} onChange={handleAgreeValueChange}  disabled={formDisabled}/>
                  <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
              </div>
              <button type="submit" className="btn btn-outline-secondary" onClick={handleSubmitClick} disabled={ !canOrder || formDisabled }>Оформить</button>
          </form>
      </div>       
    </React.Fragment>
  );
}

export default CartSendForm;