"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../effects/3dcard";
import { IconBrandInstagram,IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export  default function TeamCard({
  name,
  pic,
  linkedin,
  insta,
  desc,
  desig

} : {
  name : String,
  pic : any,
  linkedin : Url,
  insta : Url,
  desc : String
  desig : String
}){
  return (
   

    
    <CardContainer className="inter-var p-4 z-10 mx-auto">
   
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-zinc-900 border-2 border-white  w-auto sm:min-w-[30rem] md:min-w-[22rem] lg:min-w-[20rem] h-fit rounded-xl p-6">

      <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={pic}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="profile picture"
          />
        </CardItem>
    
        <CardItem
          translateZ="50"
          className="text-xl font-bold p-1 mt-2 text-white"
        >
          {name}
        </CardItem>
       
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm font-bold italic max-w-sm p-1 mt-2 text-neutral-300"
        >
        {desig}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-base max-w-sm p-1 mt-1 text-neutral-300"
        >
        {desc}
        </CardItem>
      
      
        <div className="flex relative items-center mt-2"> 
        
          <CardItem
            translateZ={20}
            as="button"
            className=""
          >
            <Link target="_blank" href={insta} className="" >
              <IconBrandInstagram className="h-8 w-8 text-white"/>
            </Link>
          </CardItem> 
          <CardItem
            translateZ={20}
            as="button"
            className=""
          >
            <Link target="_blank" href={linkedin} className="" >
              <IconBrandLinkedin className="h-8 w-8 mx-1 text-white"/>
            </Link>
          </CardItem>
      
        </div>
      </CardBody>

    </CardContainer>

   
  );
}
