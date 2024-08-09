import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className='text-white-100 sticky top-0 z-0 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font'>
      <div className='container mx-auto flex flex-wrap p-3 flex-row items-center justify-between'>
        <Link href='/' className='flex title-font font-extrabold items-center uppercase text-gray-100'>
          <Image alt='Navbar Logo' src={'/Pizza.svg'} width={60} height={60} />
          <p className='leading-5 text-xl mx-2'>Ashish's Pizza Center</p>
        </Link>
        <nav className='flex flex-wrap items-center text-base justify-center'>
          <Link href='/orders' className='text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center'>
            My Orders
            <FontAwesomeIcon icon={faClipboardList} className='w-4 h-4 mx-1' />
          </Link>
          <Link href='/cart' className='text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center'>
            Cart
            <FontAwesomeIcon icon={faShoppingCart} className='w-4 h-4 mx-1' />
            <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 shadow-[0_0_15px_1px_rgba(220,38,38)]  ring-inset ring-red-600/10">
             0
            </span> 
          </Link>
          <Link href='/login' className='text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center'>
            Login
            <FontAwesomeIcon icon={faSignInAlt} className='w-4 h-4 mx-1' />
          </Link>
          <Link href='/signup' className='text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center'>
            Signup
            <FontAwesomeIcon icon={faUserPlus} className='w-4 h-4 mx-1' />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
