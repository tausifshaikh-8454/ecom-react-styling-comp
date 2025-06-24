import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/Loader/SkeletonLoader';
import BlogListingCard from '../../components/Blogs/BlogListingCard';
import blogSpot from '../../assets/blog/blogSpot.png'



const BlogListingPage = () => {

    let blogsAPI = import.meta.env.VITE_BLOG_API_KEY;
    let useBloglist = useFetch(blogsAPI);
    let loader = useBloglist.loader;
    let error = useBloglist.error;
    let blogData = useBloglist.data;




    return (
        <div className="w-[100%]">
            <div className="w-[100%] h-[500px] flex items-center justify-center bg-cover bg-no-repeat bg-bottom mb-20" style={{ backgroundImage: `url(${blogSpot})` }}>
                <h1 className="font-[montserrat] font-[700] text-4xl lg:text-6xl text-white text-center pb-5 ">Our Blogs</h1>

            </div>



            <div className="container_layout">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-[100px] w-[1200px] m-auto">
                    {
                        loader ?
                            (<Loader />)
                            : error ?
                                (<p className="text-red-500">Something went wrong: {error.message}</p>) :


                                (
                                    blogData.map((elem, index) => <BlogListingCard
                                        blogTitle={elem.blogTitle}
                                        key={index}
                                        blogShortDesc={elem.blogShortDescription}
                                        blogImage={elem.blogImages.featuredImg}
                                        urlToProd={elem.slug}
                                    />
                                    )

                                )

                    }

                </div>


            </div>


        </div>
    )
}

export default BlogListingPage;