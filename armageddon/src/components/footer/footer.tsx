'use client';
import React from 'react'
import localFont from 'next/font/local'
const JoystickFont = localFont({ src: '../landing/joystix monospace.otf' })


function Footer() {
    return (
      <>
<footer suppressHydrationWarning={true} className="bg-black z-10">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
         
        
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="lg:flex lg:items-center lg:justify-between">
          <a href="#" className="hover:underline">
          <div className="flex  flex-col justify-center mb-6 md:mb-0">    
              <span className={JoystickFont.className+" self-center text-2xl font-bold whitespace-nowrap text-white"}>Armageddon 2024 </span>
            
          </div>
          </a>
          <div className='text-center my-4'>
            <p className='text-white text-bold my-2'>
                For any queries contact us at <a className='underline' href='mailto:cnc@iiserb.ac.in'>cnc@iiserb.ac.in</a>
            </p>    
            <p className='text-white text-sm my-2'>
                Developed by <a href='https://www.linkedin.com/in/divya-sharma-285894258/' className='underline'>Divya</a> , <a href='https://www.linkedin.com/in/ayushman-saha/' className='underline'>Ayushman</a> and  <a href='https://www.linkedin.com/in/d33panshuraj/' className='underline'>Deepanshu</a>
            </p>
          </div>
                  
    
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="mailto:armageddon@iiserb.ac.in" className="text-gray-500hover:text-white">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                  <span className="sr-only">Mail</span>
              </a>
              <a href="https://www.instagram.com/armageddon_iiserb/?hl=en" className="text-gray-500 hover:text-white ms-5">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                  <span className="sr-only">instagram</span>
              </a>
             
          </div>
      </div>
    </div>
</footer>

      </>
     
    )
  }
  
  export default Footer