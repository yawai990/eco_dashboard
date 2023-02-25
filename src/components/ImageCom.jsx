import React from 'react'

const ImageCom = ({id}) => {
  return (
   <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1675567949/${id}`} className='w-full h-full block object-cover' />
  )
}

export default ImageCom