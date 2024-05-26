import React from 'react'

function Banner({ headerText, paraText }) {
  return (
    <div className='min-h-[250px] bg-yellow-50 flex flex-col space-y-3 justify-center items-center bg-cover bg-center bg-no-repeat ' style={{backgroundImage:"url(https://images.pexels.com/photos/3913426/pexels-photo-3913426.jpeg?auto=compress&cs=tinysrgb&w=600)"}}>
       <h1 className='text-4xl font-bold text-yellow-800'>{headerText}</h1>
      <p className='text-2xl text-yellow-700'>{paraText}</p>
    </div>
  )
}

export default Banner