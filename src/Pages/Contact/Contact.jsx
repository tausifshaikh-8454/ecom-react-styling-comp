import React from 'react'
import contact from '../../assets/Contact/contactUs.webp'

const Contact = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="m-auto" >
          <div className="h-[500px] bg-cover bg-no-repeat bg-center flex flex-col justify-center px-4" style={{ backgroundImage: `url(${contact})` }}>
            <h2 className="mb-4 text-4xl lg:text-6xl tracking-tight font-[montserrat] font-[700] text-center text-white dark:text-white">Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-normal font-[montserrat] text-center text-[#fff] dark:text-gray-400 sm:text-md"></p>
          </div>


          <div className="container_layout" >
            <div className="w-[100%] flex flex-col-reverse md:flex-row justify-center gap-[50px] lg:gap-[75px] my-20">
              <div className="w=[100%] md:w-[50%] flex flex-col gap-[20px] md:gap-[40px] ">
                <div className="border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <h5 className="font-[poppins] font-[500] text-[16px]">Location Address</h5>
                  <p className='font-[montserrat] font-normal text-[14px] mt-2'>Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101</p>
                </div>
                <div className="border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <h5 className="font-[poppins] font-[500] text-[16px]">Connect over call</h5>
                  <p className='font-[montserrat] font-normal text-[14px] mt-2'>+91 12345 67890</p>
                </div>
                <div className="border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <h5 className="font-[poppins] font-[500] text-[16px]">Contact via mail</h5>
                  <p className='font-[montserrat] font-normal text-[14px] mt-2'>test@gmail.com</p>
                </div>
              </div>
              <form action="#" className="space-y-8 w=[100%] md:w-[50%]">
                <div>
                  <label for="email" className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div>
                  <label for="subject" className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-[16px] font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-lg text-center text-white rounded-lg bg-[#1E2D3B] cursor-pointer sm:w-fit hover:bg-[#1e2d3bde] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
            </div>
          </div>
          <div className="">
            <iframe className="w-[100%] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8908350351486!2d74.34184322233432!3d34.20863162896153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427a1554541875c5%3A0x767cf96bc9f82add!2sBeyond%20Basic%20Home!5e0!3m2!1sen!2sin!4v1750772833106!5m2!1sen!2sin" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact