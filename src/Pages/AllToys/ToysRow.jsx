import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({toy}) => {
    //console.log(toy)
    const {_id,toyPhoto,toyName,seller_name,subcategory,price,available_quantity}=toy;
    return (
    <tr>
      {/* <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {toyPhoto && <img src={toyPhoto}></img> }
            </div>
          </div>
       
      </td> */}
      <td>{seller_name}</td>
      <td>
        {toyName}
      </td>
      <td>{subcategory}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>
      <th>
         <Link to={`/toydetails/${_id}`}> <button className='btn btn-primary '>Details</button></Link>
      </th>
    </tr>
    );
};

export default ToysRow;