import React, { useContext } from 'react'
import { ProductContext } from "@/context/ProductContext";

const Dashboard = () => {
 const { setCategory,product }=useContext(ProductContext)
     const handleChange = (e) => {
    setCategory(e.target.value)
  }
  const selectdata=[...new Set(product.map((item)=>item.category))]
  return (
    <section className='max-w-[1720px ] z-10 fixed mx-auto '>
       <div className="w-80 bg-gray-100 flex flex-col items-center h-screen py-3">
      <h2 className="font-bold text-2xl mb-10 py-4 bg-gray-600 w-full text-center text-white">Dashboard</h2>

      <div className="space-y-3 text-xl">
      <select 
            onChange={handleChange}
            className="w-full p-3 border rounded-md  text-lg cursor-pointer  border-blue-500 outline-none "
          >
            <option>All</option>
           {
            selectdata.map((item)=>(
                <option key={item} value={item} >{item.toUpperCase()}</option>
            ))
           }
          </select>

      </div>
    </div>
    </section>
  )
}

export default Dashboard
