import React from 'react'
import "./ItineraryCard.css"

export default function ItineraryCard(props) {
  return (
    <div className={`itinerary-card ${ props.id }`}>
      <div className='itinerary-content'>
        <p className='itinerary-category'>{props.category.toUpperCase()}</p>

        <h3 className='itinerary-name'>{props.itineraryName}</h3>
        <p className='itinerary-description'>{props.description}</p>
      </div>
        
    </div>
  )
}
