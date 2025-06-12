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


const ProductDetail = () => {

    let params = useParams();
    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('params', params, typeof params)

    let useProdList = useFetch(`${productsAPI}/${params.slug}`);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    // console.log('useProdForDet Main hook in Detail Page', useProdList);

    return (
        <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col  "  >

                <div className='py-[50px] w-full flex flex-wrap sm:flex-nowrap gap-[50px] ' >

                    {/* >>>>>>>>>>>>> Left Section */}
                    <div className="left_sec w-[100%]" >
                        {/* <img src="https://www.tintaccessories.com/wp-content/uploads/2024/01/MagPop-JPEG-1024x1024.jpg" alt="" /> */}
                        {/* >>>>>>>>>> Image Gallery Slider */}
                        <ImageGallerySlider />
                    </div>


                    {/* >>>>>>>>>>>>> Right Section */}
                    <div className="right_sec w-full ">
                        <h3 className='font-[Montserrat] text-[25px] sm:text-[35px] lg:text-[50px] font-[600]'>Main Product Name</h3>

                        <div className="price_cont flex flex-wrap w-full gap-x-[10px] gap-y-[0px] sm:gap[10px] lg:gap-[10px] mb-3">
                            <p className='font-[Montserrat] font-semibold  text-[16px] sm:text-md line-through text-[#9c9898]'  >Regular Price: <span className="sm:text-[20px] text-[18px] font-[600] "> Rs: 5000 </span></p>
                            <p className='font-[Montserrat] font-semibold text-[16px] sm:text-md'  > Sale Price: <span className="sm:text-[20px] text-[18px] font-[600]">Rs: 2500</span> </p>
                        </div>
                        <div className="cont flex flex-nowrap gap-5">

                            <NumCounter />

                            <Button text="Add to Cart" />

                        </div>

                        <div className="text mt-5">
                            <p className='font-[poppins] font-[600] text-[20px] sm:text-[22px] mb-2'> Product Description:</p>
                            <p className='font-[poppins] font-[400] text-[16px] sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, eveniet cupiditate velit aut, dolor ipsum facilis deserunt sunt dignissimos dolores eum amet ea ut excepturi et modi minima. Voluptas, libero?</p>
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
