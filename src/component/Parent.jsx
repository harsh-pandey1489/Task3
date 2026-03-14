"use client"

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { ProductContext } from "@/context/ProductContext";

export default function Parent({ children }) {

  const [product, setproduct] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

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

  return (

    <ProductContext.Provider
      value={{
        filterdata,
        setCategory,
        search,
        setSearch,
        product
      }}
    >

      <Navbar setCategory={setCategory} />

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