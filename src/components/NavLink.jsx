import React from 'react';
import { useLocation,Link } from 'react-router-dom';

const NavLink = ({ text,title, size, nomb,py_0, nohover }) => {
    const { pathname } = useLocation();

  return (
    <Link to={`/${text}`} className={`${!nomb && 'mb-3'} ${!py_0 && 'py-2'} block`}>
    <li className={`duration-150 px-2 
    ${(pathname === '' ? '/overview':pathname.split('/')[1])  === text ? 
    'text-primary border-r-4 border-red-500':'text-stone-700'
  } 
    ${!nohover && `hover:border-red-500 hover:border-r-4` }
    hover:text-primary 
      flex gap-5 items-center ${size ? size:'text-xl'} capitalize`
     }>
        <span>{title || text}</span>
      </li>
    </Link>
  );
}

export default NavLink