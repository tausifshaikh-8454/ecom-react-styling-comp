import React, { useState } from 'react'

const NumCounter = () => {
    let [quantity, setQuantity] = useState(0)
    return (
        <div className="qnty flex items-center  h-fit p-[07px] border-1 rounded-lg border-black ">
            <button
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                className=' qnty_btns font-[Montserrat] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] flex justify-center items-center text-[22px]/[22px] sm:text-[25px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] rounded-sm border-black cursor-pointer ' >
                -
            </button>

            <input type="number"
                id='qunt_val'
                className=' w-[40px] sm:w-[60px] text:[25px]/[30px] sm:text-[28px]/[34px] text-center focus:outline-0 '
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button
                onClick={() => setQuantity(quantity + 1)}
                className=' qnty_btns font-[Montserrat] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] flex justify-center items-center text-[22px]/[22px] sm:text-[25px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] rounded-sm border-black cursor-pointer '>
                +
            </button>
        </div>
    )
}

export default NumCounter