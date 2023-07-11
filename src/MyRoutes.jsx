import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import Layout from './componatnts/Layout'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import IncrementDecrement from './hooks/IncrementDecrement'

import Datafetch from './hooks/Datafetch'
import Effect from './hooks/Effect'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import TestNav from './redux/TestNav'






const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='products'element={<Products/>}/>
                <Route path='productdetails/:productId' element={<ProductDetails/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='signup'element={<Register/>}/>
                
                


            </Route>
            <Route path='/hooks/first'element={<IncrementDecrement/>}/>
            <Route path='hooks/third' element={<Datafetch/>}/>
            <Route path='hooks/sec' element={<Effect/>}/>
            <Route path='context/show'element={<Show/>}/>
            <Route path='redux/cart'element={<TestNav/>}/>
           
           
            
           
           
           
        </Routes>
    
    
    </Router>
  )
}

export default MyRoutes