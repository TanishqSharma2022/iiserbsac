"use client";
import EventSchedule from '@/components/events/EventSchedule'
import { SparklesCore } from "@/components/effects/Sparkles"
import React from 'react';
import Data from "../../app/data.json";

const data = Data.schedule;



function Schedule() {
  return (
    <>
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full -z-10"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Event Schedule
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
    </div>
    
    <EventSchedule events={data} />
    
    </div>
     
    </>
  )
}

export default Schedule


