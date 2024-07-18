import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='Footer h-[23rem] w-full flex justify-center'>
      <div className='h-full w-full '>
        <div className=' flex h-[6.5rem] w-full justify-center items-center mt-10'>
          <div className='Footer-logo h-full w-1/2 flex justify-end' >
            <img className='h-[5rem] w-[7rem] border-r-500' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQjDuRopnonYQ8arRpuS6JfND4BaWIesn_r2LnHhVFt27zDbH-d4y7bm3k70w82o1Zes&usqp=CAU" />
          </div>
          <div className='Footer-title h-full w-1/2 flex justify-start mt-[3rem]'>
            <span className='text-[white]'>Xem là dui</span>
          </div>
        </div>
        <div className='h-[2.5rem] w-full flex justify-center'>
          <sapn className='text-[gray]  font-normal text-lg'>Đăng ký để nhận bản tin của chúng tôi</sapn>
        </div>
        <div className='h-[5.5rem] w-full flex justify-center'>
          <div className='h-full w-2/4 flex justify-end px-[1rem]'>
            <input type="text" placeholder="Email" className="input w-full max-w-xs rounded-full text-[white]" />
          </div>
          <div className='Footer-emailbtn h-full w-1/3 flex justify-start'>
            <button className="btn font-semibold !rounded-full ">Secondary</button>
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