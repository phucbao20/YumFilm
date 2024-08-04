import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const LayoutPage = ({props}) => {
  let role = props.role
  console.log(role);
  
  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar props={{role}} />
        <Outlet/>
      <Footer />
    </div>
  )
}

export default LayoutPage
