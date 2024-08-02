import React, { useEffect, useState } from 'react'
import "./FilmDetail.scss"

import { getAllFilmDetailAdmin } from '../../service/ADminFilmService'

const FilmDetail = () => {
    const [fimlDetailAdmin, setFilmDetailAdmin] = useState([]);

    useEffect(() => {
        getAllFilmDetailAdmin()
        .then((response) =>{
            console.log(response.data);
            setFilmDetailAdmin(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])


    return (
        <body className='w-full h-full bg-slate-800'>

            <nav className='w-full h-[100px] bg-black'>
                dadasdasdas
            </nav>
            <hr className='HR-Month container' />


            <section className='Film w-full h-full'>
                <div className=' container'>
                    <h1 className=' text-white'>Danh Sách Phim</h1>
                </div>
                <div className='Film-Content container flex flex-wrap justify-between py-3 w-full h-full gap-y-8'>
                    {
                        fimlDetailAdmin.map((film) =>
                            <div className='Content-Left flex justify-end w-1/2 h-1/4 p-4'>
                                <div className='Image-Left'>
                                    <img className='Image-Film rounded' src={`../src/image/${film.filmImage}`} alt="" />
                                </div>
                                <div className='ContentBody-Left mx-3 w-[400px]'>
                                    <div>
                                        <h3 className='TitleFilm'>{film.filmName}</h3>
                                        <div className='Icon flex *:mx-2 text-white'>
                                            <p>{film.rate}</p>
                                            <p>HD</p>
                                            <p>{film.age}+  </p>
                                        </div>
                                        <div className='Genre py-2'>
                                            <span className='GenreFilm text-white'>hhhhhhhh</span>
                                        </div>
                                    </div>
                                    <div className='Mota py-2 pt-3 flex-1'>
                                        <div className='Description-Box w-full text-justify h-[170px]'>
                                            {film.description}
                                        </div>
                                    </div>
                                    <button className='Button btn  text-white w-[150px] self-end'>Chỉnh Sửa</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </body>
    )
}

export default FilmDetail