import React from 'react'
import "./FilmDetailAdmin.scss"
const FilmDetailAdmin = () => {
    return (
        <div className=' bg-slate-950'>
            <div className='FilmAdmin w-full h-full container py-5 flex'>
                <div className='FilmAdmin-Left w-1/3 my-16 mx-10'>
                    <img className='Image-Film' src="https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png" alt="" />
                    <button className='Button-Content mx-24 my-10'>Thay Đổi Ảnh</button>
                </div>
                <div className='FilmAdmin-Right mx-20'>
                    <div className='Content flex *:mx-5'>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Tên phim</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Năm sản xuất</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="date" />
                            </div>
                        </div>
                    </div>

                    <div className='Content flex *:mx-5 py-3'>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Thời lượng phim</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Đạo diễn</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='Content flex *:mx-5 py-3'>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Thể loại</label>
                            <div className='Input-Content bg-slate-950'>
                                <textarea className='TextArea-Form' name="" id=""></textarea>
                            </div>
                        </div>
                        <div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Thời gian công chiếu</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="date" />
                            </div>
                        </div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Quốc gia</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='Content flex *:mx-5 py-3'>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Giá</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Độ tuổi</label>
                            <div className='Input-Content bg-slate-950'>
                                <input className='Input' type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='Content flex *:mx-5 py-3'>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Diễn viên</label>
                            <div className='Input-Content bg-slate-950'>
                                <textarea className='TextArea-Form' name="" id=""></textarea>
                            </div>
                        </div>
                        <div className='Content-Right'>
                            <label className='text-white py-2' htmlFor="">Nội dung phim</label>
                            <div className='Input-Content bg-slate-950'>
                                <textarea className='TextArea-Form' name="" id=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='Button flex justify-between '>
                    <button className='Button-Content text-white'>Thêm </button>
                    <button className='Button-Content text-white'>Sửa </button>
                    <button className='Button-Content text-white'>Xóa </button>
                    <button className='Button-Content text-white'>Quay lại </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FilmDetailAdmin