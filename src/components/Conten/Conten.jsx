import React, { useState, useEffect, useContext } from 'react'
import "./Conten.scss"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getListSeat, getFilmById } from '../../service/SeatLocation'
import { getListFood } from '../../service/Food';
import { getShowTime } from '../../service/ShowTime';
import { listOrderFood, listOrderSeat } from '../../applicationContext/Context';
import Payment from '../Payment/Payment';
const Conten = () => {

    const [listSeat, setListSeat] = useState([])
    const [listFood, setListFood] = useState([])
    const [listShowTime, setListShowTime] = useState([])//
    const [toOrderFood, setToOrderFood] = useState(false)
    const [orderFood, setOrderFood] = useState({//
        listOrderFood: [],
        total: 0

    })

    const [order, setOrder] = useState({// 
        listOrderSeat: [],
        // listOrderFood: [],
        totalMoney: 0
    })

    const [showTime, setShowtime] = useState();
    const [film, setFilm] = useState()
    const { filmId } = useParams();//
    const navigate = new useNavigate()

    useEffect(() => {
        getListSeat()
            .then(seat => {
                setListSeat(seat.data)
            })
            .catch(err => {
                console.log(err)
            })

        getListFood()
            .then((food) => {
                setListFood(food.data)
            })
            .catch((error) => {
                console.log(error)
                if (error.response.data.status == 404)
                    navigate("/Login")
            })
        getShowTime(filmId)
            .then((time) => {
                setListShowTime(time.data)
            })
            .catch((error) => {
                console.log(error);
            })
        getFilmById(filmId).then((film) => {
            setFilm(film.data[0])
        })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function handleClick(price, name) {
        let newListOrderSeat = [];
        if (!order.listOrderSeat.find((se) => se.seatName === name)) {
            newListOrderSeat = [
                ...order.listOrderSeat, { seatName: name, seatPrice: price }
            ]
        } else {
            newListOrderSeat = order.listOrderSeat.filter((se) => se.seatName !== name)
        }
        setOrder(
            {
                ...order,
                listOrderSeat: newListOrderSeat,
                totalMoney: newListOrderSeat.reduce((sum, seat) => sum + seat.seatPrice, 0) * film.price
            }

        )
    }
    const handleToFoodBooking = () => {
        if (order.listOrderSeat.length > 0) {
          setToOrderFood(true);
          if (toOrderFood) {
            navigate(`/Conten/payment/${filmId}`, { state: { order, showTime, orderFood} });
          }
        } else {
          alert("Bạn chưa chọn ghế");
        }
      };

    const handleToSeatBooking = () => {
        setToOrderFood(false)
    }

    function handleShowTime(showTime) {
        setShowtime(showTime)
    }

    const updateQuantity = (foodId, foodName, price, value) => {
        // let inpQuantity =  document.getElementById(`quantity_${foodId}`)
        // inpQuantity.value = inpQuantity.value*1 + value; 

        let newOrderFood = []
        if (!orderFood.listOrderFood.find((food) => food.foodName === foodName)) {
            newOrderFood = [
                ...orderFood.listOrderFood, { foodName: foodName, price: price, value: value }
            ]
        }
        else {
            newOrderFood = [
                ...orderFood.listOrderFood
            ].map((listFood) => {
                if (listFood.foodName === foodName) {
                    return { ...listFood, value: listFood.value + value }
                }
                return { ...listFood }
            })
        }

        newOrderFood = newOrderFood.filter((food) => food.value !== 0)

        setOrderFood((prev) => {
            return {
                ...prev,
                listOrderFood: newOrderFood,
                total: newOrderFood.reduce((sum, food) => sum + food.price * food.value, 0)
            }
        }
        )
    }



    return (
        <div className='Conten h-[48rem] w-full bg-[#2b2b31] flex ' >
            <div className='h-full w-[60%] mt-7 py-3'>
                {/* <div className='h-[7rem] w-full '>
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
                                            variant={`${order.listOrderSeat.find(se => se.seatName === seat.seatNumber) ? "light" : "outline-light"}`}
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
                </div> */}

                {
                    !toOrderFood ? <>
                        <div className='h-[7rem] w-full '>
                            <div className='h-[1.5rem] w-full text-center '>
                                <span className='font-bold text-[#ffff]'>Chọn xuất chiếu</span>
                            </div>
                            <div className='h-full w-full flex flex-wrap gap-2.5 justify-center items-center *:!bg-gradient-to-r
                                     from-purple-500 to-pink-500 *:!font-medium *:!text-[#ffff]'
                            >
                                {
                                    listShowTime.map(time =>
                                        <button className="btn" key={time[0]} onClick={() => handleShowTime(time[2])}>{time[2]}</button>

                                    )
                                }
                            </div>
                        </div>
                        <div className='h-[38rem] w-full '>
                            <div className='Conten-seatLocation flex px-10 py-7 justify-center'>
                                <ul className='Conten-seat'>
                                    {
                                        listSeat.map(seat =>
                                            <li key={seat.seatLocationId}>
                                                <Button
                                                    variant={`${order.listOrderSeat.find(se => se.seatName === seat.seatNumber) ? "light" : "outline-light"}`}
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
                    </> : <div className='h-full mt-[0.75rem] py-3 px-4 flex flex-col'>
                        <label className='font-semibold text-[#fff] text-lg'>Chọn combo</label>
                        {
                            listFood.map((food, index) =>
                                <div className='h-1/6 w-full mt-3 flex' key={index}>
                                    <div className='h-full w-1/2  items-center flex'>
                                        <img className='h-[100px] w-[150px]' src={`/src/image/${food.foodImage}`} />
                                        <div className='flex flex-col *:!ml-2 *:!text-[#fff]'>
                                            <label>{food.foodName}</label>
                                            <label>{food.description}</label>
                                            <label className='font-bold '>{Math.ceil(food.price).toLocaleString()} VNĐ</label>
                                        </div>
                                    </div>
                                    <div className='h-full w-1/2 flex justify-end items-center'>
                                        <div>
                                            <label for="Quantity" className="sr-only"> Quantity </label>

                                            <div className="flex items-center gap-1" key={food.foodId}>
                                                <button
                                                    type="button"
                                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                                                    onClick={() => updateQuantity(food.foodId, food.foodName, food.price, -1)}
                                                >
                                                    -
                                                </button>

                                                <input
                                                    type="number"
                                                    id={`quantity_${food.foodId}`}
                                                    value={orderFood.listOrderFood.find((f) => f.foodName === food.foodName)?.value | 0}
                                                    className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                />

                                                <button
                                                    type="button"
                                                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                                                    onClick={() => updateQuantity(food.foodId, food.foodName, food.price, +1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
            <div className=' w-[40%]  py-3 pr-20 mt-10'>
                <div className='h-[18rem] w-full flex'>
                    {
                        film &&
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

                    }
                </div>
                <div className='h-[5rem] w-full'>
                    <div className='w-full h-[2rem] *:!text-[#ffff]'>
                        <span className=' font-bold text-base'>YumFill Quang Trung - </span>
                        <span className=''>RAP 3</span>
                    </div>
                    <div className='w-full h-[2rem] *:!text-[#ffff] border-b-2 border-[#ff55a5]'>
                        <span className=''>Suất:  </span>
                        <span className='font-bold text-base'>{showTime}</span>
                        <span> - </span>
                        <span>Ngày: </span>
                        <span className='font-bold text-base'>02/07/2024</span>
                    </div>
                </div>
                {
                    order.listOrderSeat.length &&
                    <div className='h-[3rem] w-full '>
                        <div className='h-full w-full  *:!text-[#ffff] flex'>
                            <div className='h-full w-1/2'>
                                <div className='h-[1.5rem] w-full flex'>
                                    <span>{order.listOrderSeat.length}x Ghế đơn</span>
                                </div>
                                <div className='h-[1.5rem] w-full flex'>
                                    <span>Ghế: </span>
                                    <span className='font-bold text-base'>{order.listOrderSeat.map((se) => se.seatName).join(", ")}</span>
                                </div>
                            </div>
                            <div className='h-full w-1/2 justify-end flex items-center'>
                                <span className='font-bold text-base text-amber-500'>{Math.ceil(order.totalMoney).toLocaleString()} VNĐ</span>
                            </div>
                        </div>
                        <div className='border-b-2 border-[#ff55a5] h-[20px] w-full'></div>
                    </div>
                }
                {
                    orderFood.listOrderFood.length &&
                    <div className='min-h-[6rem] w-full mt-[2rem]'>
                        <div className='h-full w-full  *:!text-[#ffff] flex'>
                            <div className='h-full w-1/2 items-center'>
                                <div className='min-h-[2.5rem] w-full flex flex-col'>
                                    {
                                        orderFood.listOrderFood.map((food) =>
                                            <span>{food.value}x {food.foodName}</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='h-full w-1/2 justify-end flex items-center'>
                                <span className='font-bold text-base text-amber-500'>{Math.ceil(orderFood.total).toLocaleString()} VNĐ</span>
                            </div>
                        </div>
                        <div className='border-b-2 border-[#ff55a5] h-[20px] w-full'></div>
                    </div>
                }
                <div className='h-[2.75rem] w-full mt-7'>
                    <div className='h-full w-full  *:!text-[#ffff] flex items-center mt-[35px]'>
                        <div className='h-full w-1/2'>
                            <div className='h-[1.5rem] w-full'>
                                <span className='font-bold text-base'>Tổng cộng: </span>
                            </div>
                        </div>
                        <div className='h-full w-1/2 justify-end flex '>
                            <span className='font-bold text-base text-amber-500'>{Math.ceil(order.totalMoney + orderFood.total).toLocaleString()} VNĐ</span>
                        </div>
                    </div>
                </div>
                <div className='h-[5rem] w-full  flex justify-center '>
                    <div className='Conten-btn h-full w-1/2 px-2'>
                        {
                            toOrderFood ? <Button variant="light" onClick={() => handleToSeatBooking()}>Quay lại</Button> :
                                <Button variant="light"><Link to="/FilmDetail" className='no-underline , text-[#000]'>Quay lại</Link></Button>
                        }
                    </div>
                    <div className='Conten-btn h-full w-1/2 px-2'>
                        <Button variant="warning" onClick={() => handleToFoodBooking()}>Tiếp tục</Button>{' '}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conten