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
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ProductSlider from '../../components/ProductSlider/ProductSlider';


const ProductDetail = () => {

    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdList = useFetch(`${productsAPI}/${params.slug}`);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;


    if (!prodData) {
        return ("no product found")
    }


    // console.log('useProdForDet Main hook in Detail Page', useProdList);

    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col"  >
                <div className="w-full py-[20px] ">
                    <BreadCrumbs />
                </div>
                <div className='py-[10px] lg:mt-[50px] w-full flex flex-wrap sm:flex-nowrap gap-[50px]' >

                    {/* >>>>>>>>>>>>> Left Section */}
                    <div className="left_sec w-[100%]" >
                        {/* >>>>>>>>>> Image Gallery Slider */}
                        <ImageGallerySlider apiImg={prodData.img_gallery} />
                    </div>


                    {/* >>>>>>>>>>>>> Right Section */}


                    <div className="right_sec w-full ">

                        <h3 className='font-[inter] text-[25px] sm:text-[35px] lg:text-[40px]/[55px] font-[700]'>{prodData.name}</h3>

                        <div className="price_cont flex flex-wrap items-center w-full gap-x-[10px] gap-y-[0px] sm:gap[10px] lg:gap-[20px] mt-[10px]">
                            <p className='font-[inter] font-medium text-[14px] text-center md:text-[32px] text-[#000]'  > &#8377; {prodData.price.sale_price}</p>
                            <p className='font-[inter] font-400 text-[16px] text-center md:text-[24px] line-through text-[#A0A0A0]'  > &#8377; {prodData.price.reg_price}</p>

                        </div>
                        <div className="w-fit my-[10px]" >
                            <NumCounter />
                        </div>

                        <div className="text py-[20px]">

                            <p className='font-[inter] font-[400] text-[16px]/[25px] dang-cont' dangerouslySetInnerHTML={{ __html: prodData.description.length < 250 ? prodData.description : prodData.description.slice(0, 250) + '...' }} />
                        </div>
                        <div className="cont flex flex-nowrap gap-10">
                            <Button text="Add to Wishlist" />
                            <Button text="Add to Cart" />
                        </div>
                    </div>
                </div>
                <div className="w-[100%] py-[50px]">
                    <ProductIconDetails />
                </div>
            </div>
            <div className="desc w-full bg-[#FAFAFA] flex items-center justify-center">
                <div className="mainCont max-w-[1440px] w-full my-[80px] py-[50px] rounded-[8px] px-[40px] bg-white">
                    <h3 className="font-[inter] font-medium text-[24px] text-[#000] mb-[20px]">Details</h3>
                    <p className="font-[inter] font-medium text-[16px] text-[#9d9d9d] dang-cont" dangerouslySetInnerHTML={{ __html: prodData.description }} />
                </div>
            </div>

            <div className="">
                <div className="slider container_layout">
                    <ProductSlider title="Related Products" urlText="" urlVal="/products" categoryName="Covers and Cases" />
                </div>
            </div>

        </>
    )
}

export default ProductDetail;
