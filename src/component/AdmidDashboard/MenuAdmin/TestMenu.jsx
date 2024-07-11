import React from 'react'
import './MenuDashboard.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
function TestMenu() {
    return (
        <div className="dashboard-main-wrapper">


            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a className=" active" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1"><i className="fa fa-fw fa-user-circle"></i>Dashboard </a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2"><i className="fa fa-fw fa-rocket"></i>UI Elements</a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-fw fa-chart-pie"></i>Chart</a>

                                </li>
                                <li className="nav-item ">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4"><i className="fab fa-fw fa-wpforms"></i>Forms</a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5"><i className="fas fa-fw fa-table"></i>Tables</a>

                                </li>

                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-6" aria-controls="submenu-6"><i className="fas fa-fw fa-file"></i> Pages </a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-7" aria-controls="submenu-7"><i className="fas fa-fw fa-inbox"></i>Apps </a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8"><i className="fas fa-fw fa-columns"></i>Icons</a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9"><i className="fas fa-fw fa-map-marker-alt"></i>Maps</a>

                                </li>
                                <li className="nav-item">
                                    <a className="" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-10" aria-controls="submenu-10"><i className="fas fa-f fa-folder"></i>Menu Level</a>

                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className='sidebar w-1/6'>
                        <ul className=' mt-2 ms-1 me-1 *:mb-1'>
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlineSpaceDashboard className='me-3' /> Dashboard</span>
                            </Link></li>

                            <li><Link to='#'>
                                <span className='flex items-center'><FaTable className='me-3' /> Table</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><FaChartBar className='me-3' /> Chart</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                            </Link></li>
                            <li><Link to='#'>
                                <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                            </Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>

    )
}

export default TestMenu