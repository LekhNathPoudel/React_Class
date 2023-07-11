import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
const[products, setProduct]=useState([])
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
        console.log(res.data)
        setProduct(res.data)
    }

    )
    .catch(err=>console.log(err))

},[])


  return (
    <>
   {products.map((product,index)=>(
   
   <div key={index}>
    <h1>{product.title}</h1>
    <h3>${product.price}</h3>
    <h4>{product.rating.rate}</h4>
    <h4>{product.id}</h4>
   </div>
   
   ))}
   
    
        


    </>
  )
}

export default Datafetch