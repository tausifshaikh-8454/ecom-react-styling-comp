import React from 'react'
import Slider from '../../components/Slider/Slider'
import about from '../../assets/about-page/about-spotlight.webp'



const About = () => {
  

  return (
    <div className="m-auto lg:w-[100%] pb-10 lg:mb-[50px] flex flex-col items-center">

      
      <div className="bg-center bg-cover bg-no-repeat w-full h-[350px] lg:h-[500px] flex flex-col justify-center" style={{backgroundImage : `url(${about})`}} >
        <h1 className="font-[Montserrat] text-3xl text-white lg:text-6xl font-bold text-center pb-5">About Us</h1>
      </div> 
      <div className="container_layout int-para mt-10 lg:mt-20 flex flex-col gap-3 " >
        <p className='font-[montserrat] font-normal text-lg text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.</p>
        <p className='font-[montserrat] font-normal text-lg text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.</p>
        <p className='font-[montserrat] font-normal text-lg text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.</p>
        
      </div>
      

    </div>

  )
}

export default About