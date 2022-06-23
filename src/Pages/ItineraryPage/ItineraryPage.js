import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import { useState } from 'react'
import "./ItineraryPage.css"

export default function ItineraryPage() {
  const [itineraries, setItineraries] = useState([
    {category: "global", itineraryName: "Discover", description: "Enjoy the best local craftmanship", id: "discover"},
    {category: "global", itineraryName: "Paris Lover", description: "Live the 'art de vivre à la Française'", id: "paris-lover"},
    {category: "global", itineraryName: "Grand Tour", description: "Experience French Luxury", id: "grand-tour"},
  ])

  const ctaBack = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="none" viewBox="0 0 28 18">
    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m26.006 8.513-24.944.112m6.502-7.517L1.153 8.64l6.659 7.413"/>
    </svg>

  return (
    <div className='itinerary-page-container'>
      <button className='cta-back'>{ctaBack}</button>

      <h2 className='itinerary-page-title'>Sacré-Coeur</h2>
      <p className='itinerary-page-text'>Pick an itinary that suits you</p>

      <ul className="itinerary-container">
        
        {itineraries.map((item, index) => {
          return (
            <ItineraryCard 
              key={index}
              category={item.category}
              itineraryName={item.itineraryName}
              description={item.description}
              id={item.id}
            />
          )
        })}
      </ul>

      <h2 className='itinerary-page-title filter-title'>Or sort by filter</h2>
    </div>
  )
}
