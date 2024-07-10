import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Conten from './components/Conten/Conten'
import Payment from './components/Payment/Payment'
import FoodOrder from './components/FoodOrder/FoodOrder'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
const App = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Signup/>
      {/* <Login/> */}
      {/* <Payment /> */}
      {/* <FoodOrder /> */}
      <Footer />
 
    </div>
  )
}

export default App