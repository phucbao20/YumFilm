import React from 'react'
import './HeaderAdminDashboard.scss'
import Dropdown from 'react-bootstrap/Dropdown'
import { Routes, Route, Link } from 'react-router-dom'
import AdminDashboard11 from '../AdminDashboard'; 

// import AdminDashboard from './AdminDashboard'

function HeaderAdminDashboard() {
    return (
        <div className='bg-gray-200 h-full'>
            <header className='bg-black '>
                <div className='flex justify-between h-20 '>
                    <div className='Logo flex w-32 items-center '>
                        <Link to="/home" className="header__logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
                                <g transform="translate(100, 100) rotate(-0.0663417)">
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
                                </g>
                            </svg>
                        </Link>
                    </div>

                    <div className='profiles flex items-center '>
                        <div className='container items-center '>
                            <ul className='items-center m-auto'>
                                <li >
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" className='text-white' id="dropdown-custom-components">
                                            <img className='avatar' src='https://toplist.vn/images/800px/son-ye-jin-482499.jpg'></img>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to="/profiles">Profiles</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item as={Link} to="/logout">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/* <Routes>
                    <Route path='/home' element={< AdminDashboard11 />} ></Route>
                    <Route path='/1' element={< AdminDashboard11 />} ></Route>
                </Routes> */}
            </header>
            
        </div>
    )
}

export default HeaderAdminDashboard