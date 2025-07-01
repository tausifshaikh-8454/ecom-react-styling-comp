import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import prodSpotlight from '../../assets/prodListing/productSpot.webp'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'



const Products = () => {

    let productsAPI = import.meta.env.VITE_PRODUCT_API_KEY;
    // console.log('Vite API Key', import.meta.env.VITE_PRODUCT_API_KEY)


    let useProdList = useFetch(productsAPI);

    let loader = useProdList.loader;
    let error = useProdList.error;
    let prodData = useProdList.data;

    // console.log('useProdList Main hook in List Page', useProdList);

    return (

        <div className=""  >

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="flex flex-col justify-center items-center"  >
                <div className="w-full lg:h-[500px] h-[300px] flex flex-col items-center justify-center bg-cover relative bg-no-repeat bg-center md:mb-20 mb-10" style={{ backgroundImage: `url(${prodSpotlight})` }}>
                    <h1 className="font-[montserrat] font-[700] text-4xl lg:text-6xl text-white text-center pb-5 ">Products</h1>
                    <div className="max-w-[1440px] w-full px-[50px] py-[20px] absolute top-0" >
                        <BreadCrumbs />
                    </div>
                </div>




                <div className="container_layout flex md:flex-row flex-col gap-[10px]" >
                    <div className="cat-search lg:w-[20%] md:w-[25%] w-full mb-[20px]">
                        <h3 className="font-[inter] font-[500] lg:text-[18px] text-[16px] border-b-1 pb-[10px]">Search by category</h3>
                        <div className="checkbox-cat flex flex-col md:mt-[30px] mt-[20px]">
                            <div className="chkbox flex flex-row gap-2">
                                <input type="checkbox" name="coverCases" id="coverCases" />
                                <label for="coverCases" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'>Cover & Cases</label>

                            </div>
                            <div className="chkbox flex flex-row gap-2 my-[20px]">
                                <input type="checkbox" name="powerBanks" id="powerBanks" />
                                <label for="powerBanks" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'>Power Banks</label>

                            </div>
                            <div className="chkbox flex gap-2 flex-row">
                                <input type="checkbox" name="belts" id="belts" />
                                <label for="belts" className='font-[inter] font-[500] lg:text-[15px] text-[12px]'>Stand & Straps</label>

                            </div>


                        </div>
                    </div>
                    <div className="flex lg:w-[80%] md:w-[75%] w-full flex-wrap justify-center items-center gap-[20px] md:mb-[100px] mb-10">
                        {
                            loader ?
                                (<Loader />)
                                : error ?
                                    (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                    (
                                        prodData.map(elem => <ProductCard
                                            urlToProd={elem.slug}
                                            key={elem.id}
                                            boxWidth={"lg:w-[30%] md:w-[46%]"}
                                            name={elem.name}
                                            price={elem.price.sale_price}
                                            featImg={elem.feat_img}
                                            prodCat={elem.category}
                                        />
                                        )
                                    )
                        }
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Products