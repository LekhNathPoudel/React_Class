import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardContainer = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{

const fetchData=async()=>{
    try{
        const response=await axios.get(`https://fakestoreapi.com/products`)
        setProducts(response.data)

    }
    catch(err){
        console.log(err)
    }
}

        // call the function fetchData
        fetchData()

    },[])
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">

{products.slice(0,8).map((product,index)=>(
    <Card item={product} key={index}/>
))}


        </div>
      </div>
    </>
  );
};

export default CardContainer;
