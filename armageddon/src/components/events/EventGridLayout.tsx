import React from 'react'
import EventCard from '../landing/events/EventCard'

import Link from "next/link";

type EventProps = {
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

function EventGridLayout({events} : {events : EventProps}) {
  return (
    <>
    <div className='mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 items-center justify-center'>
      {events.map((item) => (
       
          <li key={item.eventId}>
            <EventCard 
            eventDesc={item.eventDesc}
            eventName={item.eventName}
            href={`/events/${item.eventName}`}
            eventImg={item.eventImage}
            />
          </li>
       
        ))}
    </div>
    </>
  )
}

export default EventGridLayout