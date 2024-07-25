import React from 'react'
import "./FilmDetail.scss"

const FilmDetail = () => {
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
                        [...Array(4)].map((number, index) =>
                            <div className='Content-Left flex justify-end w-1/2 h-1/4 p-4'>
                                <div className='Image-Left'>
                                    <img className='Image-Film rounded' src="https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png" alt="" />
                                </div>
                                <div className='ContentBody-Left mx-3 w-[400px]'>
                                    <div>
                                        <h3 className='TitleFilm'>Our BeLove Summer</h3>
                                        <div className='Icon flex *:mx-2 text-white'>
                                            <p>9.9/10</p>
                                            <p>HD</p>
                                            <p>18+</p>
                                        </div>
                                        <div className='Genre py-2'>
                                            <span className='GenreFilm text-white'>Tình cảm</span>
                                        </div>
                                    </div>
                                    <div className='Mota py-2 pt-3 flex-1'>
                                        <div className='Description-Box w-full text-justify'>
                                            Mùa hè yêu dấu của chúng ta là một bộ phim truyền hình hài lãng mạn của Hàn Quốc.
                                            Được quảng bá là "phim gốc đầu tiên của Studio N", phim được đạo diễn bởi Kim Yoon-jin
                                            và được viết kịch bản bởi Lee Na-eun, với sự tham gia của Choi Woo-shik, Kim Da-mi, Kim
                                            Sung-cheol và Roh Jeong-eui và được viết kịch bản bởi Lee Na-eun, với sự tham gia của Choi Woo-shik, Kim Da-mi, Kim
                                            Sung-cheol và Roh Jeong-eui
                                        </div>
                                    </div>
                                    <button className='Button btn  text-white w-[150px]'>Chỉnh Sửa</button>
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