import React from 'react'

const InputLabel = ({ multiple,name,label,inputValue,px,py,bold, inputType,capitalize, placeholder, no_margin , no_border}) => {
  return (
    <div className='w-full md:min-w-[50%] mb-2'>
    <label htmlFor={name} className={`w-full ${!no_margin && 'mb-2'} block text-lg tracking-wider font-semibold capitalize`}>{label}</label>
    <input name={name} id={name}
    multiple
     type={inputType} placeholder={placeholder}
     min={1}
     defaultValue={inputValue}
     className={`w-full block outline-none ${capitalize && 'capitalize'} ${bold && 'font-semibold'} ${!px && 'px-2'} ${!py && 'py-1'} rounded bg-transparent font-thin font-serif ${!no_border && 'border border-neutral-400'} placeholder:capitalize tracking-wider focus:border-primary`}
      />
  </div>
  )
}

export default InputLabel