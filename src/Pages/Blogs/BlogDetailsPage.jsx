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
            <h1 className=''>{blogData.blogTitle}</h1>
            <img src={blogData.blogImages.featuredImg} alt="spot Image" />
            <p className="">{blogData.blogDetailedDescription}</p>

          </div>
        </div>
      </>
      )



  )
}

export default BlogDetailsPage