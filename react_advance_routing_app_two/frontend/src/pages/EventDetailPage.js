import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function EventDetailPage() {
  const data = useLoaderData();
  return (
    <div>EventDetailPage - {data.event.title}</div>
  )
}

export async function eventDetailsLoader({request, params}){
    const eventId =  params.eventId;
    const response = await fetch('http://localhost:8080/events/'+eventId);
    if(!response.ok){
      //throw error
    }  else{
      return response;
    }
}
