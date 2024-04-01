"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../effects/3dcard";
import Link from "next/link";

import { Url } from "next/dist/shared/lib/router/router";
import { GradientCard } from "@/components/effects/GradientCard";

export  default function EventCard({
  eventName,
  eventImg,
  href,
  eventDesc

} : {
  eventName : String,
  eventImg : any,
  href : Url,
  eventDesc : String
}){
  return (
   

    <Link  href={`/events/${eventName}`}>
    <CardContainer className="inter-var p-4">
       <GradientCard>
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-900 border-white/[0.2] border-2 w-auto sm:min-w-[30rem] md:min-w-[22rem] lg:min-w-[20rem] h-fit rounded-xl p-6 ">
    
        <CardItem
          translateZ="50"
          className="text-xl font-bold p-2 text-white"
        >
          {eventName}
        </CardItem>
       
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm p-2 mt-2 text-neutral-300"
        >
        {eventDesc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={eventImg}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex relative justify-between p-2 items-center mt-20"> */}
        
         {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold relative z-50"
          >
          Visit Now -&gt;
          </CardItem> */}
      
        {/* </div> */}
      </CardBody>
     </GradientCard>
    </CardContainer>
    </Link>
   
  );
}
