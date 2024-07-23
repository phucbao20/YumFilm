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

            </Container>
            <Container-fluid>
                <section className="border-t-4 border-t-red-600 mb-3">
                    <Container className='mt-3'>
                        <h3>Bình luận</h3>
                        <div>
                            <label htmlFor="OrderNotes" className="sr-only">Order notes</label>

                            <div className="overflow-hidden">
                                <textarea
                                    id="OrderNotes"
                                    className="w-full px-3 py-3 resize-none border-4 border-x-0 border-t-0 border-gray-200 align-top sm:text-sm"
                                    rows="5"
                                    placeholder="Viết bình luận"
                                ></textarea>

                                <div className="flex items-center justify-end gap-2 py-3">
                                    <button
                                        type="button"
                                        className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                                    >
                                        Xóa
                                    </button>

                                    <button
                                        type="button"
                                        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                                    >
                                        Đăng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

            </Container-fluid>
        </section>
    )
}

export default FilmDetail
