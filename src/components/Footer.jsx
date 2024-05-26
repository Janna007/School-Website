import React from 'react'

function Footer() {
  return (
   <>
   <div className='min-h-[500px]'>

   <div className='min-h-[100px] bg-purple-300 grid sm:grid-cols-12'>
  <div className='sm:col-span-4 flex justify-center items-center'>
    <h1 className='text-2xl text-white font-bold'>Subscribe to our newsletter</h1>
  </div>
  <div className='sm:col-span-8 flex justify-center items-center'>
    <input className='px-12 py-4 border border-gray-400 rounded-lg outline-none focus:border-purple-500' placeholder='Enter your email...' id='mail' />
    <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg m-4'>Subscribe</button>
  </div>
</div>


    <div className='min-h-[350px] bg-purple-400 grid sm:grid-cols-12 '>
      <div className='sm:col-span-3 flex flex-col justify-center items-center m-4'>
        <div className=''>
        <img className="h-20 w-26" src="https://t4.ftcdn.net/jpg/05/06/60/87/240_F_506608769_dJDa5BUUeZdklFICN9VIHCq3WSZziKGA.jpg" alt="Workflow" />
        </div>
        <div>
         <p className='max-w-[250px] p-4 text-purple-800'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis unde, ullam sed quae eum quia animi? Adipisci, deserunt veniam! Vero aliquid dignissimos doloremque. Quisquam architecto ipsam praesentium. Nihil, aliquam quo.
         </p>
        </div>
      </div>
      <div className='sm:col-span-3 flex justify-center items-center flex-col gap-y-4 '>
       
      <h1 className='text-3xl font-bold text-purple-800 mb-4'>Quick links</h1>
  <h3 className='text-lg font-semibold text-purple-600'>About</h3>
  <h3 className='text-lg font-semibold text-purple-600'>Services</h3>
  <h3 className='text-lg font-semibold text-purple-600'>Gallery</h3>
  <h3 className='text-lg font-semibold text-purple-600'>Contacts</h3>
      
      </div>
      <div className='sm:col-span-3 flex justify-center items-center flex-col gap-y-4'>
          
      <h1 className='text-3xl font-bold text-purple-800 mb-4'>Services</h1>
  <h3 className='text-lg font-semibold text-purple-600'>Pre-Nursery/Play Group</h3>
  <h3 className='text-lg font-semibold text-purple-600'>Nursery/Montessori-1</h3>
  <h3 className='text-lg font-semibold text-purple-600'>LKG/Montessori-2</h3>
  <h3 className='text-lg font-semibold text-purple-600'>UKG/Montessori-3</h3>
      

      </div>
      <div className='sm:col-span-3 flex justify-center items-center flex-col gap-y-4 '>
      <h1 className='text-3xl font-bold text-purple-800 mb-4'>Contact</h1>
  <h3 className='text-lg font-semibold text-purple-600 '>Opp to  Building, Kairali Construction, Near Travancore Auto Spa, Maruthankuzhi , TRIVANDRUM,KERALA - 695030</h3>
  <h3 className='text-lg font-semibold text-purple-600'>827637298 | 827361983</h3>
  <h3 className='text-lg font-semibold text-purple-600 '>abc@gmail.com</h3>
  
      </div>
    </div>

    <div className='min-h-[50px] bg-white grid sm:grid-cols-2 m-2'>
  <div className='flex justify-center items-center '>
    <p className='text-gray-600 '>© 2024. Designed By A2Z Alphabetsolutionz PVT Ltd.</p>
  </div>
  <div className='flex justify-center items-center space-x-4'>
    <a href="#" className='text-gray-600 hover:text-gray-800'>
    <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
    </a>
    <a href="#" className='text-gray-600 hover:text-gray-800'>
    <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
    </a>
    <a href="#" className='text-gray-600 hover:text-gray-800'>
    <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
    </a>
  </div>
</div>
       
    </div>
   
   
   
   
   </>
  )
}

export default Footer