import React from 'react'
import Banner from '../components/Banner'

function About() {
  return (
    <>
       <Banner headerText="About Us" paraText="Home- About Us"  />
        <div className='min-h-[400px] grid sm:grid-cols-2'>
          <div className='flex flex-col justify-center items-center p-6 gap-4 space-y-4'>
            <h1 className='text-4xl font-extrabold text-purple-600'>KIDS - DAY  CARE </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cum voluptates. Voluptatum debitis nulla assumenda. Unde obcaecati excepturi, provident tempore molestias ipsam, magnam earum harum voluptas enim in nisi quibusdam.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem, provident, sint pariatur, in ex incidunt dolorem alias obcaecati reprehenderit error? Eligendi illum asperiores aut? Officia atque reiciendis laboriosam error menda. Unde obcaecati excepturi, provident tempore molestias ipsam, magnam earum harum voluptas enim in nisi quibusdam.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem, provident, sint pariatur, in ex incidunt dolorem alias obcaecati reprehenderit error? Eligendi illum asperiores aut? Officia atque reiciendis laboriosam error!</p>
          </div>
          <div className='flex justify-center items-center p-6'>
          <img 
            className='w-full max-w-md h-auto ' 
            src='https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600' 
            alt='school'
          />
         </div>
        </div>
     
     <div className='min-h-[200px] bg-purple-100 grid sm:grid-cols-3'>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>20</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Facility</h2>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>8</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Staff</h2>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center m-4'>
      <h1 className='text-6xl font-extrabold text-yellow-600'>10</h1>
  <h2 className='text-2xl font-semibold text-gray-700'>Experience</h2>
      </div>
     </div>

     <div className='min-h-[400px] grid sm:grid-cols-2 gap-4 p-4 m-12'>
     
  <div className='m-6 p-4 bg-gradient-to-r from-yellow-400 to-purple-500 min-h-[50px] min-w-[40px] flex flex-col justify-center items-start text-lg font-semibold rounded shadow-lg'>
    <h1 className='text-3xl font-bold text-purple-600 mb-4 font-serif'>Qualified and Caring Staff</h1>
    <p className="text-lg text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolor odit ea aliquid repellat quia, magnam voluptatum id, sed praesentium eaque. Asperiores provident quasi beatae necessitatibus a eligen di consequatur voluptate.</p>
  </div>
  <div className='m-6 p-4 bg-gradient-to-r from-yellow-400 to-purple-500 min-h-[50px] min-w-[40px] flex flex-col justify-center items-start text-lg font-semibold rounded shadow-lg'>
  <div>
  <h1 className="text-3xl font-bold text-purple-600 mb-4 font-serif" >Engaging Curriculum</h1>
  <p className="text-lg text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolor odit ea aliquid repellat quia, magnam voluptatum id, sed praesentium eaque. Asperiores provident quasi beatae necessitatibus a eligen di consequatur voluptate.</p>
</div>
  </div>
  <div className='m-6 p-4 bg-gradient-to-r from-yellow-400 to-purple-500 min-h-[50px] min-w-[40px] flex flex-col justify-center items-start text-lg font-semibold rounded shadow-lg'>
    <h1 className='text-3xl font-bold text-purple-600 mb-4 font-serif'>Flexible Scheduling Options</h1>
    <p className="text-lg text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolor odit ea aliquid repellat quia, magnam voluptatum id, sed praesentium eaque. Asperiores provident quasi beatae necessitatibus a eligen di consequatur voluptate.</p>
  </div>
  <div className='m-6 p-4 bg-gradient-to-r from-yellow-400 to-purple-500 min-h-[50px] min-w-[40px] flex flex-col justify-center items-start text-lg font-semibold rounded shadow-lg'>
    <h1 className='text-3xl font-bold text-purple-600 mb-4 font-serif'>Stimulating Play Spaces</h1>
    <p className="text-lg text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolor odit ea aliquid repellat quia, magnam voluptatum id, sed praesentium eaque. Asperiores provident quasi beatae necessitatibus a eligen di consequatur voluptate.</p>
  </div>
</div>



    </>
  )
}

export default About