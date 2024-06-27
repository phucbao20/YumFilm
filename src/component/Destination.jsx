import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaRegCalendarDays } from "react-icons/fa6";

const Destination = () => {
    return (
        <Container>
            <form>
                <div className='flex justify-between w-full h-[7rem]'>
                    <div className='w-1/5 rounded border-2'>

                        <div className='p-4 w-full h-full'>
                            <label className='text-xl'>Điểm đến</label>
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Tìm kiếm"
                                    className="w-full rounded-md border-collapse py-2.5 pe-10 sm:text-sm border-0"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-primary w-1/5 rounded border-2'>
                    b
                        <FaRegCalendarDays />
                    </div>
                    <div className='bg-primary w-1/5 rounded border-2'>c</div>
                    <div className='bg-primary w-1/5 rounded border-2'>d</div>
                    <Button className='w-1/5'>Tìm kiếm</Button>
                </div>
            </form>
        </Container>
    )
}

export default Destination
