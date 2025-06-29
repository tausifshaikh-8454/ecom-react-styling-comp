import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import '../../components/layout.css'
import Loader from '../../components/Loader/SkeletonLoader'
import useFetch from '../../hooks/useFetch'
import prodSpotlight from '../../assets/prodListing/productSpot.webp'



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
            <div className="mx-auto flex justify-center items-center flex-col"  >
                <div className="w-[100%] h-[500px] flex items-center justify-center bg-cover bg-no-repeat bg-center mb-20" style={{ backgroundImage: `url(${prodSpotlight})` }}>
                    <h1 className="font-[montserrat] font-[700] text-4xl lg:text-6xl text-white text-center pb-5 ">Products</h1>
                </div>


                <div className="container_layout flex flex-row" >
                    <div className="cat-search w-[20%]">
                        <h3 className="font-[inter] font-[500] text-[18px] border-b-1 pb-[10px]">Search by category</h3>
                        <div className="checkbox-cat flex flex-col mt-[30px]">
                            <div className="chkbox flex flex-row gap-2">
                                <input type="checkbox" name="coverCases" id="coverCases" />
                                <label for="coverCases" className='font-[inter] font-[500] text-[15px]'>Cover & Cases</label>
                                
                            </div>
                            <div className="chkbox flex flex-row gap-2 my-[20px]">
                                <input type="checkbox" name="powerBanks" id="powerBanks" />
                                <label for="powerBanks" className='font-[inter] font-[500] text-[15px]'>Power Banks</label>
                                
                            </div>
                            <div className="chkbox flex gap-2 flex-row">
                                <input type="checkbox" name="belts" id="belts" />
                                <label for="belts" className='font-[inter] font-[500] text-[15px]'>Stand & Straps</label>
                                
                            </div>


                        </div>
                    </div>
                    <div className="flex w-[80%] flex-wrap justify-center items-center gap-[20px] mb-[100px]">
                        {
                            loader ?
                                (<Loader />)
                                : error ?
                                    (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                    (
                                        prodData.map(elem => <ProductCard
                                            urlToProd={elem.slug}
                                            key={elem.id}
                                            boxWidth={"w-[30%]"}
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