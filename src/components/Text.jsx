import React from 'react'

const Header = ({ title, center, color, size, fs, ls, textCase }) => {
  return (
    <h1 
    style={{
      fontSize:`${size}px`
    }}
    className={`font-semibold
    ${center ? 'text-center':''}
     text-${color ? color:'gray'} ${fs ? fs:'normal'} ${textCase ? textCase :'text-medium'} 
     leading-${ls ? ls:1}`}
     >
      {title}
     </h1>
  )
}

export default Header