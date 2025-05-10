import React from 'react'
import { BsBoxFill } from 'react-icons/bs';
import { FaTruckFast } from 'react-icons/fa6';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { PiCreditCardFill } from 'react-icons/pi';

const ProductIconDetails = () => {
  return (
    
    <div className="icons flex flex-wrap justify-between  gap-[15px] sm:gap-[10px] items-center pt-[20px] pb-[20px] sm:p-10 border-y-[1px]  border-dashed border-[#bcbcbc]">
      
      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-[#f7f7f7] w-[300px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px]">
        <IoShieldCheckmarkSharp className='text-[30px]/[40px] ' />
        <h5 className='text-[16px]/[24px] font-[Poppins]  ' >100% Original Products</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-[#f7f7f7] w-[300px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px]">
        <FaTruckFast className='text-[30px]/[40px]  ' />
        <h5 className='text-[16px]/[24px] font-[Poppins]  ' >Fast & Free Delivery</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center gap-[10px] bg-[#f7f7f7] w-[300px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px]">
        <BsBoxFill className='text-[30px]/[40px]  ' />
        <h5 className='text-[16px]/[24px] font-[Poppins]  ' >Easy Returns</h5>
      </div>

      <div className="icon_box flex flex-col text-center justify-center items-center  gap-[15px] sm:gap-[10px] bg-[#f7f7f7] w-[300px] sm:w-[23%] px-[10px] py-[20px] rounded-[10px]">
        <PiCreditCardFill className='text-[30px]/[40px]  ' />
        <h5 className='text-[16px]/[24px] font-[Poppins] ' >Secure Payments</h5>
      </div>

    </div>
  )
}

export default ProductIconDetails;