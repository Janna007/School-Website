import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const [menuOpen,setMenuOpen]=useState(false)
    
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
      };
  return (
   <>

<div class="min-h-[100px] bg-gradient-to-r from-green-500 via-yellow-400 to-purple-400 grid sm:grid-cols-12 " >
  <div class="grid grid-cols-2 sm:col-span-5 ">
  <div class="flex justify-center items-center">
  <img className="h-20 w-26" src="https://t4.ftcdn.net/jpg/05/06/60/87/240_F_506608769_dJDa5BUUeZdklFICN9VIHCq3WSZziKGA.jpg" alt="Workflow" />
  </div>
   <div class="sm:hidden flex justify-center items-center">
    {/* for small device */}
   <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={toggleMenu}>
              {/* <span className="sr-only">Open main menu</span> */}
            
              {menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
           
            </button> 
           {menuOpen && (
            <div className="sm:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-gray-300 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/about" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/services" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                <Link to="/gallery" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
                <Link to="/contact" className="text-gray-300 hover:bg-purple-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              </div>
            </div>
           )}
                  
   </div>
  </div>

  
  <div class="sm:col-span-7 sm:flex justify-center items-center hidden">
   <div class="flex space-x-6">
   <Link to="/" className="text-white hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                <Link to="/about" className="text-white hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/services" className="text-white hover:bg-yellow-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                <Link to="/gallery" className="text-white hover:bg-purple-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
                <Link to="/contact" className="text-white hover:bg-purple-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
   </div>
  </div>

</div> 


   </>

  )
}

export default Header