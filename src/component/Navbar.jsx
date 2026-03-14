"use client"
import { ProductContext } from '@/context/ProductContext';
import React, { useContext, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const { setCategory }=useContext(ProductContext)
    const [hamOpen, setHambeger] = useState()

    return (
        <nav className='max-w-[1720px] w-full fixed z-50 mx-auto  '>
            <div className='flex flex-row justify-between items-center py-8 bg-gray-800'>
                <h1 className='text-white text-3xl font-bold ml-20'>Product</h1>
                <ul className='hidden md:flex flex-row gap-20 text-xl text-white mr-20'>
                    <li onClick={() => setCategory("all")} className="cursor-pointer"> All</li>

                    <li onClick={() => setCategory("beauty")} className="cursor-pointer">Beauty</li>
                    <li onClick={() => setCategory("fragrances")} className="cursor-pointer">Fragrances</li>
                    <li onClick={() => setCategory("furniture")} className="cursor-pointer">Furniture</li>
                    <li onClick={() => setCategory("groceries")} className="cursor-pointer">Groceries</li>
                </ul>

                <button
                    className="md:hidden text-white cursor-pointer mr-10 text-2xl "
                    onClick={() => setHambeger(!hamOpen)}
                >
                    {hamOpen ? <FiX /> : <FiMenu />}
                </button>

                {
                    hamOpen && (
                        <div
                            className={`md:hidden block fixed top-25 left-0 h-full w-80 bg-gray-100 transform transition-transform duration-300 
        ${hamOpen ? "translate-x-0" : "translate-x-90"}`}
                        >


                            <h2 className="font-bold text-2xl mb-10 py-4 bg-gray-600 w-full text-center text-white">
                                Dashboard
                            </h2>

                            <ul className="space-y-3 text-xl text-center">
                                <li onClick={() => { setHambeger(!hamOpen), setCategory("all") }} className="cursor-pointer"> All</li>
                                <li onClick={() => { setHambeger(!hamOpen), setCategory("beauty") }} className="cursor-pointer"> Beauty</li>
                                <li onClick={() => { setHambeger(!hamOpen), setCategory("fragrances") }} className="cursor-pointer">Fragrances</li>
                                <li onClick={() => { setHambeger(!hamOpen), setCategory("furniture") }} className="cursor-pointer">Furniture</li>
                                <li onClick={() => { setHambeger(!hamOpen), setCategory("groceries") }} className="cursor-pointer">Groceries </li>
                            </ul>
                        </div>
                    )
                }
            </div>



        </nav>
    )
}

export default Navbar
