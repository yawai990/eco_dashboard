import React from 'react';
import { useLocation,Link } from 'react-router-dom';

const NavLink = ({ text }) => {
    const { pathname } = useLocation();


  return (
    <Link to={`/${text}`} className='mb-3 py-2 block'>
    <li className={`duration-150 px-2 ${(pathname === '/' ? '/overview':pathname)  === `/${text}` ? 'text-primary border-r-4 border-red-500':'text-stone-700'}
     hover:text-primary hover:border-r-4
     hover:border-red-500 flex gap-5 items-center text-xl capitalize`
     }>
        <span>{text}</span>
      </li>
    </Link>
  );
}

export default NavLink