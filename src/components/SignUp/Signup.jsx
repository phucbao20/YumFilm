import React
, { useState } 
from 'react'
import { Link } from 'react-router-dom'
import { createUser } from '../../service/UserService'
// import { createAccount } from '../service/RegisterService'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const Signup = () => {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({})
    const [gender, setGender] = useState("")
    const [showPasswordError, setShowPasswordError] = useState(false)
    const navigate = useNavigate()

    function showPassword() {
        const showPassword = document.getElementsByClassName('inputPassword')
        showPassword.type === 'password'
            ?
            showPassword.setAttribute('type', 'text')
            :
            showPassword.setAttribute('type', 'password')
    }
    function handleOnSubmit() {
        console.log(lastName);
        console.log(firstName);
        console.log(username);
        console.log(password);
        if (password.pass === password.confirmPassword) {
            const user = {
                "lastName": lastName,
                "firstName": firstName,
                "username": username,
                "password": password.confirmPassword,
            }
            
            createUser(user).then((resp) =>{
                console.log(resp);
                const success = Swal.fire({
                    title: "Đăng ký thành công",
                    icon: "success"
                  });
                  if(success){
                      navigate("/login")
                  }
            }).catch(error =>{
                console.error(error);
            })
        }
        else{
            setShowPasswordError(true)
        }
    }
    return (
        <div>
            <div className="setBackground mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
                                <g transform="translate(100, 100) rotate(-0.0663417)">
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
                                </g>
                            </svg>
                        </div>
                        <p className="text-center text-lg font-medium">Đăng ký</p>
                        <div className='mt-8 grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                                <label htmlFor="lastname" className="sr-only">Họ</label>
                                <div className="relative">
                                    <input
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Họ"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label htmlFor="firstname" className="sr-only">Tên</label>
                                <div className="relative">
                                    <input
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Tên"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="sr-only">Tên đăng nhập</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Tên đăng nhập"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Mật khẩu</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword({ ...password, pass: e.target.value })}
                                    type="password"
                                    className="inputPassword w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Mật khẩu"
                                    required
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={showPassword}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Xác nhận mật khẩu</label>
                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                                    type="password"
                                    className="inputPassword w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Xác nhận mật khẩu"
                                    required
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={showPassword}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <p className='text-red-600' hidden={!showPasswordError}>Mật khẩu không khớp</p>
                        <button
                            onClick={handleOnSubmit}
                            type="button"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" >
                            Đăng ký
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Bạn đã có tài khoản ?
                            <Link to="/login">Đăng nhập</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup
