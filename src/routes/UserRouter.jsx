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
            <Route path='/' element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Conten/:filmId" element={<Conten />}></Route>
            <Route path="/FilmDetail/:filmId" element={<FilmDetail />}></Route>
            <Route path="/Conten/payment/:filmId" element={<Payment/>}></Route>
            <Route path="/Conten/booking/payment-status" element={<PaymentStatus/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRouter