import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { ngoidenkiquai } from '../../image'

const FilmDetail = () => {
    return (
        <section>

            <Container className='my-3'>
                <div>
                    <h3>
                        Tên phim
                    </h3>
                </div>
                <section className='row'>
                    <article className='col-4 bg-slate-500'>
                        <div className='w-full'>
                            <img src={ngoidenkiquai}></img>
                        </div>
                    </article>
                    <aside className='col-8 bg-red-400'>
                        <ul class="list-none">
                            <li>
                                <span className='me-3'>Thể loại:</span>
                                <a>a</a>
                            </li>
                            <li>
                                <span className='me-3'>Năm sản xuất:</span>
                                <a>b</a>
                            </li>
                            <li>
                                <span className='me-3'>Thời lượng phim:</span>
                                <a>c</a>
                            </li>
                            <li>
                                <span className='me-3'>Đạo diễn:</span>
                                <a>d</a>
                            </li>
                            <li>
                                <span className='me-3'>Quốc gia:</span>
                                <a>e</a>
                            </li>
                            <li>
                                <span className='me-3'>Diễn viên:</span>
                                <a>f</a>
                            </li>
                            <li>
                                <div className='flex'>
                                    Nội Dung Phim:
                                    <p className='ms-3'>g</p>
                                </div>
                            </li>
                        </ul>
                    </aside>
                    <div>
                        <small id="helpId" class="text-muted">Chọn ngày:</small>
                        <div className="mb-3 flex flex-wrap gap-2">
                            <Button>12-12-2022</Button>
                            <Button>12-12-2022</Button>
                            <Button>12-12-2022</Button>
                            <Button>12-12-2022</Button>
                            <Button>12-12-2022</Button>
                            <Button>12-12-2022</Button>
                        </div>
                    </div>
                </section>
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
                                    className="w-full  px-3 py-3 resize-none border-4 border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
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
