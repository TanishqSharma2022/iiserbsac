"use client"
import { Spotlight } from '@/components/effects/Spotlight'
import React from 'react'
import CardScroll from '@/components/events/CardScroll'
import ScrollReveal from '@/components/events/ScrollReveal'

//Importing and filtering data
import data from "../data.json"
const armaFair = data.events[3];
import useScreenSize from '@/hooks/useScreenSize'
import EventGridLayout from '@/components/events/EventGridLayout'
const competitiveEvents = data.events.filter((event) => event.type === "competition")
const featuredEvents = data.events.filter((event) => event.isFeatured === true)
featuredEvents.push(armaFair);
const workshopEvents = data.events.filter((event) => event.type === "workshop")
const talkEvents = data.events.filter((event) => event.type === "talk")
const gamingEvents = data.events.filter((event) => event.type === "gaming")

function EventPage() {
 const screenSize = useScreenSize()
  return (
    <div className='p-10'>
        <div className="h-[500px] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="blue"
        />
        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Armageddon <br /> where tech meets innovation.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Get hyped for Armageddon! Tech, vibes, and the future collide at IISER Bhopal. Let&apos;s level up together!
            </p>
        </div>
        
        </div>
        <div className='text-4xl md:text-7xl mb-32 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            Featured events
        </div>
        <div className='mb-32' >
            {screenSize.width > 1024?  <CardScroll content={featuredEvents}/> : <EventGridLayout events={featuredEvents}/>}
        </div>


        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Competitive Events
            </h1>

        <div className='mb-32'>
            {screenSize.width > 1024 ? <ScrollReveal content={competitiveEvents}/> : <EventGridLayout events={competitiveEvents}/>}
        </div>


        <div className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            Workshop events
        </div>
        <div className='mb-32'>
            {screenSize.width > 1024 ? <ScrollReveal content={workshopEvents}/> : <EventGridLayout events={workshopEvents}/>}
        </div>

        <div className='text-4xl md:text-7xl mb-32 mt-16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
             Talk events
        </div>
        <div className='mb-32'>
            {screenSize.width > 1024 ? <CardScroll content={talkEvents}/> : <EventGridLayout events={talkEvents}/>}   
        </div>

        <div className='text-4xl md:text-7xl mb-32 mt-16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
             Gaming events
        </div>
        <div className='mb-32'>
            {screenSize.width > 1024 ? <CardScroll content={gamingEvents}/> : <EventGridLayout events={gamingEvents}/>}   
        </div>
        
        
    </div>
  )
}

export default EventPage