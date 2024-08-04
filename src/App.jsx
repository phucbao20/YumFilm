import React, { useEffect, useState } from 'react'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import Conten from './components/Conten/Conten'
import Payment from './components/Payment/Payment'
import PaymentStatus from './components/Payment/PaymentStatus'
import LayoutPage from './routes/LayoutPage'
import FilmDetail from './components/FilmDetail/FilmDetail'
import AdminRouter from './routes/AdminRouter'
import FilmDetailAd from './component/FilmDetailAd/FilmDetailAd'
import FilmDetailAdmin from './component/FilmDetailAdmin/FilmDetailAdmin'
import AdminDashboard from './component/AdmidDashboard/AdminDashboard'
import Dashboard from './component/AdmidDashboard/NavAdmin/Dashboard/Dashboard'
import TableAdmin from './component/AdmidDashboard/NavAdmin/Table/TableAdmin'
import ChartsAdmin from './component/AdmidDashboard/NavAdmin/Charts/ChartsAdmin'
import AdminRoutes from './routes/AdminRoute'
import { getRole } from './service/UserService'
import { FoodDetail } from './component/FoodDetail/FoodDetail'

const App = () => {
  let [role, setRole] = useState(false);
  useEffect(() =>{
    getRole()
    .then((resp) =>{
      console.log(resp);
      setRole(resp.data)
    })
    .catch((error) =>{
      console.log(error);
      // if( error.response.data.status == "404")
      //   Navigate("/Login")
    })
  },[])
  return (
    <Routes>
      <Route path='/' element={<LayoutPage props={{role}} />}>
        {
          role ?
            <>
              <Route index element={<FilmDetailAd />} />
              <Route path="/film/:filmId" element={<FilmDetailAdmin />} />
              <Route path="/film/create" element={<FilmDetailAdmin />} />
              
              <Route path="/food-detail/:id" element={<FoodDetail/>}/>
              <Route path="/food-detail" element={<FoodDetail/>}/>

              <Route path='/dashboard' element={<AdminDashboard />} >
                <Route index element={<Dashboard />} />
                <Route path='/dashboard/table' element={<TableAdmin />} />
                <Route path='/dashboard/chart' element={<ChartsAdmin />} />
              </Route>
            </>
            :
            <>
              <Route index element={<Home />} />
              <Route path="/Conten/:filmId" element={<Conten />} />
              <Route path="/FilmDetail/:filmId" element={<FilmDetail />} />
              <Route path="/Conten/payment/:filmId" element={<Payment />} />
              <Route path="/Conten/booking/payment-status" element={<PaymentStatus />} />
            </>
        }
        <Route path='/Login' element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App