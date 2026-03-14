 "use client"
 import React, { useState } from 'react'
 import Link from "next/link";

 const Compo = ({product,setSearch,search}) => {

  
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
        product.map((item)=>(
            

            <div key={item.id} className='p-5 border overflow-hidden xl:w-[300px] xl:h-[290px] w-[250px] h-[260px] flex items-center flex-col rounded-xl transition-transform ease-in-out duration-500 hover:scale-102 hover:border-2 hover:border-blue-600'>
                
                  <div className='w-[120px] h-[120px]'>
                    <img  className='object-cover ' src={item.images[0]}/>
                </div>
                   <h1 className='text-lg font-semibold text-center mt-auto '>{item.title}</h1>
                     <Link href={`/product/${item.id}`} >
                     <button className='bg-blue-500 text-white transition-transform ease-in-out duration-300 hover:scale-101  mt-3 cursor-pointer py-2 px-4 rounded-xl'>Read More</button>
                     </Link>
               
            </div>
         
        ))
       }
        </div>
     </div>
   )
 }
 
 export default Compo
 