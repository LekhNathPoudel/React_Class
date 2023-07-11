import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
 
 const{title,price,image,id}=props.item
 
  // const data=props.item
  return (
    <>
    
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,20)}...</h5>
        <h5 className="card-title">${price}</h5>

        <Link to={`/productdetails/${id}`} className='btn btn-success'>View Details</Link>
             </div>
    </div>
  </div>
  

    
    </>
  )
}

export default Card