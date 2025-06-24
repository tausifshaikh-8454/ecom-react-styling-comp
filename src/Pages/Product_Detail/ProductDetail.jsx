import React from 'react'
import { useParams } from 'react-router-dom';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button';
import NumCounter from '../../components/NumCounter/NumCounter';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { BsBoxFill } from "react-icons/bs";
import { PiCreditCardFill } from "react-icons/pi";
import ImageGallerySlider from '../../components/PDP_Page/ImageGallerySliders/ImageGallerySlider';
import Accordian from '../../components/PDP_Page/Accordian/Accordian';
import ProductIconDetails from '../../components/PDP_Page/ProductFeaturesBlock/ProductIconDetails';
import './prodstyle.css'


const ProductDetail = () => {

    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdList = useFetch(`${productsAPI}/${params.slug}`);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    
    if(!prodData){
        return ("no product found")
    }


    // console.log('useProdForDet Main hook in Detail Page', useProdList);

    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col"  >

                <div className='py-[50px] w-full flex flex-wrap sm:flex-nowrap gap-[50px]' >

                    {/* >>>>>>>>>>>>> Left Section */}
                    <div className="left_sec w-[100%]" >
                        {/* <img src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg" alt="" /> */}
                        {/* >>>>>>>>>> Image Gallery Slider */}
                        <ImageGallerySlider apiImg = {prodData.img_gallery}/>
                    </div>


                    {/* >>>>>>>>>>>>> Right Section */}


                    <div className="right_sec w-full ">

                        <h3 className='font-[poppins] text-[25px] sm:text-[35px] lg:text-[35px]/[45px] font-[600]'>{prodData.name}</h3>



                        <div className="price_cont flex flex-wrap w-full gap-x-[10px] gap-y-[0px] sm:gap[10px] lg:gap-[20px] mb-3 mt-7">
                            <p className='font-[Montserrat] font-semibold  text-[16px] sm:text-[18px] line-through text-[#9c9898]'  >Regular Price: <span className="md:text-[18px] text-[18px] font-[600] ">{prodData.price.reg_price}</span></p>
                            <p className='font-[Montserrat] font-semibold text-[16px] sm:text-[18px]'  > Sale Price: <span className="md:text-[18px] text-[18px] font-[700]">{prodData.price.sale_price}</span> </p>
                        </div>
                        <div className="cont flex flex-nowrap gap-10">

                            <NumCounter />

                            <Button text="Add to Cart" />

                        </div>

                        <div className="text mt-10">
                            <p className='font-[poppins] font-[600] text-[20px] sm:text-[22px] mb-2'> Product Description:</p>
                            <p className='font-[Montserrat] font-[500] text-[16px] dang-cont' dangerouslySetInnerHTML={{ __html: prodData.description }} />
                        </div>

                        <div className="pt-[25px]">
                            <Accordian />
                        </div>

                    </div>



                </div>
                <div className="w-[100%] py-[50px]">

                    <ProductIconDetails />
                </div>
            </div>

        </>
    )
}

export default ProductDetail;
