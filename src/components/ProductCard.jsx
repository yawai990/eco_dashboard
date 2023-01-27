import React from 'react';
import Text from './Text';
import Button from './Button';
import { BsFillPencilFill,BsTrash } from 'react-icons/bs';

const ProductCard = ({ cardImg, cardHeader, cardPrice}) => {
  console.log(cardImg)
  return (
    <div className='h-fit border border-stone-200 rounded-md overflow-hidden'>

      <div className='w-full h-[70%]'>
        <img src={cardImg} alt="" className='w-full h-[220px] object-cover' />
      </div>

      <div className='mt-2 p-2 h-[30%]'>

        <Text title={cardHeader} size={16} />
        <Text title={`$ ${cardPrice}`} />

        <div className='flex justify-between items-center mt-2'>
            <Button btnText="edit"  btnIcon={<BsFillPencilFill />} outline  />
            <Button btnText="delete" btnBg='#FB2576' btnColor='white' btnIcon={<BsTrash />} />
        </div>
      </div> 
    </div>
  )
}

export default ProductCard