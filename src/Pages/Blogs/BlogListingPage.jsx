import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/SkeletonLoader';
import BlogListingCard from '../../components/Blogs/BlogListingCard';
 


const BlogListingPage = () => {

    let blogsAPI = import.meta.env.VITE_BLOG_API_KEY;

    let useBloglist = useFetch(blogsAPI);

    let loader = useBloglist.loader;
    let error = useBloglist.error;
    let blogData = useBloglist.data;

    
    return (
        <div className="container_layout container m-auto">

            <h1 className=" text-3xl font-bold text-center pt-5 pb-5">This is the Blogs page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 pt-10 pb-10" >




                {
                    loader ?
                        (<Loader />)
                        : error ?
                            (<p className="text-red-500">Something went wrong: {error.message}</p>) :
                            (
                                blogData.map(elem => <BlogListingCard
                                    blogTitle={elem.title}
                                    key={elem.id}
                                    blogShortDesc={elem.body}
                                    
                                />
                                )
                            )
                }



                


            </div>


        </div>
    )
}

export default BlogListingPage;