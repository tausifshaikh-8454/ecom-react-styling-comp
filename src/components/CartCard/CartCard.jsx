import React, { useState } from 'react'
import './cartCard.css'

const CartCard = ({
    imgSource = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    prodName = "Item 1"
}) => {

    let [quantity, setQuantity] = useState(1)


    return (
        <div className="cart_card w-full p-[20px] flex items-center rounded-[12px] border-[1px] border-[#737373] " >
            <div className="prodInfo flex w-full items-center gap-[30px] ">
                <img src={imgSource}
                    alt="" className='w-[110px] '

                />
                <div className="text">
                    <h3 className=' text-[24px]/[30px] ' >{prodName}</h3>
                    <button className='text-red-500 cursor-pointer hover:underline ' >Remove Item From Cart</button>
                </div>
            </div>

            <div className="qnty flex items-center  h-fit p-[10px]  ">
                <button
                    onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                    className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                    -
                </button>

                <input type="number"
                    id='qunt_val'
                    className='  w-[60px] text-[28px]/[34px] text-center focus:outline-0 '
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                    onClick={() => setQuantity(quantity + 1)}
                    className=' qnty_btns  w-[40px] h-[40px] flex justify-center items-center text-[24px]/[30px] bg-black text-white hover:bg-white hover:text-black transition-all border-[1px] border-black cursor-pointer ' >
                    +
                </button>
            </div>

        </div>
    )
}

export default CartCard