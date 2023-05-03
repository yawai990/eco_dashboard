import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import Text from './Text';
import Button from './Button';
import { BsFillPencilFill,BsTrash } from 'react-icons/bs';

const ProductCard = ({ cardDiscount,productID,cardId,cardImg,cardStock, cardHeader,cardRating, cardPrice, cardDeleteFun }) => {

  return (
    <div className='h-fit border border-stone-200 rounded-md overflow-hidden'>

          <div className='w-full h-[70%]'>
        <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1675503460/${cardImg}`} alt="" className='w-full h-[220px] object-cover' />
      </div>

      <div className='mt-2 p-2 h-[30%]'>

        <div className="flex justify-between items-centre">
        <Text title={cardHeader} size={16} />

        <div className="px-2 flex items-center gap-1">
        <Text title={'Stock'} size={16} />
        <div className="px-2 rounded-full bg-primary text-white">
        <Text title={cardStock} size={14} color='white' />
        </div>
        </div>
        </div>
        
        <div className="flex justify-between items-center">
        <Text title={`$ ${cardPrice}`} />
        <Text title={`${cardDiscount ? `${cardDiscount}% OFF`:''}`} color={'red-500'} size={12} />
        </div>
        <ReactStars count={5} value={cardRating} edit={false} />

        <div className='flex justify-between items-center mt-2'>
          <Link to={`/products/${productID}`}>
            <Button btnText="edit"  btnIcon={<BsFillPencilFill />} outline  />
          </Link>
            <Button btnText="delete" btnBg='#FB2576' btnColor='white' btnIcon={<BsTrash />} btnfun={() =>cardDeleteFun(cardId,JSON.parse(localStorage.getItem('userInfo')).token)} />
        </div>
      </div> 
    </div>
  )
}

export default ProductCard