import React, { useState, useEffect } from 'react';
import Button from './Button';
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const Pagination = ({ current, total, pagiFun }) => {
  const [ disabled, setDisabled ] = useState({ prev : true, next : false});
 
  useEffect(() =>{
    if(current === 1 ){
      setDisabled({ next : false,prev : true})
    }else if(Number(current) === Number(total)){
      setDisabled({prev : false,next : true})
    }
  }, [current]);

  return (
    <div className='flex gap-2 items-center'>
      <Button disabled={disabled.prev} btnIcon={<IoIosArrowBack />} outline rectangle />
      {
        Array.from({ length : total}).map((_,idx) => <Button 
        key={`paginationBtn-${idx}`}
        btnBg={current === idx + 1 && '#FB2576'} 
        btnColor={current === idx + 1 && 'white'}  
        btnText={idx + 1} outline rectangle 
        btnfun={() => pagiFun(idx+1)}
        />)
      }
      <Button disabled={disabled.next} btnIcon={<IoIosArrowForward />} outline rectangle />
    </div>
  )
}

export default Pagination