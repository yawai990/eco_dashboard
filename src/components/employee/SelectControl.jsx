import React from 'react';
import { Text } from '..';
import Select from 'react-select';

const SeleteControl = ({ title,disabled,mt, data,selectedData,name,value, setSelectedData })=>{
   
    return <div className='mt-2'>
    <Text title={title} />
    <div className={`${!mt ? 'mt-2':false}`}>
  <Select options={data} 
  defaultValue={value}
  isDisabled={disabled || false}
  onChange={e=>setSelectedData({...selectedData, [name]:e.value})} 
  theme={(theme) => ({
    ...theme,
    borderRadius: 5,
    colors: {
      ...theme.colors,
      primary25: '#FB2576',
      primary: '#FB2576',
    },
  })} />
  </div>
  </div>
}
export default SeleteControl;