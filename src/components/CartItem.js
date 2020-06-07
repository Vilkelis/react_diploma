import React from 'react'; 
import {Link} from 'react-router-dom';
import { formatSum } from '../lib/tools';
 
function CartItem(props) {
  const { no, item, deleteDisabled, handleDelete } = props;

  const handleDeleteClick = (event) => {
    event.preventDefault();       
    handleDelete(item);
  } 

  return (    
    <tr>
      <th scope="row">{no}</th>
      <td><Link to={`/catalog/${item.item.id}`}>{item.item.title}</Link></td>
      <td>{item.size}</td>
      <td>{item.qty}</td>
      <td>{formatSum(item.item.price)}</td>
      <td>{formatSum(item.totalSum)}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteClick} disabled={deleteDisabled}>Удалить</button>
      </td>
    </tr>
  );
}

export default CartItem;