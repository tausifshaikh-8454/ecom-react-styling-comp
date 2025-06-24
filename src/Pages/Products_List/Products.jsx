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
                <div className="w-[100%] h-[500px] flex items-center justify-center bg-cover bg-no-repeat bg-center mb-20" style={{backgroundImage:`url(${prodSpotlight})`}}>
                    <h1 className="font-[montserrat] font-[700] text-4xl lg:text-6xl text-white text-center pb-5 ">Products</h1>
                </div>
                

                <div className="container_layout flex w-full flex-wrap justify-center items-center gap-[20px] " >

                    {
                        loader ?
                            (<Loader />)
                            : error ?
                                (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                                (
                                    prodData.map(elem => <ProductCard
                                        urlToProd={elem.slug}
                                        key={elem.id}
                                        boxWidth={"w-[25%]"}
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
    )
}

export default Products