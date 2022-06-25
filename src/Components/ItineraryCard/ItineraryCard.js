import React from 'react'
import "./ItineraryCard.css"

export default function ItineraryCard(props) {
  const itineraryImg = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ props.id }.png)`
  return (
    <div className={`itinerary-card ${ props.id }`} style={{backgroundImage: `${ itineraryImg }`}}>
      <div className='it-filter'></div>
      <div className='itinerary-content'>
        <p className='itinerary-category'>{props.type.toUpperCase()}</p>

        <h3 className='itinerary-name'>{props.itineraryName}</h3>
        {/* <p className='itinerary-description'>{props.description}</p> */}
        <p className='itinerary-description'>La description de fou quoi</p>
      </div>
          
    </div>
  )
}
