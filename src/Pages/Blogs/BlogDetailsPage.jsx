import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/SkeletonLoader';

const BlogDetailsPage = () => {

  let param = useParams()
  let blogAPI = import.meta.env.VITE_BLOG_API_KEY;
  let useBloglist = useFetch(`${blogAPI}/${param.slug}`);

  let loader = useBloglist.loader;
  let error = useBloglist.error;
  let blogData = useBloglist.data;




  return (

    loader ? (<Loader />) : error ? (console.error(error)) :
      (<>
        <div className="main-div">
          <div className="container_layout">
            <div className="mt-[250px] mb-[50px]">
              <h1 className='font-[poppins] text-3xl font-[600] text-center'>{blogData.blogTitle}</h1>
            </div>
            
            <img className='w-[100%] max-h-[700px] rounded-2xl' src={blogData.blogImages.featuredImg} alt="spot Image" />
            <p className="font-[montserrat] font-[500] text-[18px] text-[#333] my-[70px]" dangerouslySetInnerHTML={{ __html: blogData.blogDetailedDescription }} />

          </div>
        </div>
      </>
      )



  )
}

export default BlogDetailsPage