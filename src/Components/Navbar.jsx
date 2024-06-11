// import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='min-w-screen h-auto  p-8'>
        <nav className='rounded-xl flex justify-between'>
            <div>
                <NavLink to="/"><h3 className='text-3xl text-white font-bold cursor-pointer'>AB</h3></NavLink>
            </div>
            <div>
                <ul className='text-xl flex gap-5 font-semibold'>
                    <NavLink
                    className={({isActive})=>`${isActive?"text-yellow-700":"text-white"} cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
                    to="/">Home</NavLink>
                    <NavLink className={({isActive})=>`${isActive?"text-yellow-700":"text-white"} cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
                    to="/About">About</NavLink>
                    <NavLink className={({isActive})=>`${isActive?"text-yellow-700":"text-white"} cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
                    to="/Skills">Skills</NavLink>
                    <NavLink className={({isActive})=>`${isActive?"text-yellow-700":"text-white"} cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
                    to="/Projects">Projects</NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar