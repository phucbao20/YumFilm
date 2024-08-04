import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='Footer h-[23rem] w-full flex justify-center py-2 border-t-2 border-[#ff55a5]'>
      <div className='h-full w-full' >
        <div className=' flex h-[6.5rem] w-full justify-center items-center '>
          <div className='Footer-logo h-full w-1/2 flex justify-end' >
            {/* <img className='h-[5rem] w-[7rem] border-r-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQjDuRopnonYQ8arRpuS6JfND4BaWIesn_r2LnHhVFt27zDbH-d4y7bm3k70w82o1Zes&usqp=CAU" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="90">
                                <g transform="translate(100, 100) rotate(-0.0663417)">
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="28" y="-45" x="-40" fill="#ffffff">Yum</text>
                                    <text stroke="#000" fontWeight="bold" xmlSpace="preserve" textAnchor="middle" fontFamily="Noto Sans JP" fontSize="34" y="-43" x="22" fill="#ff0000">Film</text>
                                </g>
                            </svg>
          </div>
          <div className='Footer-title h-full w-1/2 flex justify-start mt-16'>
            <span className='text-[white]'>Xem là dui</span>
          </div>
        </div>
        <div className='h-[2.5rem] w-full flex justify-center'>
          <span className='text-[gray]  font-normal text-lg'>Đăng ký để nhận bản tin của chúng tôi</span>
        </div>
        <div className='h-[5.5rem] w-full flex justify-center'>
          <div className='h-full w-2/4 flex justify-end px-[1rem]'>
            <input type="text" placeholder="Email" className="input w-full max-w-xs rounded-full text-[white]" />
          </div>
          <div className='Footer-emailbtn h-full w-1/3 flex justify-start'>
            <button className="btn font-semibold !rounded-full">Send Email</button>
          </div>
        </div>
        <div className='Footer-about h-[1.75rem] w-full flex justify-center *:!text-[white]'>
            <a>Giới thiệu</a>
            <a>Góc điện ảnh</a>
            <a>Hỗ trợ</a>
        </div>
        <div className='Footer-about h-[20px] w-full flex justify-center *:!text-[white] mt-3'>
            <span className='text-[white]'>© 2024 YumFilm by TwoTeam. </span>
        </div>
      </div>
    </div>
  )
}

export default Footer