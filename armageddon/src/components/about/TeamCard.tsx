"use client";
import React from "react";
import { EvervaultCard, Icon } from "../effects/EvervaultCard";
import Link from "next/link";



export function TeamCard({
  memberName,
  href,
  memberImg,
  className,
}:{
  memberName: String,
  href: string,
  memberImg: string,
  className?: string,
}) {
  return (
    <>
    <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] rounded-lg">
      

      <EvervaultCard image={memberImg}/>   

      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
       {memberName}
      </h2>
      <Link href={href} className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
        
      </Link>
    </div>
    </>
  );
}
