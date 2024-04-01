'use client'
import React from 'react'
import { HoverEffect } from '@/components/effects/CardHover'
import { SparklesCore } from '../effects/Sparkles'

function About(){
    return(
    <>
    <div className="h-full relative -z-10  w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-[10rem]">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-4xl text-2xl lg:text-6xl font-bold  text-center text-white relative z-20">
        About Armageddon 
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      
      <p className='text-center text-lg font-semibold p-4 text-gray-400 mx-4 md:mx-16 lg:mx-36'>
     Armageddon is hosted by the Indian Institute of Science Education and Research (IISER) Bhopal. Armageddon, as the name suggests, is not just an event; it&apos;s a battleground for the brightest minds, a place where intellect meets innovation, and creativity knows no bounds. This year, ARMAGEDDON transcends traditional boundaries to bring you an exhilarating blend of technology, science, and entertainment. We aim to provide a platform for students, professionals, and tech enthusiasts from across the nation to showcase their genius, exchange ideas, and push the envelope of what&apos;s possible.
    </p>
    
      </div>
     <div className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-2xl text-4xl lg:text-6xl font-bold text-center text-white relative z-20">
        About CNC 
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <p className='text-center text-lg font-semibold p-4 text-gray-400 mx-4 md:mx-16 lg:mx-36'>
        At CNC we are committed to building a professional team to work in favour of IISERB&apos;s interests. We thrive to make IISERB self dependent and work for its betterment. Who are we? Computing and Networking Council (CNC) aims primarily at management, conduct and promotion of the Computing and Networking activities in the institute.
      </p>
     </div>

    </div>

        {/* <div className="h-[30rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Meet the Team! 
      </h1>
      <div className="w-[40rem] h-40 relative">

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      

        <HoverEffect items={members}/> */}
        </>
        

    )
}

export default About