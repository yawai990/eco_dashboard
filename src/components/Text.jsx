import React from 'react'

const Header = ({ title,capitalize, center,nobold, color, size, fs, ls, textCase }) => {
  return (
    <h1 
    style={{
      fontSize:`${size}px`
    }}
    className={`${nobold ? 'font-light':'font-semibold'}
    ${center ? 'text-center':''}
    ${capitalize ? 'capitalize':''}
     text-${color ? color:'gray-400'} ${fs ? fs:'normal'} ${textCase ? textCase :'text-medium'} 
     leading-${ls ? ls:1} dark:text-white`}
     >
      {title}
     </h1>
  )
}

export default Header