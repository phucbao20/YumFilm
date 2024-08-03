
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { getFilmDetailById } from '../../service/FilmDetail'
import "./FilmDetail.scss"
const FilmDetail = () => {

    const [filmDetail, setFilmDetail] = useState([])
    const navigate = useNavigate();
    const { filmId } = useParams();
    useEffect(() => {
        getFilmDetailById(filmId)
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
        <section className='!bg-[#2c2b2b]'>
            <Container className='my-3 !bg-[#2c2b2b] mt-0 mb-0 '>
                {
                    filmDetail.map((filmDetail) =>
                        <div key={filmDetail[0]}>
                            <div>
                                <div className='py-3 px-3 text-[#ffff]'>
                                    <h3>{filmDetail[1]}</h3>
                                </div>
                            </div>
                            <section className='row' >
                                <article className='col-3'>
                                    <div className='w-full'>
                                        <img src={`/src/image/${filmDetail[2]}`} className='w-80 h-82'></img>
                                    </div>
                                </article>
                                <aside className=' col-5'>
                                    <ul class="list-none" >
                                        <li>
                                            <strong className='text-[#ffff]'>Thể loại:</strong>
                                            <span className='me-3'> {filmDetail[4]}</span>

                                        </li>
                                        <li>
                                            <strong className='text-[#ffff] '>Năm sản xuất:</strong>
                                            <span className='me-3'> {filmDetail[3]}</span>

                                        </li>
                                        <li>
                                            <strong className='text-[#ffff] '>Thời lượng phim:</strong>
                                            <span className='me-3'> {filmDetail[6]}</span>

                                        </li>
                                        <li>
                                            <strong className='text-[#ffff] '>Đạo diễn:</strong>
                                            <span className='me-3'>  {filmDetail[8]}</span>

                                        </li>
                                        <li>
                                            <strong className='text-[#ffff] '>Quốc gia:</strong>
                                            <span className='me-3'>  {filmDetail[10]}</span>

                                        </li>
                                        <li>
                                            <strong className='text-[#ffff] '>Diễn viên:</strong>
                                            <span className='me-3'>  {filmDetail[9]}</span>

                                        </li>
                                        <li>
                                            <div >
                                                <strong className='text-[#ffff] '>Nội Dung Phim: </strong>
                                                <span className=''>{filmDetail[5]}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </aside>
                                <div>
                                    <small id="helpId" className=' flex justify-end'><strong className='text-[#ffff] '>Đặt vé ngay</strong> </small>
                                    <div className="mb-3 flex justify-end">
                                        <Button className='!bg-[#ff55a5] '><a className='no-underline text-[#000]' onClick={() => { handleByTicked(filmDetail[0]) }}>Đăt vé</a></Button>
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
