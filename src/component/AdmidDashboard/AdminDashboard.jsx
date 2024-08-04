import React from 'react'
import HeaderAdminDashboard from './HeaderAdmin/HeaderAdminDashboard'
import Menu from './MenuAdmin/MenuDashboard'
import FooterAdminDashboard from './FooterAdmin/FooterAdminDashboard'

import MenuDashboard from './MenuAdmin/MenuDashboard'
import { Outlet } from 'react-router-dom'
import Dashboard from './NavAdmin/Dashboard/Dashboard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function AdminDashboard() {
  return (
    <>
          <div className='container-fluid h-full flex '>
            <MenuDashboard />
            <Outlet />
          </div>
    </>
  )
}

export default AdminDashboard