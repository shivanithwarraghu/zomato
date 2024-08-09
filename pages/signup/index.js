import React from 'react'
import Link from 'next/link'

const Login = () => {
    const handleSubmit = (e)=>{
        e.prevent.default()
    }
    return (
    <div style={{
        height: '90vh',
        backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover'
    }}
    className='flex justify-center items-center'
    >
        <div className='w-full max-w-md'>
            <form onSubmit={handleSubmit}
            className="bg-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
            <div className="mb-4">
                <label className="block text-gray-700   text-sm font-bold mb-2">Name</label>
                <input
                name='name'
                placeholder='Enter Name'
                type='text'
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className='mb-4'>
                <label className="block text-gray-700   text-sm font-bold mb-2">Email</label>
                <input
                name='email'
                placeholder='Enter Email'
                type='text'
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className='mb-4'>
                <label className="block text-gray-700   text-sm font-bold mb-2">Password</label>
                <input
                name='pwd'
                placeholder='Enter password'
                type='password'
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className='mb-4'>
                <label className="block text-gray-700   text-sm font-bold mb-2">Address</label>
                <input
                name='address'
                placeholder='address'
                type='text'
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700   leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between"></div>
            <button
            type="submit"
            className="border text-gray-900  font-bold border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
          >
            signup
          </button>
          <Link href={"/login"} style={{ all: "unset" }}>
            <button className="border text-gray-900 font-bold  border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
              Aleady a User?
            </button>
          </Link>
            </form>
        </div>
    </div>
    )
}

export default Login