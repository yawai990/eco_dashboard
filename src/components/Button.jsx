import React from 'react'

const Button = ({ disabled, btnType, btnIcon,rectangle,size,borderBottom,bold, btnText, btnfun, btnColor, btnBg,outline, rounded, shadow }) => {
    
  return (
   <button
   type={btnType}
   onClick={btnfun} 
   style={{
    background : btnBg,
    fontSize:`${size}px`
   }}
   disabled={disabled}
   className={`${disabled ? 'cursor-not-allowed':'cursor-pointer'}
   text-${btnColor} flex gap-2 items-center 
   ${rectangle ? `p-1` : 'py-1 px-3'}
   ${bold && 'font-semibold'}
   ${borderBottom && 'border-b-2 border-blue-400'}
   ${(outline && !disabled)  && `border border-stone-200 hover:bg-[#FB2576] hover:text-white`} 
   capitalize
    ${rounded ? 'rounded-full':'rounded-md'} ${shadow & 'drop-shadow'}
    `}
  >
    {btnIcon}
    {btnText}
    </button>
  )
}

export default Button