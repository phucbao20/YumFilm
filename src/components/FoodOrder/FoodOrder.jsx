import React, { useState, useEffect } from 'react'
import "./FoodOrder.scss"
import { ngoidenkiquai, FAfood, optimusFood, Pepsi, baprangbo } from '../../image'
import Button from 'react-bootstrap/Button';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getListFood } from '../../service/Food'
const FoodOrder = () => {
    const [listFood, setListFood] = useState([])
    const { filmId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getListFood()
            .then((food) => {
                setListFood(food.data)
                console.log(food.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function handleBackOrderSeat(id){
        navigate("/Conten/" + id)
    }
    return (
        <div className='Conten h-[51rem] w-full  bg-[#2b2b31] flex'>
        
            <div className='h-full w-[60%] mt-7 py-3'>
                <div className='h-full w-full  px-10 '>
                    <div className='h-full w-full border-2 border-x-zinc-50 mt-[0.75rem] py-3 px-4 flex flex-col'>
                        <label className='font-semibold text-[#fff] text-lg'>Chọn combo</label>
                        {
                            listFood.map((food) => 
                                <div className='h-1/6 w-full mt-3 flex'>
                                    <div className='h-full w-1/2  items-center flex'>
                                        <img className='h-[100px] w-[150px]' src={`/src/image/${food.foodImage}`} />
                                        <div className='flex flex-col *:!ml-2 *:!text-[#fff]'>
                                            <label>{food.foodName}</label>
                                            <label>{food.description}</label>
                                            <label className='font-bold '>{food.price} VNĐ</label>
                                        </div>
                                    </div>
                                    <div className='h-full w-1/2 flex justify-end items-center'>
                                        <div>
                                            <label for="Quantity" class="sr-only"> Quantity </label>

                                            <div class="flex items-center gap-1">
                                                <button
                                                    type="button"
                                                    class="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
                                                >
                                                    -
                                                </button>

                                                <input
                                                    type="number"
                                                    id="Quantity"
                                                    value="1"
                                                    class="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                                />

                                                <button
                                                    type="button"
                                                    class="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
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
                </div>
            </div>
            <div className='h-full w-[40%] bg-[#2b2b31] py-3 pr-20 mt-10'>
                <div className='h-[18rem] w-full flex'>
                    <div className='h-[17rem] w-1/3'>
                        <img className='h-[270px] w-[200px]' src={ngoidenkiquai} />
                    </div>
                    <div className='h-[17rem] w-2/3 px-3'>
                        <div className='flex flex-col *:!text-[#ffff] '>
                            <span className=' text-base font-bold'>Ngôi đền kì quái 4</span>
                            <span className=' text-base font-normal'>2D Phụ Đề</span>
                        </div>
                    </div>
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
                <div className='h-[3rem] w-full mt-[2rem]'>
                    <div className='h-full w-full  *:!text-[#ffff] flex'>
                        <div className='h-full w-1/2 items-center'>
                            <div className='h-[1.5rem] w-full flex flex-col'>
                                <span>1x Combo FA</span>
                                <span>2x Combo Optimus</span>
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
                        <Button variant="light"><a onClick={() => {handleBackOrderSeat(filmId)}}>Quay lại</a></Button>{' '}
                    </div>
                    <div className='Conten-btn h-full w-1/2 px-2'>
                        <Button variant="warning">Tiếp tục</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodOrder