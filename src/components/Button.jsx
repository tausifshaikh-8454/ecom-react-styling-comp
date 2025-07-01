import React from 'react'

const Button = ({
    text = "Dummy Text",
    borderClr = 'border-black',
    bgClr = "bg-white",
    textClr = "text-black",
    hoverTextClr = "text-[#fff]"
}) => {
    return (
        <button
            className={`w-[260px] font-[inter] font-medium text-[16px] transition-all flex justify-center items-center py-[16px] border ${borderClr} ${bgClr} ${textClr} hover:bg-[#000] hover:${hoverTextClr} cursor-pointer rounded-[10px] `} >
            {text}
        </button>
    )
}

export default Button;