import React, { useEffect, useRef, useState } from 'react'
import "./FilmDetailAdmin.scss"
import { useParams } from 'react-router-dom'
import { createFilm, deleteFilm, getByIdFilmDetailAdmin, updateFilm } from '../../service/ADminFilmService'
import { getAllCountries } from '../../service/CountryService'
import { useForm } from 'react-hook-form'
const FilmDetailAdmin = () => {
    const [film, setFilm] = useState({})
    const [country, setCountry] = useState([])
    const { filmId } = useParams()

    const filmService = useRef()

    useEffect(() => {
        getByIdFilmDetailAdmin(filmId)
            .then(resp => {
                setFilm(resp.data)
                reset({
                    filmName: resp.data.filmName
                })
            })
            .catch(error => {
                console.log(error);

            })
    }, [filmId])

    useEffect(() => {
        getAllCountries(country)
            .then(resp => {
                setCountry(resp.data)
            })
            .catch(error => {
                console.log(error);

            })
    }, [filmId])

    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "all"
    })

    const onSubmit = (data) => {
        console.log(data)
        filmService.current(data)
    }

    const handleCreateFilm = () => {
        filmService.current = (data) => {
            createFilm(
                {
                    ...data, filmImage: "filmImage", videoTrailer: "abcccc"
                }
            )
                .then(resp => {
                    console.log(resp.data)
                })
                .catch(error => {
                    console.log(error);

                })
        }
    }

    const handleUpdateFilm = () => {
        filmService.current = (data) => {
            updateFilm(
                {
                    ...data,  filmImage: "filmImage", videoTrailer: "abcccc", filmId: filmId

                }
            )
                .then(resp => {
                    console.log(resp.data)
                })
                .catch(error => {
                    console.log(error);

                })
        }
        console.log(filmId)
    }

    const handleDeleteFilm = () => {
        deleteFilm(filmId)
    }



    return (
        <div className=' bg-slate-950'>

            <form onSubmit={handleSubmit(onSubmit)} className='FilmAdmin w-full h-full container py-5 flex'>
                {
                    film && (
                        <>
                            <div className='FilmAdmin-Left w-1/3 my-16 mx-10'>
                                <img className='Image-Film' src={`../src/image/${film.filmImage}`} alt="" />
                                <div className='Content-Input my-5'>
                                    <input className='Input-File' type="file" name="" id="" />
                                </div>
                            </div>
                            <div className='FilmAdmin-Right mx-20'>
                                <div className='Content flex *:mx-5'>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Tên phim</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="text"
                                                {...register("filmName", {
                                                    required: "film name is empty"
                                                })}
                                            />
                                        </div>
                                        {
                                            errors.filmName && <span className='text-red-700'>{errors.filmName.message}</span>
                                        }
                                    </div>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Năm sản xuất</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="date"
                                                {...register("yearProduction")}

                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='Content flex *:mx-5 py-3'>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Thời lượng phim</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="text"
                                                {...register("filmTime")}

                                            />
                                        </div>
                                    </div>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Đạo diễn</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="text"
                                                {...register("directorName")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='Content flex *:mx-5 py-3'>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Thể loại</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <textarea className='TextArea-Form p-2' name="" id="" {...register("filmType")}></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='Content-Right'>
                                            <label className='text-white py-2' htmlFor="">Thời gian công chiếu</label>
                                            <div className='Input-Content bg-slate-950'>
                                                <input className='Input p-2' type="date"
                                                    {...register("premiereDate")}
                                                />
                                            </div>
                                        </div>
                                        <div className='Content-Right'>
                                            <label className='text-white py-2' htmlFor="">Quốc gia</label>
                                            <div className='Input-Content bg-slate-950'>
                                                <select className='Input p-2' name="" id="" {...register("countryId")}>
                                                    {
                                                        country?.map(c =>
                                                            <option value={c.countryId}>{c.countryName}</option>
                                                        )
                                                    }
                                                </select>
                                                {/* <input className='Input p-2' type="text"
                                                    value={film.countryId} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='Content flex *:mx-5 py-3'>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Giá</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="text"
                                                {...register("price")}
                                            />
                                        </div>
                                    </div>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Độ tuổi</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <input className='Input p-2' type="text"
                                                {...register("age")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='Content flex *:mx-5 py-3'>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Diễn viên</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <textarea className='TextArea-Form p-2' name="" id="" {...register("actorName")}></textarea>
                                        </div>
                                    </div>
                                    <div className='Content-Right'>
                                        <label className='text-white py-2' htmlFor="">Nội dung phim</label>
                                        <div className='Input-Content bg-slate-950'>
                                            <textarea className='TextArea-Form p-2' name="" id="" {...register("description")}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='Button flex justify-between '>
                                    <button className='Button-Content text-white' type='submit' onClick={handleCreateFilm}>Thêm </button>
                                    <button className='Button-Content text-white' type='submit' onClick={handleUpdateFilm}>Sửa </button>
                                    <button className='Button-Content text-white' type='submit' onClick={handleDeleteFilm}>Xóa </button>
                                    <button className='Button-Content text-white'>Quay lại </button>
                                </div>

                            </div>

                        </>
                    )
                }
            </form>
        </div>
    )
}

export default FilmDetailAdmin