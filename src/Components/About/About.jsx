// import React from 'react'
import logo from '../../assets/me.png';

const About = () => {
  const personalInfo = {
    name: 'Aman Bhardwaj',
    dateOfBirth: 'October 5, 1999',
    address: 'V.P.O. Mundhela Khurd, New Delhi',
    zipCode: '110073',
    email: 'aman0599.work@gmail.com',
    phone: '8178954645',
  };

  return (
    <div className='text-white mt-5 min-h-[72.8vh] w-screen h-full p-10 flex items-center'>
      <div className=''>
        <img className='h-[50vh]' src={logo} alt="Logo" />
      </div>
      <div className='info'>
        <h1 className='text-white text-3xl mb-4'>About Me</h1>
        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestias!</p>
        <table className='min-w-full border-collapse'>
          <tbody>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Name:</td>
              <td className='p-2'>{personalInfo.name}</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Date of Birth:</td>
              <td className='p-2'>{personalInfo.dateOfBirth}</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Address:</td>
              <td className='p-2'>{personalInfo.address}</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Zip Code:</td>
              <td className='p-2'>{personalInfo.zipCode}</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Email:</td>
              <td className='p-2'>{personalInfo.email}</td>
            </tr>
            <tr className='border-b'>
              <td className='p-2 font-bold'>Phone:</td>
              <td className='p-2'>{personalInfo.phone}</td>
            </tr>
          </tbody>
        </table>
          <h2 className='text-3xl flex gap-2 mt-5 mb-4'>
            <span className='text-yellow-500 font-bold'>
              10
            </span>
          Projects Completed
          </h2>
          <a
          href="src/assets/CV.pdf"
          download="CV.pdf"
          className='text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5'
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}

export default About;
