import React from 'react'
import Slider from '../../components/Slider/Slider'
import about from '../../assets/about-page/about-spotlight.webp'
import paraImg from '../../assets/about-page/business-hands-joined-together-teamwork 1.png'
import visionImg from '../../assets/about-page/vission.png'



const About = () => {


  return (
    <div className="m-auto lg:w-[100%] pb-10 lg:mb-[50px] flex flex-col items-center">


      <div className="bg-center bg-cover bg-no-repeat w-full h-[350px] lg:h-[500px] flex flex-col justify-center" style={{ backgroundImage: `url(${about})` }} >
        <h1 className="font-[Montserrat] text-3xl text-white lg:text-6xl font-bold text-center pb-5">About Us</h1>
      </div>
      <div className="container_layout" >
        <div className=" int-para lg:mt-20 flex flex-col gap-3 mt-[20px]">
          <p className='font-[montserrat] font-normal text-lg text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.</p>
          <p className='font-[montserrat] font-normal text-lg text-[#333]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure tenetur esse harum saepe aliquid temporibus aspernatur asperiores est tempore. Deserunt eum, at alias iste repellendus mollitia adipisci voluptatum! Libero.</p>
        </div>

        <div className="flex flex-col md:flex-row my-[30px] gap-[30px]" >
          <div className="border-5 border-[#949494] rounded-[10px] w-[50%] p-[20px] bg-[#e8e8e8] hover:scale-102 transition-transform ease-in-out duration-600" >
            <h4 className="font-[poppins] font-[600] text-[22px] text-[#949494] mb-[10px]">Our Vission</h4>
            <p className="font-[montserrat] font-[400] text-[16px] text-[#949494]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente modi tenetur iusto dolores, vitae dolor odit voluptatum qui recusandae rem est magni. Quidem cumque incidunt culpa modi numquam praesentium delectus!
            Totam aspernatur commodi enim nemo aliquid impedit minima quidem, neque illo quae natus incidunt accusamus modi laudantium, necessitatibus voluptatem aliquam, eius saepe sapiente! Reiciendis suscipit fuga illum. Voluptas, illum saepe!<br/><br/>
            Molestiae alias tempore assumenda dicta obcaecati! Neque vitae facilis pariatur. Ullam nesciunt accusantium unde nemo error at qui quod eaque ab delectus ad corrupti architecto debitis, libero quibusdam? Repudiandae, nulla? Molestiae alias tempore assumenda dicta obcaecati! Neque vitae facilis pariatur. Ullam nesciunt accusantium unde nemo error at qui quod eaque ab delectus ad corrupti architecto debitis, libero quibusdam? Repudiandae, nulla?</p>
          </div>
          <div className="border-5 border-[#949494] rounded-[10px] w-[50%] p-[20px] bg-[#e8e8e8] hover:scale-102 transition-transform ease-in-out duration-600" >
            <h4 className="font-[poppins] font-[600] text-[22px] text-[#949494] mb-[10px]">Our Mission</h4>
            <p className="font-[montserrat] font-[400] text-[16px] text-[#949494]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente modi tenetur iusto dolores, vitae dolor odit voluptatum qui recusandae rem est magni. Quidem cumque incidunt culpa modi numquam praesentium delectus!
            Totam aspernatur commodi enim nemo aliquid impedit minima quidem, neque illo quae natus incidunt accusamus modi laudantium, necessitatibus voluptatem aliquam, eius saepe sapiente! Reiciendis suscipit fuga illum. Voluptas, illum saepe!<br/><br/>
            Molestiae alias tempore assumenda dicta obcaecati! Neque vitae facilis pariatur. Ullam nesciunt accusantium unde nemo error at qui quod eaque ab delectus ad corrupti architecto debitis, libero quibusdam? Repudiandae, nulla? Molestiae alias tempore assumenda dicta obcaecati! Neque vitae facilis pariatur. Ullam nesciunt accusantium unde nemo error at qui quod eaque ab delectus ad corrupti architecto debitis, libero quibusdam? Repudiandae, nulla?</p>
          </div>
          
        </div>

        <div className="flex  my-[50px] flex-col md:flex-row">
          <div className="w-[60%] pr-[30px]">
            <h3 className='font-[poppins] font-[600] text-[22px]/[28px] mb-[15px]'>Our Journey</h3>
            <p className="font-[montserrat] font-[400] text-[18px] text-[#333]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi soluta ipsam blanditiis, aut qui repudiandae eos mollitia esse numquam impedit sapiente consequatur suscipit amet officia omnis alias ipsa! Libero, odio!
              Voluptatibus dolorem voluptatem quaerat rem amet perferendis dignissimos reiciendis facilis deserunt eius nobis sint vitae dolore labore quae quidem sequi explicabo aut nam, in nemo repellat cupiditate optio! Recusandae, quam.
              Assumenda debitis necessitatibus dignissimos hic maxime, rem labore enim odit cupiditate vel nemo consectetur minima ut. Amet error iste commodi, quod debitis omnis nobis vel possimus quam qui accusantium. Distinctio.</p><br/>
            <p className="font-[montserrat] font-[400] text-[18px] text-[#333]">Sint eius laborum, possimus asperiores quo expedita optio! Sequi corrupti, maxime eaque quis veniam dicta, nihil tempore ea aspernatur consequuntur iusto harum repellat expedita quod fuga, est delectus alias ipsum.
              Sint eius laborum, possimus asperiores quo expedita optio! Sequi corrupti, maxime eaque quis veniam dicta, nihil tempore ea aspernatur consequuntur iusto harum repellat expedita quod fuga, est delectus alias ipsum.</p>
          </div>
          <img className='w-[40%] h-[500px] float-right rounded-[10px]' src={paraImg} alt="" />
        </div>

        

      </div>


    </div>

  )
}

export default About