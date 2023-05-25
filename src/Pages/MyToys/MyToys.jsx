import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const {user}=useContext(AuthContext)
   // console.log(user.email)
    const [toys,setToys]=useState([])
    const [checkToys,setCheckToys]=useState(true)

    const [sorting,setSorting]=useState("")
    const ascending=()=>{
        setSorting(1)
    }
    const descending=()=>{
        setSorting(-1)
    }
    console.log('sorting: ',sorting)

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-rho.vercel.app/mytoys?ref_mail=${user.email}&srt=${sorting}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
           // console.log(data)
        })
    },[checkToys,sorting])

    // const handleDelete=(id)=>{
    //     const proceed=confirm('Are you sure want to delete?')
    //     if(proceed){
    //     fetch(`https://toy-marketplace-server-rho.vercel.app/mytoys/${id}`,{
    //         method: 'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.deletedCount){
    //             setCheckToys(!checkToys)
    //             console.log(data)
    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Delete Successfully',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             })
    //         }
    //     })
    //   }
    // }
    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-rho.vercel.app/mytoys/${id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                        setCheckToys(!checkToys)
                        console.log(data)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Delete Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }

          })
    }

    //console.log(toys)

    return (
        <div>
        <span className='font-extrabold text-white p-2 bg-green-600 rounded-md'>Toys Number: {toys.length} </span>
        <div className='flex gap-5 mb-10 mt-10'>
          <button onClick={ascending} className='btn'>Sort by Ascending</button>
          <button onClick={descending} className='btn'>Sort by Descending</button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className='text-center'>
              <tr>
                <th>Image</th>
                <th>Seller Name</th>
                <th>Toys Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {/* row 1 */}
              {
                  toys.map(toy=> <MyToysRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                  ></MyToysRow> )
              }
               
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;