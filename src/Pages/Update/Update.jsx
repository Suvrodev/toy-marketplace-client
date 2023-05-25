import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const Update = () => {
    useTitle('Update Toy')
    const {user}=useContext(AuthContext)
    const [toy,setToy]=useState("")
    const {id}=useParams()
   // console.log(id)
 
  

   useEffect(()=>{
    fetch(`https://toy-marketplace-server-rho.vercel.app/alltoys/${id}`)
    .then(res=>res.json())
    .then(data=>setToy(data))
   },[])

  //  console.log(toy)
    const {_id,toyPhoto,toyName,seller_name,subcategory,price,available_quantity,seller_email,details,ratting}=toy;

    // console.log(id)
    // console.log(_id)
    const [category,setCategory]=useState('jungleToy')

    const handleCategory=(event)=>{
        setCategory(event.target.value)
        console.log(event.target.value)
    }

    const handleUpdateToy=(event)=>{
        event.preventDefault();
        console.log('Update')
        const form=event.target;
        const toyName=form.name.value;
        const toyPhoto=form.photo.value;
        const seller_name=form.sellerName.value;
        const seller_email=form.sellerEmail.value;
        const subcategory=category;
        const price=parseFloat(form.price.value);
        const ratting=form.ratting.value;
        const available_quantity=form.availableQuantity.value;
        const details=form.details.value;
    
        const Toys={
           ref_mail: user?.email,
           toyName,toyPhoto,seller_name,seller_email,subcategory,price,ratting,available_quantity,details
        }
    
        console.log(Toys)

        fetch(`https://toy-marketplace-server-rho.vercel.app/mytoys/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(Toys)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    return (
        <div>
        <form onSubmit={handleUpdateToy} className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Toy Name</span>
                        </label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        defaultValue={toyName}
                        />
                    </div>

                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Photo url</span>
                        </label>
                        <input
                        type="url"
                        name="photo"
                        placeholder="Photo url"
                        className="input input-bordered"
                        defaultValue={toyPhoto}
                        />
                    </div>

                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Seller Name</span>
                        </label>
                        <input
                        type="text"
                        name="sellerName"
                        placeholder="Seller Name"
                        className="input input-bordered"
                        defaultValue={seller_name}
                        />
                    </div>

                  
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Seller Email</span>
                        </label>
                        <input
                        type="email"
                        name="sellerEmail"
                        placeholder="Email"
                        className="input input-bordered"
                        defaultValue={seller_email}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Sub Category</span>
                        </label>

                        <select value={category} onChange={handleCategory} className='input'>
                         <option value="jungleToy">Jungle Toy</option>
                         <option value="seaToy"> Sea Toy</option>
                         <option value="flyingToy">Flying Toy</option>
                      </select>

                </div>
                    
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Price</span>
                        </label>
                        <input
                        type="number"
                        name="price"
                        className="input input-bordered"
                        placeholder='Price'
                        defaultValue={price}
                        />
                </div>
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Ratting</span>
                        </label>
                        <input
                        type="number"
                        step="0.01"
                        name="ratting"
                        placeholder="Ratting"
                        className="input input-bordered"
                        defaultValue={ratting}
                        max={5}
                        />

                    </div>
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                        type="number"
                        name="availableQuantity"
                        placeholder="Available Quantity"
                        className="input input-bordered"
                        defaultValue={available_quantity}
                        />

                    </div>
                 
            </div>

            <div className="mt-5 form-control">
                <label className="label">
                    <span className="label-text">Detail Description</span>
                </label>

                <textarea name="details" 
                defaultValue={details}
                rows="10"
                className="w-full resize-none rounded-lg ps-5 pt-5">
                </textarea>
            </div>
                <div className="form-control mt-6">
                    <input className="bg-orange-700 btn btn-block" type="submit" value="Update Toy" />
                </div>
        </form>
           
    </div>
    );
};

export default Update;