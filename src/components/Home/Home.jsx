import React, { useState,useEffect } from 'react'
import "./Home.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link,useNavigate } from 'react-router-dom'
import { getListFilmHot,getListAllFilm } from '../../service/Film';


// const images = [
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",
//     "https://ss-images.saostar.vn/pc/1643160456366/saostar-8pvszill03kn4149.png",

// ]






const Home = () => {

    const [listFilmHot, setFilmHot] = useState([]);
    const [listAllFilm, setListAllFilm] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getListFilmHot()
        .then((filmHot)=> {
            setFilmHot(filmHot.data)
            console.log(filmHot.data)
        })
        .catch((error) => {
            console.log(error);
        })
        getListAllFilm()
        .then((allFilm) =>{
            setListAllFilm(allFilm.data)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    
    function handleChooseFilm(id) {
        navigate("/FilmDetail/" + id)
    }
   
    return (
        <body className='w-full h-full bg-slate-800'>
            <section className='ListFilmMonth container py-3'>
                <div className='Title'>
                    <h1 className='Title-Month text-white'>Phim Của Tháng</h1>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2000, 
                        disableOnInteraction: false, 
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                        {
                            listFilmHot.map((img, index) =>
                                <SwiperSlide key={index+1}>
                                    <img src={`/src/image/${img[1]}`} className='rounded' alt="" />
                                </SwiperSlide>
                            )
                        }

                </Swiper>
            </section>
            <hr className='HR-Month container' />
            <section className='Film w-full h-full'>
                <div className=' container'>
                    <h1 className=' text-white'>Danh Sách Phim</h1>
                </div>
                <div className='Film-Content container flex flex-wrap justify-between py-3 w-full h-full gap-y-8'>
                    {
                        listAllFilm.map((film, index) =>
                            <div key={index+1} className='Content-Left flex justify-end w-1/2 h-1/4 p-4' key={film[0]}>
                                <div className='Image-Left'>
                                    <img className='Image-Film rounded' src={`/src/image/${film[2]}`} alt="" />
                                </div>
                                <div className='ContentBody-Left mx-3 w-[400px]'>
                                    <div>
                                        <h3 className='TitleFilm'>{film[1]}</h3>
                                        <div className='Icon flex *:mx-2 text-white'>
                                            <p>{film[4]}/10</p>
                                            <p>HD</p>
                                            <p>{film[6]}+</p>
                                        </div>
                                        <div className='Genre py-2'>
                                            <span className='GenreFilm text-white'>{film[3]}</span>
                                        </div>
                                    </div>
                                    <div className='Mota py-2 pt-3 flex-1'>
                                        <div className='Description-Box w-full text-justify'>
                                           {film[5]}
                                        </div>
                                    </div>
                                    <button className='Button btn  text-white w-[150px]'><a className='no-underline text-[#000]' onClick={() => {handleChooseFilm(film[0])}}>Chọn phim</a></button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </body>
    )
}

export default Home