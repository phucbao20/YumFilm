import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FilmDetailAdmin from '../component/FilmDetailAdmin/FilmDetailAdmin'
import FilmDetail from '../component/FilmDetailAd/FilmDetailAd'

const AdminRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<FilmDetail />}></Route>
        <Route path="/film/:filmId" element={<FilmDetailAdmin />}></Route>
        <Route path="/film/create" element={<FilmDetailAdmin />}></Route>
    </Routes>
  )
}

export default AdminRouter
