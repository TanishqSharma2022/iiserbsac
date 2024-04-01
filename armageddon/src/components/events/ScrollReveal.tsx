"use client"
import React from 'react'
import FeatureTitle from './FeatureTitle'
import EventCard from '../landing/events/EventCard'
import { useFeatureStore } from '@/app/events/store'
import { cn } from '@/utils/cn'
import data from "../../app/data.json"

// const content = data.events.filter((event) => event.type === "competition")

type ScrollRevealProps = {
            "eventId" : number,
            "eventName" : string,
            "eventDesc" : string,
            "eventImage" : string,
            "regDeadline" : string,
            "eventDate" : string,
            "venue" : string,
            "regLink" : string,
            "rulebook" : string
  }[]


function ScrollReveal({content} :{content : ScrollRevealProps}) {
  return (
    <div className='mx-auto max-w-7xl px-4 my-2'>
        <div className='flex w-full gap-20 items-start'>
            <div className='w-full py-[50vh]'>
                <ul>
                     {content.map((eventDetails, index) => {
                        return <li key={index}>
                            <FeatureTitle id={eventDetails.eventName}>{eventDetails.eventName}</FeatureTitle>
                        </li>
                    })}
                </ul>
            </div>
            <div className='w-full h-screen sticky flex -top-[20vh] items-center'>
                <div className='w-full relative aspect-square rounded-2xl bg-transparent'>
                {content.map((eventDetails, index) => { 
                    return (
                        <FeatureCard key={index} id={eventDetails.eventName}>
                            <EventCard eventName={eventDetails.eventName} eventDesc={eventDetails.eventDesc} eventImg={eventDetails.eventImage} href={`/events/${eventDetails.eventName}`}/>
                        </FeatureCard>

                    )
                })}

                </div>
            </div>
        </div>
    </div>
  )
}

export function FeatureCard({children, id} : {children : React.ReactNode, id: string}) {

    const inViewFeature = useFeatureStore((state) => state.inViewFeature)

    return(
        <div className={cn('h-full w-full rounded-2x absolute inset-0 transition-opacity', inViewFeature === id ? "opacity-100" : "opacity-0", inViewFeature === id? "visible" : "hidden")}>
            {children}
        </div>
    )
}

export default ScrollReveal