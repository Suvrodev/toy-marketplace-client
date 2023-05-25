import React, { useEffect, useState } from 'react';
import ToysRow from './ToysRow';
import useTitle from '../../Hooks/useTitle';

const ALlToys = () => {

    useTitle('All Toys')

    const [allToys,setAllToys]=useState([])
    const [totalProducts,setTotalProducts]=useState("")
  //  console.log('Total: ',totalProducts)

    ///Total Number Product start
    useEffect(()=>{
        fetch('https://toy-marketplace-server-rho.vercel.app/totaltoys')
        .then(res=>res.json())
        .then(data=>setTotalProducts(data.totalToys))
    },[])
    ///Total Number Product end

    const [currentPage,setCurrentPage]=useState(0)
    const itemsPerPage=20;
    const totalPages=Math.ceil(totalProducts/itemsPerPage)
    const pageNumber=[...Array(totalPages).keys()]
 
    // console.log({totalProducts})
    // console.log({itemsPerPage})
    // console.log({totalPages})
    // console.log({currentPage})

    

    ///Load All Toys start
    // useEffect(()=>{
    //     fetch('https://toy-marketplace-server-rho.vercel.app/alltoys')
    //     .then(res=>res.json())
    //     .then(data=>setAllToys(data))
    // },[])

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-rho.vercel.app/alltoys?page=${currentPage}&limit=${itemsPerPage}`)
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    },[currentPage,itemsPerPage])
    ///Load All Toys end

  


   ////Search operation start
   const [searchToys,setSearchToys]=useState([])
   const [checkSearch,setCheckSearch]=useState('')
   const [searchText,setSearchText]=useState('')
   const [searching,setSearching]=useState(false)

   const handleSearch=(event)=>{
    event.preventDefault()
    const form=event.target;
    setSearchText(form.search.value);
    setSearching(true)
    console.log(searchText)
    setCheckSearch(!checkSearch)
    console.log('checkSearch: ',checkSearch)

   }

  
    useEffect(()=>{
      fetch(`https://toy-marketplace-server-rho.vercel.app/searchtoy?toyName=${searchText}`)
      .then(res=>res.json())
      .then(data=>setSearchToys(data))
      .catch(err=>{
        setSearching(false)
      })
    },[checkSearch])
  

  
   
   

  
   ////Search operation end





    return (
        <div>
        <span className='font-extrabold text-white p-2 bg-green-600 rounded-md'> Toys Number: {totalProducts} </span>
        <div className='mb-10'>
            <form onSubmit={handleSearch}>
               <div className='flex gap-4 justify-center '>
                    <input type="text" name="search" className='w-1/3 rounded-lg ps-5 text-lg' placeholder='Case sensitive' />
                    <input className='btn' type="submit" value="Search" />
               </div>
            </form>
        </div>
        <div className="overflow-x-auto w-full text-center">
          <table className="table w-full">
            {/* head */}
            <thead className='text-center'>
              <tr>
                {/* <th>Image</th> */}
                <th>Seller Name</th>
                <th>Toys Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className='text-center'>
             
              {
                searching?
                searchToys.map(toy=> <ToysRow 
                key={toy._id}
                toy={toy}
                ></ToysRow> )

                :
                allToys.map(toy=> <ToysRow
                  key={toy._id}
                  toy={toy}
                  ></ToysRow> )
              }


              {/* {
                  allToys.map(toy=> <ToysRow
                  key={toy._id}
                  toy={toy}
                  ></ToysRow> )
              } */}
               
            </tbody>
          </table>
        </div>

        {/* <p>Pagination</p> */}
        <div className="pagination text-center mt-5">
            {
                pageNumber.map(number=> <button 
                    key={number} 
                    className={`btn ms-5 ${currentPage===number?'bg-green-600 text-white':''}`}
                    onClick={()=>setCurrentPage(number)}
                    >{number+1}</button> )
            }
        </div>
      </div>
    );
};

export default ALlToys;