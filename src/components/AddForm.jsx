import React from 'react';
import Text from './Text';
import InputLabel from './InputLabel';
import Button from './Button';
import { TiTimes } from 'react-icons/ti';

const AddForm = ({handleForm}) => {
  const handleSubmit = e =>{
    e.preventDefault();

    const element = e.target.elements;

    const productName = element.p_name.value;
    const productBrand = element.p_brand.value;
    const productCategory = element.p_category.value;
    const productPrice = element.p_price.value;
    const productImages = element.p_image.value;

    const productData ={productName,productBrand,productCategory,productPrice,productImages};

    console.log(productData);

    //clean out the input value
    element.p_name.value = '';
    element.p_brand.value = '';
    element.p_category.value = 'DEFAULT';
    element.p_price.value = '';
    element.p_image.value = '';

    handleForm()
  }
  return (
    <div className='w-full h-full absolute top-0 left-0 bg-[rgba(23,23,23,0.8)] z-20 py-5'>
      <div>
          <Text title='what will be your new products?' size={25} center textCase='capitalize' color='white' />

      <form onSubmit={handleSubmit}
      className='w-[70%] xs:w-[90%] md:w-[40%] mx-auto border border-stone-300 bg-white rounded mt-5 p-3'>
               <div className='h-[5%] px-3 text-[36px] flex justify-end items-center'>
          <Button btnText={<TiTimes />} btnColor={'white'} btnBg={'#FB2576'} rectangle size={17} rounded shadow btnfun={handleForm} />
          </div>

            <InputLabel label={'product name'} placeholder='new product name' name='p_name' inputType={'text'} />

            <div className='w-full flex justify-between items-center flex-col md:flex-row gap-2'>
            <InputLabel label={'brand'} placeholder="new product's brand" name='p_brand' inputType={'text'} />
         
            <div className='w-full md:w-[50%] h-full'>
              <label htmlFor="p_category" className='w-full mb-2 block text-lg tracking-wider font-semibold capitalize'>Category</label>
              <select name="p_category" id="p_category"
              defaultValue={'DEFAULT'}
               className='w-full h-[34px] mb-2 block outline-none px-2 py-1 rounded bg-transparent border font-thin font-serif border-neutral-400 placeholder:capitalize tracking-wider focus:border-primary'>
                <option value='DEFAULT' disabled>Category</option>
                <option value={0}>Fashion</option>
                <option value={1}>Furniture</option>
                <option value={2}>Electronic</option>
              </select>
            </div>
            </div>

            <InputLabel label={'price'} placeholder="new product's price" name='p_price' inputType={'number'} />


            <div>
          <label htmlFor="p_desc" className='w-full mb-2 block text-lg tracking-wider font-semibold capitalize'>Description</label>
            <textarea id='p_desc'
            placeholder='Product Description' 
            cols={12}
            className='w-full mb-2 block outline-none px-2 py-1 rounded bg-transparent border font-thin font-serif border-neutral-400 placeholder:capitalize tracking-wider focus:border-primary' />
            </div>

            <InputLabel label={'product image'} placeholder='new product Image' name='p_image' inputType={'file'} multiple />

            <div className='mt-4'>
            <Button btnText='add new product' btnBg='#FB2576' btnColor={'white'} />
            </div>
              
      </form>
      </div>
    </div>
  )
}

export default AddForm