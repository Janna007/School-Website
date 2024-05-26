import React from 'react'
import Banner from '../components/Banner'

function Contact() {
  return (
       <>
       <Banner/>
       <div className='min-h-[400px] grid sm:grid-cols-2 bg-gray-50 '>
       <div className='flex flex-col justify-center items-center space-y-4 p-6 '>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-purple-800 mb-1'>Our Location</h1>
    <p className='text-base text-gray-600'>Kazhakutam, Thiruvananthapuram</p>
  </div>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-purple-800 mb-1'>Phone Number</h1>
    <p className='text-base text-gray-600'>876564436</p>
  </div>
  <div className='flex flex-col sm:items-start w-full max-w-md items-center'>
    <h1 className='text-xl font-semibold text-purple-800 mb-1'>Email Address</h1>
    <p className='text-base text-gray-600'>abc@gmail.com</p>
  </div>
</div>
<div className='flex flex-col justify-center items-center space-y-4 p-6 w-full max-w-md'>
  <div className='w-full'>
    
    <input 
      type='text' 
      placeholder='Enter Your Name' 
      className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-purple-500' 
    />
  </div>
  <div className='w-full'>

    <input 
      type='email' 
      placeholder='Enter Your Email' 
      className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-purple-500' 
    />
  </div>
  <div className='w-full'>
   
    <input 
      type='tel' 
      placeholder='Enter Your Phone Number' 
      className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-purple-500' 
    />
  </div>
  <div className='w-full'>
   
    <textarea 
      placeholder='Enter Your Message' 
      className='w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-purple-500 h-32' 
    />
  </div>
  <button className=' bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
    Submit
  </button>
</div>

       </div>
       </>
  )
}

export default Contact