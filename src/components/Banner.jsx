import React from 'react'

function Banner() {
  return (
    <div className='min-h-[250px] bg-yellow-50 flex flex-col space-y-3 justify-center items-center bg-cover bg-center bg-no-repeat ' style={{backgroundImage:"url(https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&w=600)"}}>
       <h1 className='text-2xl font-bold text-gray-800'>Contact Us</h1>
       <p className='text-lg text-gray-600'>Home - Contact us</p>
    </div>
  )
}

export default Banner