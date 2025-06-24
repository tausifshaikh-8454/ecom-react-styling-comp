import React from 'react'
import { Link } from 'react-router-dom'

const BlogListingCard = ({ blogImage, blogTitle, blogShortDesc, urlToProd }) => {

    

    return (
        <div className="w-[100%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

            
                <img className="rounded-t-lg h-[350px] w-[100%]" src={blogImage} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 font-[poppins] font-[600] text-[22px]/[28px] text-gray-900 dark:text-white">{blogTitle.length > 50 ? blogTitle.slice(0, 50) + "..." : blogTitle}</h5>
                    <p className="mb-3 font-[montserrat] font-[400] text-[16px] text-gray-700 dark:text-gray-400">{blogShortDesc.length > 100 ? blogShortDesc.slice(0, 100) + "..." : blogShortDesc}</p>
                    <Link to={`/blogs/${urlToProd}`} >
                    <button  className='px-[25px] py-[7px] font-[montserrat] text-[14px] font-[400] border-1 border-blue-300 bg-blue-300 rounded-[10px] hover:bg-blue-500 transition-colors duration-400 hover:text-[#fff] cursor-pointer'>Read more</button>
                    </Link>
                </div>
           
        </div >
    )
}

export default BlogListingCard