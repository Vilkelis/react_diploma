import React from 'react'; 
import CartItem from './CartItem';
import { formatSum } from '../lib/tools';
 
function CartItems(props) { 
  const { items , totalSum, deleteItemsDisabled, handleItemDelete } = props;
  return (     
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        { items.map( (o, index) => <CartItem key={o.item.id + o.size}
                                              no={index + 1}
                                              item={o} 
                                              deleteDisabled={deleteItemsDisabled}
                                              handleDelete={handleItemDelete} /> ) } 
        <tr>
          <td colSpan="5" className="text-right">Общая стоимость</td>
          <td>{formatSum(totalSum)}</td>
        </tr>
      </tbody>
    </table>      
  );
}

export default CartItems;