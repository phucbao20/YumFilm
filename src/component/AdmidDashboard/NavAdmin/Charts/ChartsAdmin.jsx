import React from 'react'
import './chartsAdmin.scss'
import MenuDashboard from '../../MenuAdmin/MenuDashboard';

import { BiCameraMovie, BiFullscreen } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiPushPinBold } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { LineChart, Line } from 'recharts';

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
const data1 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const data2 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
function ChartsAdmin() {



    return (
                    <div className='w-full p-2 '>


                        <div className='flex *:me-4 *:mb-4'>
                            <div className='card-chart bg-white w-1/2 p-2 items-center text-center' >
                                {/* ref={chartContainerRef} */}
                                <span>Line Chart</span>

                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data1}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='card-chart bg-white w-1/2  items-center text-center'>
                                <span>Bar chart</span>

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
                                <span>Line Chart</span>

                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data1}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='card-chart bg-white w-1/2  items-center text-center'>
                                <span>Area chart</span>

                                <ResponsiveContainer width="100%" height="90%">
                                    <AreaChart
                                        width={500}
                                        height={400}
                                        data={data2}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        {/* <FooterAdminDashboard /> */}

                    </div>

    )
}

export default ChartsAdmin