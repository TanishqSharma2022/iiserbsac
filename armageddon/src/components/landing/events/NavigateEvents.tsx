"use client";
import Link from "next/link";
import { TypewriterEffect } from "../../effects/TypeWriterEffect";

export function NavigateEvents() {
  const words = [
    {
      text: "Unleash",
    },
    {
      text: "your",
    },
    {
      text: "inner",
    },
    {
      text: "enthusiast",
    },
    {
       text: "in",
    },
    {
      text: "Armageddon!",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] mb-8">
      <p className="text-neutral-200 text-xs sm:text-base  ">
        The road to technology starts from here
      </p>
      <TypewriterEffect words={words} className="mb-8 mt-4" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/events">
        <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm relative z-30">
          View all events
        </button>
        </Link>
        
      </div>
    </div>
  );
}
