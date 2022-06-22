import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import { useState } from 'react'

export default function ItineraryPage() {
  const [itineraries, setItineraries] = useState([
    {category: "global", itineraryName: "Discover", description: "Enjoy the best local craftmanship", id: "discover"},
    {category: "global", itineraryName: "Paris Lover", description: "Live the 'art de vivre à la Française'", id: "paris-lover"},
    {category: "global", itineraryName: "Grand Tour", description: "Experience French Luxury", id: "grand-tour"},
  ])
  return (
    <ul>
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
    
    
    
  )
}
