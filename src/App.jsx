import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { Features } from './components/Features'
import { Consultation } from './components/Consultation'
import { BestSelling } from './components/BestSelling'
import { Offer } from './components/Offer'
import { Whyme } from './components/Whyme'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Team } from './components/Team'
import { Product } from './components/Product'
import { ProductDetails } from './components/ProductDetails'
import CartSlice from './rtk/slices/productsSlice'
import { Cart } from './Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Slider />
            <Features />
            <Consultation />
            <BestSelling />
            <Offer />
            <Whyme />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <Navbar />
            <About />
            <Team />
            <Whyme />
            <Footer />
          </>
        } />
        <Route path='/product' element={
          <>
            <Navbar />
            <Product />
          </>
        } />
        <Route path='/product/:productId' element={
          <>
            <Navbar />
            <ProductDetails />
          </>
        } />
        <Route path='/cart' element={
          <>
            <Navbar />
            <Cart />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
