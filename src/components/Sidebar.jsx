import React from 'react';
import Text from './Text';
import { navLinkLists, businessLinks } from '../constants';
import NavLink from './NavLink';

const RenderLink = ({Links}) => Links.map(link => <NavLink key={link.id} text={link.name} path={link.path} />);


const Sidebar = () => {
  return (
    <div className='w-[20%] bg-white flex justify-center items-center'>
    <nav className='w-full h-[95%] border-r-2 border-stone-400 flex flex-col justify-start items-start pl-6'>

      <div className='w-full py-4 flex items-center gap-4'>
        <img
        className='w-10 h-10 object-cover'
         src="data:image/png;base64,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" alt="" />
         <Text 
         title='shoppy'
         color='text-primary' ls={4} fs='italic' 
         size={22} textCase='capitalize'
          />
      </div>

        <div className='w-full mt-4'>
        <Text 
        title='menu' 
        color='text-stone-500' 
        size={18} textCase='capitalize'
         />

        <ul className='mt-4'>
          <RenderLink Links={navLinkLists} />
        </ul>
        </div>

        <div className='w-full mt-4'>
        <Text 
        title='business' 
        color='text-stone-500' 
        size={18} textCase='capitalize'
         />

        <ul className='mt-4'>
          <RenderLink Links={businessLinks} />
        </ul>
        </div>

    </nav>
    </div>
  )
}

export default Sidebar