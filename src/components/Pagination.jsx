import React from 'react';
import Button from './Button';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const Pagination = () => {
  return (
    <div className='flex gap-2 items-center'>
      <Button btnIcon={<IoIosArrowBack />} outline rectangle />
      <Button btnText={1} outline rectangle />
      <Button btnIcon={<IoIosArrowForward />} outline rectangle />
    </div>
  )
}

export default Pagination