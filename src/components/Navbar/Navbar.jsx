import React from 'react'
import "./Navbar.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
const Navbar = ({props}) => {
  let role = props.role;
  console.log(role);
  
  return (
    <div className='NavBar h-[3.75rem] w-full px-20 py-2 sticky-top z-50'>
      <div className='h-full w-full  flex justify-between'>
        {/* <div className='image h-full'>
          <img className='h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQjDuRopnonYQ8arRpuS6JfND4BaWIesn_r2LnHhVFt27zDbH-d4y7bm3k70w82o1Zes&usqp=CAU" />
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
                                <g transform="translate(100, 100) rotate(-0.0663417)">
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
                                </g>
                            </svg>
        </div> */}
        <div className='Logo flex w-32 items-center '>
          <Link to="/" className="header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
              <g transform="translate(100, 100) rotate(-0.0663417)">
                <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
              </g>
            </svg>
          </Link>
        </div>
        <div className=' h-full w-3/4 flex justify-between'>
          <div className='NavBar_Link h-full w-4/5 flex justify-evenly items-center *:px-2 *:py-1 *:font-semibold *:text-slate-500'>
            <Link to="/">Trang chủ</Link>
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
            {
              !role ? "" : 
              <a href='/dashboard'>Thống kê</a>
            }
          </div>
          <div className='NavBar-btn h-full w-1/5 *:px-4 *:py-2 flex justify-between *:rounded-full *:w-24 *:text-center'>
            <Link to="/Login">Login</Link>
            <Link to="/Signup">SingUp</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar