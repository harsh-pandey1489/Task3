 "use client"
 import React, { useContext, useState } from 'react'
 import Link from "next/link";
import { ProductContext } from '@/context/ProductContext';

 const Compo = () => {
 const {setSearch,search, sortedData,}=useContext(ProductContext);

  
   return (
     <div className='max-w-[1720px] mx-auto flex flex-col items-center justify-center py-20'>
        
        <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="border p-3 w-[300px] rounded-lg outline-none focus:border-blue-500 mb-10"
  />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mx-20 gap-6 justify-center items-center'>
       {
        sortedData?.map((item)=>(
            
  <Link key={item.id} href={`/product/${item.id}`} >
            <div  className='border overflow-hidden xl:w-[300px] xl:h-[300px] w-[250px] h-[290px] flex items-center flex-col rounded-xl transition-transform ease-in-out duration-500 hover:scale-102 hover:border-2 hover:border-blue-600'>
                
                  <div className='w-[120px] h-[120px]'>
                    <img  className='object-cover ' src={item?.images[0]}/>
                </div>
                 <div className='flex flex-col gap-2 px-2 w-full items-center h-[80px] mt-3 '>
                    <h1 className='text-lg font-semibold text-center w-[200px]  mt-auto '>{item?.title}</h1>
                   <p className='font-bold '><span className='font-bold text-violet-600'>Price :</span>{item?.price}</p>
                 </div>
                     <Link href={`/product/${item?.id}`} >
                     <button className='bg-blue-500  text-white transition-transform ease-in-out duration-300 hover:scale-101  mt-7 cursor-pointer py-2 px-4 rounded-xl'>Read More</button>
                     </Link>
               
            </div>
         </Link>
        ))
       }
        </div>
     </div>
   )
 }
 
 export default Compo
 