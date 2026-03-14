"use client"
import Compo from "@/component/Compo";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";


export default function Home() {

const { filterdata, search, setSearch } = useContext(ProductContext);
  return (
    <div>
     
        <div className="">
          <Compo setSearch={setSearch} search={search} product={filterdata} />
        </div>
      </div>
  
  );
}
