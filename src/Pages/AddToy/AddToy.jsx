import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const AddToy = () => {
    useTitle('Add Toy')
    const {user}=useContext(AuthContext);

    const [category,setCategory]=useState('jungleToy')

    const handleCategory=(event)=>{
        setCategory(event.target.value)
        console.log(event.target.value)
    }

    const handleAddToy=event=>{
        event.preventDefault();
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
        fetch('https://toy-marketplace-server-rho.vercel.app/addtoy/',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Toys)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Toy Added Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    
      }

    return (
        <div>
        <form onSubmit={handleAddToy} className="p-10">
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
                        required
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
                        required
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
                        required
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
                        required
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
                        required
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
                        max={5}
                        required
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
                        required
                        />

                    </div>
                 
            </div>

            <div className="mt-5 form-control">
                <label className="label">
                    <span className="label-text">Detail Description</span>
                </label>

                <textarea name="details" 
                required
                rows="10"
                className="w-full resize-none rounded-lg ps-5 pt-5">
                </textarea>
            </div>
                <div className="form-control mt-6">
                    <input className="bg-orange-700 btn btn-block" type="submit" value="Add Toy" />
                </div>
        </form>
           
    </div>
    );
};

export default AddToy;