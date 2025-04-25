import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function EventsPage() {
  const fetchedEvents = useLoaderData();
  return (
    <>
      <h1>Events Page</h1>
      {fetchedEvents &&
        <ul>
          {fetchedEvents.map(e => (
            <li key={e.id}><Link to={e.id}>{e.title}</Link></li>
          ))}  
      </ul> 
      }
      
    </>
  )
}

export async function eventsLoader(){
  const response = await fetch('http://localhost:8080/events');
  if(!response.ok){
    //throw json({message:'Not able to fetch events'});
  } else {
    const resData =await response.json();
    return resData.events;
  }              
}
