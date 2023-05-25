import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({toy,handleDelete}) => {
  //  console.log(toy)
    const {_id,toyPhoto,toyName,seller_name,subcategory,price,available_quantity}=toy;

   
    return (
        <tr>
      <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {toyPhoto && <img src={toyPhoto}></img> }
            </div>
          </div>
      </td>
      <td>{seller_name}</td>
      <td>
        {toyName}
      </td>
      <td>{subcategory}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <th>
         <Link to={`/updatetoy/${_id}`}> <button className='btn bg-orange-300 text-black hover:text-white'>Update</button></Link>
      </th>
      <th>
        <button onClick={()=>handleDelete(_id)} className='btn bg-red-500'>Delete</button>
      </th>
    </tr>
    );
};

export default MyToysRow;