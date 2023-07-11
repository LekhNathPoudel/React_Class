import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeCart = () => {
    const dispatch=useDispatch()
    const increase=()=>(
        dispatch({type:'Add_To_Cart'})
    )
const decrease=()=>(
  dispatch({type:'REMOVE_FROM_CART'})
)

  return (
    <>
    <div className="row d-flex justify-content-center">
      <div className="col-md-4">
        <button className='btn btn-primary'onClick={increase}>Add</button>
      </div>
      <div className="col-md-4">
        <button className='btn btn-danger'onClick={decrease}>Remove</button>
      </div>
      
    </div>

        
    </>
  )
}

export default ChangeCart