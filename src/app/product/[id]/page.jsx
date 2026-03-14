"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Page() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const fetchProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
    };

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);


    if (!product) {
        return <p className="p-20">Loading...</p>
    }
    return (
         <div className=" flex justify-center items-center max-w-[1720px] mx-auto  ">
            <Link href={`/`} >
                <div className="xl:max-w-[650px] flex items-center flex-col  shadow-2xl text-black rounded-2xl py-4 px-6 mt-10 border-2 border-blue-500 mx-20">

                <img src={product.images[0]}
                    className="w-[270px]" />
                <h1 className="text-2xl font-bold mb-5 text-center"> {product.title} </h1>


                <p>{product.description}</p>
                <div className="w-full">
                    <p className="mt-3"><span className="font-bold">Price:</span> ${product.price}</p>
                    <p><span className="font-bold">Category: </span>{product.category}</p>
                    <p className="font-semibold"><span className="font-bold">Rating:</span> {product.rating}</p>
                    <p><span className="font-bold">Stock:</span> {product.stock}</p>
                </div>
                <Link href={`/`} >
                    <button className=' items-center bg-blue-500 border-2 text-white transition-transform ease-in-out duration-300 hover:scale-101  mt-3 cursor-pointer py-2 px-4 rounded-xl'>Back to Home</button>

                </Link>

            </div>
            </Link>
           
        </div>
    );
}