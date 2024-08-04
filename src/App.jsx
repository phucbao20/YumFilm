

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AdminFilmRouters from './routes/AdminFilmRouters'
import FilmDetail from './component/FilmDetailAd/FilmDetail'
import { Outlet } from 'react-router-dom'
// import Conten from './components/Conten/Conten'
// import Payment from './components/Payment/Payment'
// import FoodOrder from './components/FoodOrder/FoodOrder'
// import Login from './components/Login/Login'
// import Signup from './components/SignUp/Signup'
// import FilmDetail from './components/FilmDetail/FilmDetail'
// import UserRouter from './routes/UserRouter'
// import AdminFilmRouters from './routes/AdminFilmRouters'
const App = () => {
  return (

    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <AdminFilmRouters/>
      {/* <Outlet/> */}
      {/* <Conten /> */}
      {/* <FilmDetail /> */}

      {/* <FoodOrder /> */}
      <Footer />

    </div>

  )
}

export default App