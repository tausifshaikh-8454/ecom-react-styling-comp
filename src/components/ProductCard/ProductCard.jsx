import React from 'react'
import './productCard.css'

import { Link } from 'react-router-dom'

const ProductCard = ({
    name = "Product Name",
    price = 500,
    featImg = "https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg",
    boxWidth = "w-full",
    urlToProd,
    prodCat = "Case & cover"
}) => {

    return (
        <>
            <div className={`prod_card  relative flex flex-col gap-[12px] pb-[20px] cursor-pointer ${boxWidth} `} >
                <Link to={`/products/${urlToProd}`} >

                    <img src={featImg} alt="prod-img" className=' h-[400px] object-cover w-full rounded-lg ' />

                    <div className="w-[100%] flex items-center mt-3">
                        <div className="texts flex flex-col justify-between pt-[12px] w-[70%] ">
                            <h3 className='font-[montserrat] font-[500]  text-[18px]/[22px] w-[100%] capitalize ' >{name}</h3>
                            <p className='font-[montserrat] font-[500] text-[#AFADAE] text-[12px] w-[100%] mt-1 ' >{prodCat}</p>
                        </div>
                        <p className='font-[montserrat] font-[600] text-[18px] w-[30%] text-right bg-[#F6F6F6] px-[10px] py-[5px]  '  > &#8377; {price} </p>
                    </div>



                    <button className=' add_to_cart_btn w-[85%] top-[295px] left-[22px] absolute  uppercase transition-all flex justify-center items-center p-[12px 25px] px-[25px] py-[12px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer' >Add to Cart</button>

                </Link>
            </div>

        </>

    )
}

export default ProductCard