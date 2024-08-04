import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import Signup from '../components/SignUp/Signup'
import Conten from '../components/Conten/Conten'
import FoodOrder from '../components/FoodOrder/FoodOrder'
import FilmDetail from '../components/FilmDetail/FilmDetail'
import Payment from '../components/Payment/Payment'
import PaymentStatus from '../components/Payment/PaymentStatus'
const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path='Login' element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Conten/:filmId" element={<Conten />} />
          <Route path="/FilmDetail/:filmId" element={<FilmDetail />} />
          <Route path="/Conten/payment/:filmId" element={<Payment />} />
          <Route path="/Conten/booking/payment-status" element={<PaymentStatus />} />
        </Route>
      </Routes>
    </div>
  )
}

export default UserRouter