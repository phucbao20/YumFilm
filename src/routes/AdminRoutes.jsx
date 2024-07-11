import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../component/AdmidDashboard/AdminDashboard'
import TableAdmin from '../component/AdmidDashboard/NavAdmin/Table/TableAdmin'
import Dashboard from '../component/AdmidDashboard/NavAdmin/Dashboard/Dashboard'
import ChartsAdmin from '../component/AdmidDashboard/NavAdmin/Charts/ChartsAdmin'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminDashboard />}>
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/table' element={<TableAdmin />} ></Route>
                <Route path='/chart' element={<ChartsAdmin />} ></Route>
            </Route>
        </Routes>
    )
}

export default AdminRoutes