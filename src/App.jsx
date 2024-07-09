
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Conten from './components/Conten/Conten'
const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Conten />
      {/* <FoodOrder /> */}
      <Footer />

   
    </div>
  )
}

export default App