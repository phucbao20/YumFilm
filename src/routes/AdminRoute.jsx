import React from 'react'
import { Route, Routes,Navigate  } from 'react-router-dom'
import AdminDashboard from '../component/AdmidDashboard/AdminDashboard'
import TableAdmin from '../component/AdmidDashboard/NavAdmin/Table/TableAdmin'
import Dashboard from '../component/AdmidDashboard/NavAdmin/Dashboard/Dashboard'
import ChartsAdmin from '../component/AdmidDashboard/NavAdmin/Charts/ChartsAdmin'

const AdminRoutes = () => {
    return (
        // <>
        // </>
        <Routes>
            <Route path='/' element={<AdminDashboard />}>
                {/* <Route index element={<Navigate to="/dashboard" />} /> */}
                <Route index element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/table' element={<TableAdmin />} ></Route>
                <Route path='/chart' element={<ChartsAdmin />} ></Route>
                <Route path='/logout' element="" ></Route>
                <Route path='/profiles' element="" ></Route>
                <Route path='/home' element="" ></Route>
            </Route>
        </Routes>
    )
}

export default AdminRoutes