
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getFilmDetailById } from '../../service/FilmDetail'
const FilmDetail = () => {

    const [filmDetail, setFilmDetail] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        getFilmDetailById(1)
            .then((re) => {
                setFilmDetail(re.data)
            }).catch((err) => {
                console.error(err)
            })
    }, [])
    
    const handleByTicked = (id) => {
        navigate("/Conten/" + id)
    }
    return (
        <section>
            <Container className='my-3'>
                {
                    filmDetail.map((filmDetail) =>
                        <div key={filmDetail[0]}>
                            <div>
                                <div >
                                    <h3>{filmDetail[1]}</h3>
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
                                            
                                        </li>
                                        <li>
                                            <span className='me-3'>Năm sản xuất: {filmDetail[3]}</span>
                                            
                                        </li>
                                        <li>
                                            <span className='me-3'>Thời lượng phim: {filmDetail[6]}</span>
                                            
                                        </li>
                                        <li>
                                            <span className='me-3'>Đạo diễn: {filmDetail[8]}</span>
                                            
                                        </li>
                                        <li>
                                            <span className='me-3'>Quốc gia: {filmDetail[10]}</span>
                                            
                                        </li>
                                        <li>
                                            <span className='me-3'>Diễn viên: {filmDetail[9]}</span>
                                            
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
                                        <Button><a className='no-underline text-[#000]' onClick={() => {handleByTicked(filmDetail[0])}}>Dat ve</a></Button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                }
            </Container>
        </section>
    )
}

export default FilmDetail
