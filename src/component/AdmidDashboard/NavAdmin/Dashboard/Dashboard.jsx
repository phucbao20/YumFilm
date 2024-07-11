import React, { useRef, useEffect, useState } from 'react';
import './Dashboard.scss'
import MenuDashboard from '../../MenuAdmin/MenuDashboard';
import FooterAdminDashboard from '../../FooterAdmin/FooterAdminDashboard'

import { BiCameraMovie, BiFullscreen } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiPushPinBold } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area } from 'recharts';

function Dashboard() {
    const formatYAxis = (tickItem) => {
        // Định dạng giá trị trục y thành dạng triệu (M)
        return (tickItem / 1000000) + 'M';
    };
    const formatTooltip = (value) => {
        // Định dạng giá trị thành tiền tệ VND
        // return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        return new Intl.NumberFormat('vi-VN').format(value) + ' VND';

      };

    const data = [
        {
            "name": "Jan",
            "total": 4230000,
            "ticket": 387,
        },
        {
            "name": "Feb",
            "total": 3000000,
            "ticket": 225,

        },
        {
            "name": "Mar",
            "total": 2000000,
            "ticket": 144,

        },
        {
            "name": "Apr",
            "total": 2780000,
            "ticket": 225,

        },
        {
            "name": "May",
            "total": 1890000,
            "ticket": 87,

        },
        {
            "name": "Jun",
            "total": 2390000,
            "ticket": 130,

        },
        {
            "name": "Jul",
            "total": 3490000,
            "ticket": 224,

        },
        {
            "name": "Aug",
            "total": 5190000,
            "ticket": 412,

        },
        {
            "name": "Sep",
            "total": 6590000,
            "ticket": 338,

        },
        {
            "name": "Oct",
            "total": 15460000,
            "ticket": 865,

        },
        {
            "name": "Nov",
            "total": 34510000,
            "ticket": 3001,

        },
        {
            "name": "Dec",
            "total": 1150000,
            "ticket": 804,

        }
    ]
    return (
                <div className='w-full p-2 '>
                    <div className='YumFilm-Dashboard flex *:flex *:items-center mb-4 justify-between'>
                        <div >
                            <h3 className='Dashboard-Title m-auto'>YumFilm Dashboard</h3>
                        </div>
                        <div className='button-report justify-end'>
                            <button className='button-report-title '>Report</button>
                        </div>
                    </div>
                    <div className='flex *:me-4 *:mb-4'>
                        <div className='card-nav w-2/12'>
                            <div className='card-body p-3 items-center'>
                                <p className='card-title '>FILM</p>
                                <div className=' flex'>
                                    <span className='listFilm items-center flex'>
                                        35 <BiCameraMovie className='ms-3 ' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='card-nav w-4/12'>
                            <div className='card-body p-3 items-center'>
                                <p className='card-title '>REVENUE</p>
                                <div className=' flex'>
                                    <span className='listFilm items-center flex'>
                                    5.541.130.000 VND <RiMoneyDollarCircleLine className='ms-3 ' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='card-nav w-1/4'>
                            <div className='card-body p-3 items-center'>
                                <p className='card-title '>TOTAL INVOICE</p>
                                <div className=' flex'>
                                    <span className='listFilm items-center flex'>
                                        667 <PiPushPinBold className='ms-3 ' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='card-nav w-1/4'>
                            <div className='card-body p-3 items-center'>
                                <p className='card-title'>TOTAL TICKET</p>
                                <div className=' flex'>
                                    <span className='listFilm items-center flex'>
                                        300 <IoTicketOutline className='ms-3 ' /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex *:me-4 *:mb-4'>
                        <div className='card-chart bg-white w-1/2 p-2 items-center text-center' >
                            {/* ref={chartContainerRef} */}
                            <span>Revenue of 2023</span>

                            <ResponsiveContainer width="100%" height="95%">
                                <BarChart
                                    // width={300}
                                    // height={300}
                                    data={data}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    {/* Chỉnh định dạng của trục X */}
                                    <XAxis dataKey="name"
                                    // label={{ value: 'Month', position: 'insideRight', offset: 10 }}
                                    />
                                    {/* <XAxis dataKey="name" angle={-45} textAnchor="end" /> */}

                                    <YAxis tickFormatter={formatYAxis}
                                        // Thêm tiêu đề cho trục Y
                                        label={{ value: 'Million VND (M)', angle: -90, position: 'insideLeft' }}
                                    />
                                    {/* <YAxis /> */}
                                    <Tooltip formatter = {formatTooltip}/>
                                    <Legend />
                                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                                    <Bar dataKey="total" fill="#011f8e" activeBar={<Rectangle fill="gold" stroke="purple" />} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='card-chart bg-white w-1/2  items-center text-center'>
                            <span>Ticket of 2023</span>

                            <ResponsiveContainer width="95%" height="95%">
                                <AreaChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis
                                        label={{ value: 'Ticket', angle: -90, position: 'insideLeft' }}
                                    />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="ticket" stroke="#011f8e" fill="#fff200" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='flex *:me-4 *:mb-4'>

                        <div className='card-table h-full w-full'>
                            <div className='p-3 w-full'>
                                <p>Top Film</p>
                                <table className='table table-hover w-full'>
                                    <thead className=''>
                                        <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300 '>
                                            <th>No.</th>
                                            <th>Film Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Ticket</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className='*:hover:bg-gray-300 '>
                                        <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                                            <td>1</td>
                                            <td>Cửu Long Thành Trại</td>
                                            <td><img src='https://cdn.galaxycine.vn/media/2024/6/3/cuu-long-thanh-trai-vay-thanh-1_1717402596500.jpg'></img></td>
                                            <td>100.000 VND</td>
                                            <td>154</td>
                                            <td>15.400.000 VND</td>
                                        </tr>
                                        <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                                            <td>2</td>
                                            <td>Lật Mật 7</td>
                                            <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQsL00eLdJUn43GFPiJr0TeWHuFhsYpP72JgXswqlktdy_J1_57cGFQPFfHdhlWX17qk&usqp=CAU'></img></td>
                                            <td>100.000 VND</td>
                                            <td>154</td>
                                            <td>15.400.000 VND</td>
                                        </tr>
                                        <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                                            <td>3</td>
                                            <td>Mèo Béo Siêu Quậy</td>
                                            <td><img src='https://cdn.galaxycine.vn/media/2024/5/27/garfield-1_1716798361490.jpg'></img></td>
                                            <td>100.000 VND</td>
                                            <td>154</td>
                                            <td>15.400.000 VND</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                    {/* <FooterAdminDashboard /> */}

                </div>
)
}

export default Dashboard