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
                    <div className='w-1/5 rounded border-2'>
                        <div className='p-4 w-full h-full'>
                            <label className='text-xl'>Ngày đến</label>
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>
                                <input
                                    type="date"
                                    id="Search"
                                    placeholder="Tìm kiếm"
                                    className="w-full rounded-md border-collapse py-2.5 sm:text-sm border-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/5 rounded border-2'>
                        <div className='p-4 w-full h-full'>
                            <label className='text-xl'>Ngày đi</label>
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>
                                <input
                                    type="date"
                                    id="Search"
                                    placeholder="Tìm kiếm"
                                    className="w-full rounded-md border-collapse py-2.5 sm:text-sm border-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-1/5 rounded border-2'>
                        <div className='p-4 w-full h-full'>
                            <label className='text-xl'>Theo giá</label>
                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>
                                <div>
                                    <select
                                        name="HeadlineAct"
                                        id="HeadlineAct"
                                        className="mt-1.5 w-full h-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                    >
                                        <option value="">Please select</option>
                                        <option value="JM">John Mayer</option>
                                        <option value="SRV">Stevie Ray Vaughn</option>
                                        <option value="JH">Jimi Hendrix</option>
                                        <option value="BBK">B.B King</option>
                                        <option value="AK">Albert King</option>
                                        <option value="BG">Buddy Guy</option>
                                        <option value="EC">Eric Clapton</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className='w-1/5'>Tìm kiếm</Button>
                </div>
            </form>
            <section className=" text-white row mt-5">
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
                <div className='col-4'>
                    <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            Save 10%
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />

                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                            <p className="mt-2 text-pretty text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                                eum vitae aliquid at sed dignissimos.
                            </p>

                            <span
                                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                                Learn More
                            </span>
                        </div>
                    </a>

                </div>
            </section>
        </Container>
    )
}

export default Destination
