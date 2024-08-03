import React, { useEffect, useState } from 'react'
import './chartsAdmin.scss'
import MenuDashboard from '../../MenuAdmin/MenuDashboard';


import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { LineChart, Line } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { getTicketOfYear, getTotalAndTicketYear2024, getTotalOfYear } from '../../../../service/adminChartService';


function ChartsAdmin() {

    const formatYAxis = (tickItem) => {
        // Định dạng giá trị trục y thành dạng triệu (M)
        return (tickItem / 1000000) + 'M';
    };
    const formatTooltip = (value) => {
        // Định dạng giá trị thành tiền tệ VND
        // return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        return new Intl.NumberFormat('vi-VN').format(value) + ' VND';

    };
    const [totalAndTicket2024, setTotalAndTicket2024] = useState([]);
    const [ticketOfYear, setTicketOfYear] = useState([]);
    const [totalOfYear, setTotalOfYear] = useState([]);
    // getTotalAndTicketYear2024
    useEffect(() => {
        getTotalAndTicketYear2024()
            .then((response) => {
                setTotalAndTicket2024(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    // getTotalAndTicketYear
    useEffect(() => {
        getTicketOfYear()
            .then((response) => {
                setTicketOfYear(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    // getTotalOfYear
    useEffect(() => {
        getTotalOfYear()
            .then((response) => {
                setTotalOfYear(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div className='w-full p-2 '>


            <div className='flex *:me-4 *:mb-4'>
                <div className='card-chart bg-white w-1/2 p-2 items-center text-center' >
                    {/* ref={chartContainerRef} */}
                    <span>Ticket of 2024</span>

                    <ResponsiveContainer width="95%" height="90%">
                        <LineChart
                            width={500}
                            height={300}
                            data={totalAndTicket2024}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monthName" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ticket" stroke="#0000ff" activeDot={{ r: 6 }} />
                            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='card-chart bg-white w-1/2  items-center text-center'>
                    <span>Revenue of 2024</span>

                    <ResponsiveContainer width="95%" height="90%">
                        <BarChart
                            // width={300}
                            // height={300}
                            data={totalAndTicket2024}
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
            </div>
            <div className='flex *:me-4 *:mb-4'>
                <div className='card-chart bg-white w-1/2 p-2 items-center text-center' >
                    {/* ref={chartContainerRef} */}
                    <span>Ticket</span>

                    <ResponsiveContainer width="95%" height="95%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ticketOfYear}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="monthName" />
                            <PolarRadiusAxis angle={30}  />
                            <Radar name="year2023" dataKey="year2023" stroke="#0000ff" fill="#0000ff" fillOpacity={0.6} />
                            <Radar name="year2024" dataKey="year2024" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <div className='card-chart bg-white w-1/2  items-center text-center'>
                    <span>Revenue</span>
                    <ResponsiveContainer width="95%" height="90%">
                        <LineChart
                            width={500}
                            height={300}
                            data={totalOfYear}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="monthName" />
                            <YAxis tickFormatter={formatYAxis} />
                            <Tooltip formatter={formatTooltip} />
                            <Legend />
                            <Line type="monotone" dataKey="year2023" stroke="#0000ff" activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="year2024" stroke="#ff0000" />
                        </LineChart>
                    </ResponsiveContainer>
                    
                </div>
            </div>
            {/* <FooterAdminDashboard /> */}

        </div>

    )
}

export default ChartsAdmin