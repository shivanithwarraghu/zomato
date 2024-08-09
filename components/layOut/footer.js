import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return(
    <footer className='text-white-100 sticky top-0 z-0 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font'>
      <div className='container mx-auto flex flex-wrap  flex-row items-center'>
        <Link href='/' className='flex title-font font-extrabold items-center uppercase text-gray-100'>
          <Image alt='Navbar Logo' src={'/Pizza.svg'} width={60} height={60} />
          <p className='leading-5 text-xl mx-2'>pizza wizza</p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Pizza Wizza
        </p>
      </div>
    </footer>
  )
}

export default Footer