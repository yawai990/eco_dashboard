import React from 'react'

const Loading = () => {
  return (
      <div className="w-full h-[80vh] relative flex justify-center items-center">
          <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full duration-1000 bg-sky-400 opacity-75"></span>
        <div className='w-16 h-16 rounded-full bg-sky-500'></div>
      </div>
  )
}

export default Loading