
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Conten from './components/Conten/Conten'
import FoodOrder from './components/FoodOrder/FoodOrder'
const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Conten />
      {/* <FoodOrder /> */}
      <Footer />
  )
}

export default App