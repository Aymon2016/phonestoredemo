import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
import Home from '../src/components/home/Home'
import Category from '../src/components/category/Category'
import SingleProduct from '../src/components/singleProduct/SingleProduct'
import NewsLetter from '../src/components/footer/newsletter/NewsLetter'
import AppContext from './utilis/context'
import Registration from './components/user/registraion'


const App = () => {
  return (
    <BrowserRouter>
      <AppContext >
        <Headers />
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  )
}

export default App