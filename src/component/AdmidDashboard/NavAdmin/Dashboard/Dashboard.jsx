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

import { getAllInvoice, getAllTicket, getCountFilm, getRevenueFilm, getTop5Film, getTotalAndTicketYear2023 } from '../../../../service/adminService';

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
    const [totalAndTicket, setTotalAndTicket] = useState([]);
    const [countFilm, setCountFilm] = useState("");
    const [revenueFilm, setRevenueFilm] = useState("");
    // định dạng tiền tệ thành VN nếu null hoặc undefined thì trả ra 0
    const formattedRevenueFilm = revenueFilm ? revenueFilm.toLocaleString('vi-VN') : '0';
    const [allInvoice, setAllInvoice] = useState("");
    const [allTicket, setAllTicket] = useState("");
    const [top5Film, setTop5Film] = useState([]);
    // getCountFilm
    useEffect(() => {
        getCountFilm()
            .then((response) => {
                setCountFilm(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // getRevenueFilm
    useEffect(() => {
        getRevenueFilm()
            .then((response) => {
                setRevenueFilm(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // getAllInvoice
    useEffect(() => {
        getAllInvoice()
            .then((response) => {
                setAllInvoice(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // getAllTicket
    useEffect(() => {
        getAllTicket()
            .then((response) => {
                setAllTicket(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // getTotalAndTicketYear2023
    useEffect(() => {
        getTotalAndTicketYear2023()
            .then((response) => {
                setTotalAndTicket(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // getTop5Film
    useEffect(() => {
        getTop5Film()
            .then((response) => {
                setTop5Film(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    },[])
    // Hàm định dạng số thành chuỗi tiền tệ
    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number) + ' VND';
    };
    // console.log(top5Film);
    return (
        <div className='w-full p-2 '>
            <div className='YumFilm-Dashboard flex *:flex *:items-center mb-4 justify-between'>
                <div >
                    <h3 className='Dashboard-Title m-auto'>YumFilm Dashboard</h3>
                </div>
                
            </div>
            <div className='flex *:me-4 *:mb-4'>
                <div className='card-nav w-2/12'>
                    <div className='card-body p-3 items-center'>
                        <p className='card-title '>FILM</p>
                        <div className=' flex'>
                            <span className='listFilm items-center flex'>
                                {countFilm} <BiCameraMovie className='ms-3 ' /></span>
                        </div>
                    </div>
                </div>
                <div className='card-nav w-4/12'>
                    <div className='card-body p-3 items-center'>
                        <p className='card-title '>REVENUE</p>
                        <div className=' flex'>
                            <span className='listFilm items-center flex'>
                                {formattedRevenueFilm} VND <RiMoneyDollarCircleLine className='ms-3 ' /></span>
                        </div>
                    </div>
                </div>
                <div className='card-nav w-1/4'>
                    <div className='card-body p-3 items-center'>
                        <p className='card-title '>TOTAL INVOICE</p>
                        <div className=' flex'>
                            <span className='listFilm items-center flex'>
                                {allInvoice} <PiPushPinBold className='ms-3 ' /></span>
                        </div>
                    </div>
                </div>
                <div className='card-nav w-1/4'>
                    <div className='card-body p-3 items-center'>
                        <p className='card-title'>TOTAL TICKET</p>
                        <div className=' flex'>
                            <span className='listFilm items-center flex'>
                                {allTicket} <IoTicketOutline className='ms-3 ' /></span>
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
                            data={totalAndTicket}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* Chỉnh định dạng của trục X */}
                            <XAxis dataKey="monthName"
                            // label={{ value: 'Month', position: 'insideRight', offset: 10 }}
                            />
                            {/* <XAxis dataKey="name" angle={-45} textAnchor="end" /> */}

                            <YAxis tickFormatter={formatYAxis}
                                // Thêm tiêu đề cho trục Y
                                label={{ value: 'Million VND (M)', angle: -90, position: 'insideLeft' }}
                            />
                            {/* <YAxis /> */}
                            <Tooltip formatter={formatTooltip} />
                            <Legend />
                            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                            <Bar dataKey="total" fill="#011f8e" activeBar={<Rectangle fill="gold" stroke="purple" />} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='card-chart bg-white w-1/2  items-center text-center'>
                    <span>Ticket of 2023</span>

                    <ResponsiveContainer width="95%" height="95%">
                        <AreaChart data={totalAndTicket}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monthName" />
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
                        <p>Top 5 Film</p>
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
                                {top5Film.map((film, index) => (
                                    <tr className='*:py-2 *:px-4 *:border-b *:border-gray-300'>
                                        <td>{index + 1}</td>
                                        <td>{film.filmName}</td>
                                        <td><img src={`../src/image/${film.filmImage}`}></img></td>
                                        <td>{formatCurrency(film.price)}</td>
                                        <td>{film.ticket}</td>
                                        <td>{formatCurrency(film.total)}</td>
                                    </tr>
                                ))}

                                
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