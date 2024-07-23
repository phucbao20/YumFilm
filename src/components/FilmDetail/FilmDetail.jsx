
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { ngoidenkiquai } from '../../image'
import { Link } from 'react-router-dom'
import { getFilmDetailById } from '../../service/FilmDetail'
const FilmDetail = () => {

    const [filmDetail, setFilmDetail] = useState([])

    useEffect(() => {
        getFilmDetailById(1)
            .then((re) => {
                setFilmDetail(re.data)
                console.log(re.data)
            }).catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <section>
            <Container className='my-3'>
                {
                    filmDetail.map((filmDetail) =>
                        <div key={filmDetail[0]}>
                            <div>
                                <div >

                                </div>
                            </div>
                            <section className='row'>
                                <article className='col-4 bg-slate-500'>
                                    <div className='w-full'>
                                        <img src={`./images/${filmDetail[2]}`}></img>
                                    </div>
                                </article>
                                <aside className='col-8 bg-red-400'>
                                    <ul class="list-none">
                                        <li>
                                            <span className='me-3'>Thể loại: {filmDetail[4]}</span>
                                            <a>a</a>
                                        </li>
                                        <li>
                                            <span className='me-3'>Năm sản xuất: {filmDetail[3]}</span>
                                            <a>b</a>
                                        </li>
                                        <li>
                                            <span className='me-3'>Thời lượng phim: {filmDetail[6]}</span>
                                            <a>c</a>
                                        </li>
                                        <li>
                                            <span className='me-3'>Đạo diễn: {filmDetail[8]}</span>
                                            <a>d</a>
                                        </li>
                                        <li>
                                            <span className='me-3'>Quốc gia: {filmDetail[10]}</span>
                                            <a>e</a>
                                        </li>
                                        <li>
                                            <span className='me-3'>Diễn viên: {filmDetail[9]}</span>
                                            <a>f</a>
                                        </li>
                                        <li>
                                            <div className='flex'>
                                                Nội Dung Phim:
                                                <p className='ms-3'>{filmDetail[5]}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </aside>
                                <div>
                                    <small id="helpId" class="text-muted">Dat ve ngay:</small>
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        <Button><Link to="/Conten" className='no-underline text-[#000]'>Dat ve</Link></Button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )



                }

export default FilmDetail
