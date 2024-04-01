'use client'

import React, { useEffect, useRef } from 'react'
import FeaturedEventCard from './FeaturedEventCard'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

type CardScrollProps = {
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


function CardScroll({content} : {content : CardScrollProps}) {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect( () => {

        const lenis = new Lenis()
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
    
        }
        requestAnimationFrame(raf)
      })

  return (
    <div className='relative' ref={container}>
        {content.map((eventDetails, index) => {
            const targetScale = 1 - ((content.length - index) * 0.05)
            return <FeaturedEventCard key={eventDetails.eventId}
             id={eventDetails.eventId} {... eventDetails} range={[index*(1/content.length), 1]} targetScale={targetScale} progress={scrollYProgress} i={index} />
        } )}
    </div>
  )
} 

export default CardScroll