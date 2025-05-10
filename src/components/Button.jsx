import React from 'react'

const Button = ({
    text = "Dummy Text",
    borderClr = 'border-black',
    bgClr = "bg-black",
    textClr = "text-white",
    hoverBgClr = "bg-white",
    hoverTextClr = "text-black"
}) => {
    return (
        <button
            className={`font-[Montserrat] text-[16px] sm:text-lg  transition-all flex justify-center items-center px-[10px] py-[7px] sm:px-[10px] sm:py-[10px] border ${borderClr} ${bgClr} ${textClr} hover:${hoverBgClr} hover:${hoverTextClr} cursor-pointer rounded-[10px] `} >
            {text}
        </button>
    )
}

export default Button;