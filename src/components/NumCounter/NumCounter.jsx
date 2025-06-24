import React, { useState } from 'react'

const NumCounter = () => {
    let [quantity, setQuantity] = useState(0)
    return (
        <div className="qnty flex items-center  h-fit px-[20px] py-[10px] border-1 rounded-lg border-black ">
            <button
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                className=' qnty_btns font-[Montserrat] w-[15px] h-[15px] md:w-[25px] md:h-[25px] flex justify-center items-center text-[18px]/[22px] sm:text-[22px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] rounded-sm border-black cursor-pointer ' >
                -
            </button>

            <input type="number"
                id='qunt_val'
                className=' w-[20px] md:w-[50px] text:[22px]/[30px] sm:text-[22px]/[30px] text-center focus:outline-0 '
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button
                onClick={() => setQuantity(quantity + 1)}
                className=' qnty_btns font-[Montserrat] w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] flex justify-center items-center text-[18px]/[22px] md:text-[22px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] rounded-sm border-black cursor-pointer '>
                +
            </button>
        </div>
    )
}

export default NumCounter