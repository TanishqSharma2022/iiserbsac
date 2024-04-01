"use client";
import React from "react";
import { PinContainer } from "../../effects/PinEffect"; 
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { title } from "process";
import Link from "next/link";

export function SponsorCard({
    
    sponsorImg,
    href,
    type,
    
}:{
    
    sponsorImg : string
    href : string
    type: string
    
}) {
    return (
    <div className="h-[50vh] w-auto sm:min-w-[30rem] md:min-w-[22rem] lg:min-w-[20rem] flex items-center justify-center">
      <PinContainer
        title= {href}
        href= {href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-fit ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            
          </h3>
         
          <div >
            <Link href={href}            />
            
          <Image
            src={sponsorImg}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}


