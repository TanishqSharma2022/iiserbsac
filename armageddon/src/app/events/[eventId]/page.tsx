import Image from "next/image"
import data from "../../data.json"
import type { Metadata } from "next";
import { BackgroundBeams } from "@/components/effects/BackgroundBeams";
import { cn } from "@/utils/cn";
import Link from "next/link";


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
    "type": string
    "starttime"?:string
}
const events = data.events;
export function generateStaticParams() {
  
 
  return events.map((event:EventProps) => ({
    eventId:event.eventName,
  }))
}

export default function EventDetailsPage({params} : {params : {eventId : string}}) {
    const event = data.events.filter((event) => event.eventName == decodeURIComponent(params.eventId))[0]
    return(
      <>
        <div className="h-[80rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
     
        <IndividualEvent event={event} />
        </div>
      </>
    )
}

function IndividualEvent({event} : {event: EventProps}) {
  let eventDate = new Date(event.eventDate)
  let regDeadline = new Date(event.regDeadline)
  let currentDate = new Date()
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-24 2xl:px-16">
      <div className="items-start gap-x-10 pb-10 pt-7 lg:flex lg:pb-14">
        <div className="gap-2.5">
            <div className="transition duration-150 ease-in hover:opacity-90">
              <Image
                height={1800}
                width={1800}
                src={event.eventImage}
                alt="Event Image"
                className="mx-auto w-[50vw] lg:w-[150vw] h-auto object-cover rounded-lg"
              />
            </div>
        </div>
        <div className="col-span-4 pt-8 lg:pt-0 z-50">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mt-8 mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl text-gray-50">
              {event.eventName}
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8 text-gray-200">
              {event.eventDesc}
            </p>
          </div>
          <div className="border-b border-gray-300 pb-3 flex">
            <div className="mb-4 mx-6">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Venue
              </h3>
              <p className="text-gray-300">{event.venue}</p>
            </div>
            <div className="mb-4 mx-6">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Date
              </h3>
              <p className="text-gray-300">{`${eventDate.toLocaleDateString('en-IN')}`}</p>
            </div>
            {
              (event.starttime)?(
              <div className="mb-4 mx-6">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg text-gray-50">
                Time
                </h3>
                <p className="text-gray-300">{`${event.starttime}`}</p>
              </div>):null
            }
              
          </div>
            

            
          
        
          {
             (event.type === "competition" || event.type === "gaming")? (
               <div className="flex items-center justify-center gap-2 border-b border-gray-300 py-8 md:pr-12 lg:pr-12">
              <a href={event.rulebook} target="_blank">
              <button
               type="submit"
               className={cn("h-16 w-full px-16 rounded-md py-2 text-sm font-semibold bg-white text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black")}
            >
             Rulebook
            </button>
            </a>
            { event.type === "competition" ?   <div className="w-1/2 mx-8">
             <p className="text-gray-100">Registration Deadline : {regDeadline.toLocaleDateString('en-IN')}</p>
            </div>: <></> }
           
            </div>
           ) : null
         }

         {
            (event.type === "competition" || event.type === "gaming") ? (
              <div className="py-6 ">
          

            <Link target="_blank" href={`${event.regLink}`}>
            <button
              type="submit"
              className={cn("h-16 w-full rounded-md px-3 py-2 text-sm font-semibold text-black shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black", ((regDeadline.getTime() - currentDate.getTime()) > 0 ? "bg-gray-100" : "bg-gray-500"))}
            >
             {(regDeadline.getTime() - currentDate.getTime()) > 0 ? "Register" : "Registrations Closed"} 
            </button>
            </Link>
         
          </div> 

            ): null
         }
         
         
          
         
        </div>
      </div>
    </div>
  )
}
