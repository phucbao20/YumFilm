import React, { useState, useEffect } from 'react'
import "./Conten.scss"
import Button from 'react-bootstrap/Button';
import { ngoidenkiquai } from '../../image'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getListSeat, getFilmById } from '../../service/SeatLocation'
const Conten = () => {

    const [listSeat, setListSeat] = useState([])
    const [listOrder, setListOrder] = useState({
        listOrderSeat:[],
        listOrderFood:[],
        listprice:[]
    })
        
    const [film, setFilm] = useState([])
    const { filmId } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getListSeat()
            .then(seat => {
                setListSeat(seat.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        getFilmById(filmId).then((film) => {
            setFilm(film.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const newOrder = [...newOrder, listOrder]

    function handleByFood (id) {
        navigate("/FoodOrder/" +id)
    }


    function handleClick(price, name) {
            setListOrder({seatName: name, seatPrice: price})
    }

    console.log(listOrder);
    return (
        <div className='Conten h-[48rem] w-full bg-[#2b2b31] flex border-b-2 border-[#ff55a5]' >
            <div className='h-full w-[60%] mt-7 py-3'>
                <div className='h-[7rem] w-full '>
                    <div className='h-[1.5rem] w-full text-center '>
                        <span className='font-bold text-[#ffff]'>Chọn xuất chiếu</span>
                    </div>
                    <div className='h-full w-full flex flex-wrap gap-2.5 justify-center items-center *:!bg-gradient-to-r from-purple-500 to-pink-500 *:!font-medium *:!text-[#ffff]'>
                        <button className="btn">8.00 - 11.00</button>
                        <button className="btn ">13.00 - 15.00</button>
                        <button className="btn ">7.00 - 9.00</button>
                        <button className="btn ">00.00 - 2.00</button>
                    </div>
                </div>
                <div className='h-[38rem] w-full '>
                    <div className='Conten-seatLocation flex px-10 py-7 justify-center'>
                        <ul className='Conten-seat'>
                            {
                                listSeat.map(seat =>
                                    <li key={seat.seatLocationId}>
                                        <Button
                                            variant="outline-light"
                                            className='w-full'
                                            onClick={() => { handleClick(seat.seatPrice, seat.seatNumber) }}
                                        >
                                            {seat.seatNumber}
                                        </Button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='h-[7rem] w-full px-[4.5rem]'>
                        <div className='h-[1.5rem] w-full text-center border-b-2 border-red-600'>
                            <span className='text-xs font-bold text-[#ffff] '>Màn Hình</span>
                        </div>
                        <div className='Conten-seatStatus h-[5.5rem] w-full  px-5 flex flex-wrap gap-3 justify-center items-center '>
                            <Button disabled variant="secondary"></Button><span className='text-[#ffff]'>Ghế đã bán</span>
                            <Button disabled variant="light"></Button><span className='text-[#ffff]'>Ghế đang chọn</span>
                            <Button disabled variant="outline-warning"></Button><span className='text-[#ffff]'>Ghế vip</span>
                            <Button disabled variant="outline-light"></Button><span className='text-[#ffff]'>Ghế thường</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[40%]  py-3 pr-20 mt-10'>
                <div className='h-[18rem] w-full flex'>
                    {
                        film.map(film =>
                            <>
                                <div className='h-[17rem] w-1/3'>
                                    <img className='h-[270px] w-[200px]' src={`/src/image/${film.filmImage}`} />
                                </div>
                                <div className='h-[17rem] w-2/3 px-3'>
                                    <div className='flex flex-col *:!text-[#ffff] '>
                                        <span className=' text-base font-bold'>{film.filmName}</span>
                                        <span className=' text-base font-normal'>2D Phụ Đề</span>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className='h-[5rem] w-full'>
                    <div className='w-full h-[2rem] *:!text-[#ffff]'>
                        <span className=' font-bold text-base'>YumFill Quang Trung - </span>
                        <span className=''>RAP 3</span>
                    </div>
                    <div className='w-full h-[2rem] *:!text-[#ffff] border-b-2 border-[#ff55a5]'>
                        <span className=''>Suất:  </span>
                        <span className='font-bold text-base'>00.00 - 12.00</span>
                        <span> - </span>
                        <span>Ngày: </span>
                        <span className='font-bold text-base'>02/07/2024</span>
                    </div>
                </div>
                <div className='h-[3rem] w-full '>
                    <div className='h-full w-full  *:!text-[#ffff] flex'>
                        <div className='h-full w-1/2'>
                            <div className='h-[1.5rem] w-full flex'>
                                <span>1x Ghế đơn</span>
                            </div>
                            <div className='h-[1.5rem] w-full flex'>
                                <span>Ghế: </span>
                                <span className='font-bold text-base'>A1,A2</span>
                            </div>
                        </div>
                        <div className='h-full w-1/2 justify-end flex items-center'>
                            <span className='font-bold text-base text-amber-500'>100.000 VNĐ</span>
                        </div>
                    </div>
                    <div className='border-b-2 border-[#ff55a5] h-[20px] w-full'></div>
                </div>
                <div className='h-[2.75rem] w-full mt-7'>
                    <div className='h-full w-full  *:!text-[#ffff] flex items-center mt-[35px]'>
                        <div className='h-full w-1/2'>
                            <div className='h-[1.5rem] w-full'>
                                <span className='font-bold text-base'>Tổng cộng: </span>
                            </div>
                        </div>
                        <div className='h-full w-1/2 justify-end flex '>
                            <span className='font-bold text-base text-amber-500'>100.000 VNĐ</span>
                        </div>
                    </div>
                </div>
                <div className='h-[5rem] w-full  flex justify-center '>
                    <div className='Conten-btn h-full w-1/2 px-2'>
                        <Button variant="light"><Link to="/FilmDetail">Quay lại</Link></Button>{' '}
                    </div>
                    <div className='Conten-btn h-full w-1/2 px-2'>
                        <Button variant="warning"><a onClick={() => {handleByFood(filmId)}}>Tiếp tục</a></Button>{' '}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conten