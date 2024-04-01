import React from 'react'
import { SparklesCore } from '@/components/effects/Sparkles'
import type { Metadata } from "next";
import data from "../data.json"
import TeamCard from '@/components/team/TeamCard';

const team = data.team;
const Convener = team.filter(item => item.desig == "Convener")
const Co_convener = team.filter(item => item.desig == "Co-Convener")
const Vigilance = team.filter(item => item.desig == "Vigilance")
const Tech_team = team.filter(item => item.desig =="The Techies")
const OC = team.filter(item => item.desig == "Organizing Committee")

export const metadata: Metadata = {
  title: "Armageddon 2024",
  description: `ARMAGEDDON is hosted by the Indian Institute of Science Education and
  Research (IISER) Bhopal. ARMAGEDDON, as the name suggests, is not just an event;
  it's a battleground for the brightest minds, a place where intellect meets
  innovation, and creativity knows no bounds.`,
  openGraph: {
    title: 'Armageddon 2024',
    description: 'Armageddon is annual tech fest of IISER Bhopal',
  },
};

const Team = () => {
  return (
    <>
        <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-full">
            <SparklesCore
              id="tsparticlesfull"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full -z-10"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="h-[10rem] my-2 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
            The Team
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

      <div  className='mx-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 overflow-visible justify-center h-full'>
        <div>
          <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Convener
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
        
        
        {Convener.map((item) => (
          
          <TeamCard key={item.name}
          name={item.name}
          desc={item.desc}
          pic={item.pic}
          linkedin={item.linkedin}
          insta={item.insta}
         desig={item.desig}

          />
          ))}
        
        </div>
        <div>
          <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
            Vigilance
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
        
        
        {Vigilance.map((item) => (
          
          <TeamCard key={item.name}
          name={item.name}
          desc={item.desc}
          pic={item.pic}
          linkedin={item.linkedin}
          insta={item.insta}
         desig={item.desig}

          />
          ))}
        
        </div>
        </div>
        
        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
           Co-Conveners
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
        
        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 items-center justify-center">
        {Co_convener.map((item) => (
        
        <TeamCard key={item.name}
            name={item.name}
            desc={item.desc}
            pic={item.pic}
            linkedin={item.linkedin}
            insta={item.insta}
            desig={item.desig}
            />
            ))}  
        </div>

    


        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
           Organizing Committee
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
        
        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 items-center justify-center">
        {OC.map((item) => (
        
        <TeamCard key={item.name}
            name={item.name}
            desc={item.desc}
            pic={item.pic}
            linkedin={item.linkedin}
            insta={item.insta}
            desig={item.desig}
            />
            ))}  
        </div>

        <div className="h-[10rem] w-full my-2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-2xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
           The Techies
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
        
        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 items-center justify-center">
        {Tech_team.map((item) => (
        
        <TeamCard key={item.name}
            name={item.name}
            desc={item.desc}
            pic={item.pic}
            linkedin={item.linkedin}
            insta={item.insta}
            desig={item.desig}
            />
            ))}  
        </div>
        
        
        </div>
        
         
        </>
  )
}

export default Team