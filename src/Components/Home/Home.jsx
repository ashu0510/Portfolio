// import React from 'react'
import logo from '../../assets/me.png'; 

const Home = () => {
  return (
    <>
    <div className='text-white mt-5 min-h-[72.8vh] w-screen h-full px-28 flex items-center justify-between '>
        <div className=''>
            <h4 className='text-yellow-500 mb-5'>Hello!</h4>
            <h2 className='text-8xl mb-5'>I&apos;m <span className='text-yellow-500'>Aman Bhardwaj</span></h2>
            <h3 className='mb-5 text-2xl'>Data Analyst</h3>
            <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>Hire Me</button>
            <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'>My Works</button>
        </div>
        <div>
        <img className='h-[50vh]' src={logo} alt="Logo" />
        </div>
    </div>
    </>
  )
}

export default Home