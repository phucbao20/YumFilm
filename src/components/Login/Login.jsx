import React
, { useState }
    from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { loginByUserName } from '../../service/LoginService'
import Cookies from 'js-cookie';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = new useNavigate()

    function showPassword() {
        const showPassword = document.getElementById('inputPassword')
        showPassword.type === 'password'
            ?
            showPassword.setAttribute('type', 'text')
            :
            showPassword.setAttribute('type', 'password')
    }

    function notify(message, status) {
        return Swal.fire({
            title: message,
            icon: status
        });
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const account =
        {
            username: username,
            password: password
        }
        console.table(account);
        const formDataObj = new FormData();

        formDataObj.append("username", account.username)
        formDataObj.append("password", account.password)
        console.log(formDataObj);
        formDataObj.forEach(element => {
            console.log(element);
        });
        console.log(formDataObj instanceof FormData);
        loginByUserName(formDataObj)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error ${response.status}`);
                }
            })
            .then((data) => {
                console.log('Response Data:', data);
                Cookies.set("YumFilm", data.responseToken, { expires: 7 })
                notify("Đăng nhập thành công", "success");
                setTimeout(() => {
                    window.location.href = "http://localhost:5173/"
                    // navigate("/");
                }, 2000);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('Vui lòng kiểm tra thông tin đăng nhập !!');
            });
    }
    return (
        <div className=''>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
                                <g transform="translate(100, 100) rotate(-0.0663417)">
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
                                </g>
                            </svg>
                        </div>
                        <p className="text-center text-lg font-medium">Đăng nhập</p>
                        <div>
                            <label htmlFor="username" className="sr-only">Tên đăng nhập</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    onChange={(e) => { setUsername(e.target.value) }}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Tên đăng nhập"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Mật khẩu</label>

                            <div className="relative">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Mật khẩu"
                                    id='inputPassword'
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4" onClick={showPassword}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='text-danger'>
                            {error}
                        </div>
                        <button
                            onClick={handleOnSubmit}
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" >
                            Đăng nhập
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Bạn không có tài khoản ?
                            <Link to="/Signup">SingUp</Link>


                            <a className="underline" href="#"></a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
