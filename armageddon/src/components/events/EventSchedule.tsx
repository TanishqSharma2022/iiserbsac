//"use client";
import React from 'react'

type Event = {
    title: string;
    startTime: string;
    endTime: string;
    description?: string;
  }

 
    type  EventScheduleProps = {
    schedule : [{ 
        day: string,
        date: string,
        events: [{
            title: string;
    startTime: string;
    endTime: string;
    description?: string;
        }]
     }];
  }
  
 type ScheduleCardProps = {
     day: string;
     date: string;
     events: [{
        title: string;
startTime: string;
endTime: string;
description?: string;
    }]

  }
  



const ListItem = ({ event }:{event:Event}) => {
    return (
      <li
        className={`group relative flex flex-col pb-8 pl-7 last:pb-0 overflow-visible`} >
          
        
        <h3 className="mt-2 text-sm font-semibold text-white">{event.title}</h3>
        <p className="order-first font-display text-xs font-semibold tracking-[0.2em] text-sky-300">
          <time dateTime={event.startTime}>{event.startTime}</time> -
          <time className="px-2" dateTime={event.endTime}>{event.endTime}</time>
        </p>
        
      </li>
    );
  };

  const ScheduleCard = ({ card }: {card: ScheduleCardProps}) => {
    return (
    
    <>   
    <div className="md:text-4xl text-2xl lg:text-6xl font-bold text-center  text-white relative z-20 overflow-visible w-full align-top">
  {card.day} 
  <span> <em className='md:text-xl inline text-base lg:text-3xl p-4 my-4'>
  {card.date }
  </em>
  </span>
  </div> 
 
     <div className="h-10 relative  justify-center ">
  {/* Gradients */}
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


  {/* Radial Gradient to prevent sharp edges */}
  <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
</div>
    <ul role="list" className="text-3xl text-center">
          
            {card.events.map((item,index:number)=>(
            
                <ListItem key={index} event={item} />
            ))};
            
     
        </ul> 
    </>
    );
  };
  
  const EventSchedule = ({ events }: {events: any}) => {
    return (
      
       <div  className='mx-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  overflow-visible z-50 justify-center h-full'>
       {events.map((item:any,index:number)=>(
        
            <div key={index} className="mt-2">
            
            <ScheduleCard card={item}/>
            </div>
        ))};
  </div>
      
    );
  };

export default EventSchedule