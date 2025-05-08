import React from 'react'
import './productCard.css'

import { Link } from 'react-router-dom'

const ProductCard = ({
    name = "Product Name",
    price = 500,
    featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    boxWidth = "w-full",
    urlToProd
}) => {

    return (
        <>
            <div className={`prod_card  relative flex flex-col gap-[12px] pb-[20px] cursor-pointer ${boxWidth} `} >
                <Link to={`/products/${urlToProd}`} >

                    <img src={featImg} alt="prod-img" className=' h-[360px] object-cover w-full  ' />

                    <div className="texts flex justify-between pt-[12px] ">
                        <h3 className='  text-[20px]/[26px] w-[100%]  ' >{name}</h3>
                        <h4 className=' text-[20px]/[26px] text-[var(--primary-color)] w-[35%] text-right  '  > &#8377; {price} </h4>
                    </div>

                    <button className=' add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer  ' >Add to Cart</button>

                </Link>
            </div>

        </>

    )
}

export default ProductCard