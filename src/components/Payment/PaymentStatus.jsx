import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { paymentstatus } from '../../service/PaymentService'

const PaymentStatus = () => {
    const navigate = new useNavigate()
    const [params] = useSearchParams()
    const [httpStatus, setHttpStatus] = useState(false)
    const [money, setMoney] = useState()
    const [bankName, setBankName] = useState()
    const [message, setMessage] = useState()


    const vnp_ResponseCode = params.get('vnp_ResponseCode')
    console.log(vnp_ResponseCode);
    console.log(params);
    // {
    //     "vnp_ResponseCode": params.get('vnp_ResponseCode')
    // }
    // console.log(vnp_ResponseCode);
    // const parseJson = JSON.stringify(vnp_ResponseCode)

    // console.log(JSON.stringify(vnp_ResponseCode));
    useEffect(() => {
        paymentstatus(params).then((resp) => {
            console.log(resp.data);
            if (resp.data.httpStatus === "OK")
                setHttpStatus(true)
            setMessage(resp.data.message)
            setMoney(resp.data.money)
            setBankName(resp.data.bankName)
            navigate("/Conten/booking/payment-status")
        }).catch(error => console.log(error))

    }, [])

    return (
        <Container class="mb-3 ">
            <div className=''>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                    <div className="mx-auto max-w-lg">
                        <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                            <div class="card-header mb-5 flex justify-center align-items-center">
                                {
                                    httpStatus ? "" : <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="90"
                                        height="90"
                                        viewBox="0 0 72 72"
                                    >
                                        <g data-name="Group 18129" transform="translate(-604 -170)">
                                            <circle
                                                cx="36"
                                                cy="36"
                                                r="36"
                                                fill="#faeaea"
                                                data-name="Ellipse 148"
                                                transform="translate(604 170)"
                                            ></circle>
                                            <g data-name="24x24-Alert" transform="translate(620 186)">
                                                <path
                                                    fill="#c91d1d"
                                                    d="M22.9 3.991l14.745 28.9A3.493 3.493 0 0138 34.355a3.251 3.251 0 01-3.237 3.292H5.094a4.174 4.174 0 01-1.439-.366 3.3 3.3 0 01-1.255-4.39q14.325-27.762 14.921-28.9a2.9 2.9 0 012.667-1.641A3.238 3.238 0 0122.9 3.991zM20 32.714a2.378 2.378 0 10-2.34-2.378A2.359 2.359 0 0020 32.714zm-1.6-18.663v9.877a1.62 1.62 0 103.24 0v-9.694a1.626 1.626 0 00-1.62-1.646 1.6 1.6 0 00-1.62 1.463z"
                                                    transform="translate(0 -.35)"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                }
                                {
                                    !httpStatus ? "" : <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                                        <defs>
                                            <style>
                                                {`
                                .a {
                                fill: #e4f4ff;
                                opacity: 0;
                                }
                                .b {
                                fill: none;
                                stroke: #51d3c7;
                                stroke-width: 2px;
                                }
                                .c {
                                fill: #51d3c7;
                                }
                            `}
                                            </style>
                                        </defs>
                                        <g transform="translate(-13.312 -114.115)">
                                            <circle className="a" cx="24" cy="24" r="24" transform="translate(13.312 114.115)" />
                                        </g>
                                        <circle className="b" cx="20" cy="20" r="20" transform="translate(4 4)" />
                                        <g transform="translate(-13.312 -112.115)">
                                            <path
                                                className="c"
                                                d="M35.94,142.629a1,1,0,0,1-.667-.255l-4.9-4.395A1,1,0,1,1,31.7,136.49l4.176,3.742,8.1-8.65a1,1,0,1,1,1.459,1.367l-8.772,9.364A1,1,0,0,1,35.94,142.629Z"
                                            />
                                        </g>
                                    </svg>
                                }
                            </div>
                            <div class="card-body justify-center align-items-center my-2">
                                {
                                    !bankName ? "" :
                                        <div class="mb-3 d-flex">
                                            <h3>Ngân hàng:</h3>
                                            <h3 class=" ms-2 text-danger" >{bankName}</h3>
                                        </div> &&
                                        <div class="mb-3 d-flex">
                                            <h3> Tổng tiền:</h3>
                                            <h3 class=" ms-2 text-danger">{Math.ceil(money).toLocaleString()} VNĐ</h3>
                                        </div>
                                }
                                {
                                    !message ? setMessage("Thanh toán thất bại") : null
                                }
                                <div class="mb-3">
                                    <h2 class="text-success text-start">{message}</h2>
                                </div>

                                <div class="mb-3 text-danger">
                                    <p>
                                        th:if="$QRCode
                                    </p>
                                    {/* <img th:src="'data:image/png;base64,' + ${QRCode}" width="200" height="200" /> */}
                                </div>
                                <Button onClick={() => navigate("/")}>
                                    Trang chủ
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </Container>
    )
}

export default PaymentStatus
