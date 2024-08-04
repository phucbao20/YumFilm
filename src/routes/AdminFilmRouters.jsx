import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import FilmDetail from '../components/FilmDetail/FilmDetail'
// import FilmDetailAdmin from '../component/FilmDetailAdmin/FilmDetailAdmin'
import FilmDetail from '../component/FilmDetailAd/FilmDetail'
import FilmDetailAdmin from '../component/FilmDetailAdmin/FilmDetailAdmin'
// import FilmDetailAdmin from '../component/FilmDetailAdmin/FilmDetailAdmin'
const AdminFilmRouters = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<FilmDetail />} />
        <Route path='Login' element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/film/:filmId" element={<FilmDetailAdmin />} />
        <Route path="/film/create" element={<FilmDetailAdmin />} />
      </Route>
    </Routes>
    </>
  )
}

export default AdminFilmRouters