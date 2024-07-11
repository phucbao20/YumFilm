import React from 'react'
import "./Navbar.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='NavBar h-[3.75rem] w-full px-20 py-2 sticky-top z-50'>
      <div className='h-full w-full  flex justify-between'>
        <div className='image h-full'>
          <img className='h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQjDuRopnonYQ8arRpuS6JfND4BaWIesn_r2LnHhVFt27zDbH-d4y7bm3k70w82o1Zes&usqp=CAU" />
        </div>
        <div className=' h-full w-3/4 flex justify-between'>
          <div className='NavBar_Link h-full w-4/5 flex justify-evenly items-center *:px-2 *:py-1 *:font-semibold *:text-slate-500'>
            <a href='/'>Trang chủ</a>
            <Dropdown >
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='!bg-transparent !border-0'>
                Danh sách phim
              </Dropdown.Toggle>
              <Dropdown.Menu className='!bg-black'>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href='/Q&A'>Góc điện ảnh</a>
            <a href='/Contact'>Về chúng tôi</a>
          </div>
          <div className='NavBar-btn h-full w-1/5 *:px-4 *:py-2 flex justify-between *:rounded-full *:w-24 *:text-center'>
            <a href='/Login'>Login</a>
            <a href='/Singup'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar