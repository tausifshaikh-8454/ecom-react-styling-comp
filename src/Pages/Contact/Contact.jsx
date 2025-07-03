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
                  <h5 className="font-[inter] font-bold text-[16px]">Location Address</h5>
                  <p className='font-[inter] font-regular text-[16px]'>Shop No. 2, near Cement Bridge, Baramulla, Jammu and Kashmir 193101</p>
                </div>
                <div className="border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <h5 className="font-[inter] font-bold text-[16px]">Connect over call</h5>
                  <a className='font-[inter] font-regular text-[16px]' href="tel:+91 8454896170">+91 84548-96170</a>
                </div>
                <div className="border-solid border-2 border-gray-100 py-[10px] px-[20px] rounded-xl">
                  <h5 className="font-[inter] font-bold text-[16px]">Contact via mail</h5>
                  <a className='font-[inter] font-regular text-[16px]' href="mailto:tausif8454@gmail.com">tausif8454@gmail.com</a>
                </div>
              </div>
              <iframe className="w-[100%] md:w-[50%] h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8908350351486!2d74.34184322233432!3d34.20863162896153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427a1554541875c5%3A0x767cf96bc9f82add!2sBeyond%20Basic%20Home!5e0!3m2!1sen!2sin!4v1750772833106!5m2!1sen!2sin" />
            </div>
            <div className="">

              <form action="#" className="w=[100%] md:w-[50%] m-auto mb-20 space-y-5">
                <div>
                  <label for="email" className="block mb-2 font-[inter] text-[16px] font-medium text-black dark:text-gray-300">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-[0] block w-full p-2.5 font-[inter] font-regular text-[16px]" placeholder="name@flowbite.com" required />
                </div>
                <div>
                  <label for="subject" className="block font-[inter] mb-2 text-[16px] font-medium text-black dark:text-gray-300">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus-visible:outline-[0] font-[inter] font-regular text-[16px]" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 font-[inter] text-[16px] font-medium text-black">Your message</label>
                  <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 font-[inter] focus-visible:outline-[0] font-regular text-[16px]" placeholder="Leave a messege..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-lg text-center text-white rounded-lg bg-[#1E2D3B] cursor-pointer sm:w-fit hover:bg-[#1e2d3bde] focus:ring-4 focus:outline-none focus:ring-primary-300">Send</button>
              </form>
            </div>
            

          </div>


        </div>

      </section>
    </div>
  )
}

export default Contact