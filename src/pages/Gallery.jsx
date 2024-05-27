import React from 'react'
import Banner from '../components/Banner'

function Gallery() {
  return (
    <>
    <Banner headerText="Gallery" paraText="Home - Gallery" />
    <div className='flex justify-center items-center min-h-[100px]'>
      <div className=' bg-purple-100 h-12 w-1/3 rounded-md flex justify-center items-center'>
        <ul className='flex flex-row space-x-6 gap-4' >
         <li className='text-yellow-600 font-sans  text-xl hover:bg-yellow-200'>All</li>
         <li className='text-yellow-600 font-sans text-xl hover:bg-yellow-200 '>ofiice</li>
         <li className='text-yellow-600 font-sans text-xl hover:bg-yellow-200'>playing</li>
         <li className='text-yellow-600 font-sans text-xl hover:bg-yellow-200'>sitting</li>
         </ul>
      </div>
    </div>

    <div className='min-h-[400px] container m-4'>

    </div>
    </>
  )
}

export default Gallery