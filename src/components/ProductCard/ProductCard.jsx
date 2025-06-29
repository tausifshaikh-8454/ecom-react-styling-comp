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
            <div className={`prod_card flex flex-col gap-[12px] py-[24px] px-[16px] cursor-pointer ${boxWidth} bg-[#f6f6f6] rounded-[9px]`} >
                <Link to={`/products/${urlToProd}`} >

                    
                    <div className="w-[100%] flex flex-col items-center mt-3">
                        <img src={featImg} alt="prod-img" className='w-[200px] h-[250px] object-cover rounded-lg ' />

                        <div className="texts flex flex-col text-center items-center w-[100%] my-[16px]">
                            <p className='font-[montserrat] font-[500] text-[#00000087] text-[10px] w-fit px-[10px] py-[04px] bg-[#E3F0FF] rounded-[12px] my-[10px]' >{prodCat}</p>
                            <h3 className='font-[inter] font-[500] text-[16px]/[20px] w-[100%] capitalize ' >{name}</h3>
                        </div>
                        <p className='font-[inter] font-[600] text-center text-[24px] w-[100%]'  > &#8377; {price} </p>
                         <button className=' add_to_cart_btn font-[inter] font-[500] text-[14px] w-[200px] rounded-[12px] mt-[20px] uppercase transition-all flex justify-center items-center py-[10px] border border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer' >Add to Cart</button>
                    </div>



                   

                </Link>
            </div>

        </>

    )
}

export default ProductCard