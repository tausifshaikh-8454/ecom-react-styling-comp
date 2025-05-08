import React, { useState } from 'react'
import { Routes, Route } from "react-router";
import Layout from './components/Layout'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import BlogPage from './Pages/Blogs/BlogPage';
import Error404Page from './Pages/404Page/Error404Page';
import Products from './Pages/Products_List/Products';
import CartPage from './Pages/Cart/CartPage';
import { ProdProvider } from './contexts/ProdProvider';
import ProductDetail from './Pages/Product_Detail/ProductDetail';

const App = () => {

  let products = useState([
    {
      id: 1,
      name: "MAGPOP Magnetic Phone Grip & Stand"
    },
    {
      id: 2,
      name: "SHADOW 5000mAh MagSafe Power Bank"
    }
  ])

  const addToCartFunc = () => {
    console.log('Added To CaRT')
  }

  const removeFromCartFunc = () => {
    console.log('Remove From CaRT')
  }

  return (
    <>

      <ProdProvider value={{ products, addToCartFunc, removeFromCartFunc }} >



        <Routes>

          <Route path='/' element={<Layout />}  >

            <Route index element={<HomePage />} />

            <Route path='/about-us' element={<AboutPage />} />

            <Route path='/blogs' element={<BlogPage />} />

            <Route path='/products' element={<Products />} />

            <Route path='/products/:slug' element={<ProductDetail />} />

            <Route path='/cart' element={<CartPage />} />

            <Route path='*' element={<Error404Page />} />

          </Route>

        </Routes>

      </ProdProvider>

    </>
  )
}

export default App