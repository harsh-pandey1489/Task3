"use client"
import React, { useContext } from 'react'
import { ProductContext } from "@/context/ProductContext";

const Dashboard = () => {
  const { setCategory, product, setSort } = useContext(ProductContext)
  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handlesort = (e) => {
    setSort(e.target.value)
  }
  const selectdata = [...new Set(product.map((item) => item.category))]
  return (
    <section className='max-w-[1720px ] z-10 fixed mx-auto '>
      <div className="w-80 bg-gray-100 flex flex-col items-center h-screen py-3">
        <h2 className="font-bold text-2xl mb-10 py-4 bg-gray-600 w-full text-center text-white">Dashboard</h2>

        <div className="space-y-3 text-xl border-2 rounded bg-gray-100 border-blue-500 p-6 mx-2 ">

          <h1 className='text-center  font-semibold text-blue-500 text-sm mb-2'>Sort Product </h1>
          <select
            onChange={handleChange}
            className="w-full text-blue-700 p-3 border rounded-md  text-lg cursor-pointer  border-blue-500 outline-none "
          >
            <option value='all'>All</option>
            {
              selectdata.map((item) => (
                <option key={item} value={item} >{item.toUpperCase()}</option>
              ))
            }
          </select>

          <div className=' mt-4 '>

            <select
              onChange={handlesort}
              className="w-full p-3 border text-blue-700 rounded-md text-lg cursor-pointer  border-blue-500 outline-none "
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title-asc">Title: A-Z</option>
              <option value="title-desc">Title: Z-A</option>

            </select>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Dashboard
