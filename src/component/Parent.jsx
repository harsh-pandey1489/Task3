"use client"

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { ProductContext } from "@/context/ProductContext";

export default function Parent({ children }) {

  const [product, setproduct] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort,setSort]=useState("default")

  const fetchData = async () => {
    const response =await fetch("https://dummyjson.com/products");
    const data =await response.json();
    setproduct(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterdata = product
    .filter((item)=>category==="all"||item.category===category)
    .filter((item)=>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    let sortedData = [...filterdata];

if (sort==="price-low"){
  sortedData.sort((a,b)=>a.price-b.price);
}

if (sort==="price-high"){
  sortedData.sort((a,b)=>b.price-a.price);
}
if (sort === "title-asc") {
  sortedData.sort((a,b)=>a.title.localeCompare(b.title));
}

if (sort === "title-desc") {
  sortedData.sort((a,b)=>b.title.localeCompare(a.title));
}

  return (

    <ProductContext.Provider
      value={{
        filterdata:sortedData,
        setCategory,
        search,
        setSearch,
        product,
        setSort
      }}
    >

      <Navbar  />

      <div className="pt-[100px] relative">

        <div className="hidden md:block">
          <Dashboard  />
        </div>

        <div className="md:ml-80">
          {children}
        </div>

      </div>

    </ProductContext.Provider>
  );
}