import React from 'react'
import NumCount from 'react-countup'

const NumberCounter = ({ number, title, width }) => {


  return (
    <>
      <div className='flex flex-col p-[20px]' style={{width:`${width}`}}>
        <NumCount className='font-[montserrat] font-[700] text-[65px] text-center' duration={5} start={0} end={number} />
        <span className="font-[poppins] font-[500] text-[18px] text-center">{title}</span>
      </div>

    </>
  )
}

export default NumberCounter