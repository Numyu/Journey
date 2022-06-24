import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from "../../Components/FilterCard/FilterCard";
import { useState } from 'react'
import "./ItineraryPage.css"

export default function ItineraryPage() {
  // let currentCategory = "global"

  const [itineraries, setItineraries] = useState([
    {category: "global", itineraryName: "Discover", description: "Enjoy the best local craftmanship", id: "discover"},
    {category: "global", itineraryName: "Paris Lover", description: "Live the 'art de vivre à la Française'", id: "paris-lover"},
    {category: "global", itineraryName: "Grand Tour", description: "Experience French Luxury", id: "grand-tour"},
    {category: "food&drinks", itineraryName: "Manger", description: "Premier itineraire de bouffe cousin", id: "manger"},
    {category: "culture", itineraryName: "Musee et tout", description: "Des musees de fou furieux poto", id: "musee"},
    {category: "mode", itineraryName: "vetements", description: "Meilleurs vetement ici", id: "vetement"},
    {category: "selfcare", itineraryName: "soin", description: "soin soin", id: "self-care"}
  ])

  const [filters, setFilters] = useState([
    {category:"food&drinks", img:"/images/image-filter/food-drinks.png"},
    {category:"culture", img:"/images/image-filter/culture.png"},
    {category:"mode", img:"/images/image-filter/mode.png"},
    {category:"selfcare", img:"/images/image-filter/self-care.png"}
    
    ]);

  // const [clicked, setClicked] = useState([null])

  const [currentCategoryItineraries, setCurrentCategoryItineraries] = useState("global")

  const getFilterCategory = category => {
    console.log(category);
    if(currentCategoryItineraries == category){
      setCurrentCategoryItineraries("global")
      // setClicked([null])
    }else {
      setCurrentCategoryItineraries(category)
      // setClicked(category)
    }
  }


  const ctaBack = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="none" viewBox="0 0 28 18">
                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m26.006 8.513-24.944.112m6.502-7.517L1.153 8.64l6.659 7.413"/>
                  </svg>

  return (
    <div className='itinerary-page-container'>
      <button className='cta-back'>{ctaBack}</button>

      <h2 className='itinerary-page-title'>Sacré-Coeur</h2>
      <p className='itinerary-page-text'>Pick an itinary that suits you</p>

      <ul className="itinerary-container">
        
        {itineraries.map((item, index) => {
          if (item.category == currentCategoryItineraries) {
            return (
              <ItineraryCard 
                key={index}
                category={item.category}
                itineraryName={item.itineraryName}
                description={item.description}
                id={item.id}
              />
            )}
        })}
      </ul>

      <h2 className='itinerary-page-title filter-title'>Or sort by filter</h2>

      <div className="filters-section">

        <div className="filters-wrapper">
          {filters.map((item,index) => {
            return (
              <FilterCard
              key={index}
              category={item.category}
              getCat={getFilterCategory}
              image={item.img}
              
              />
            )
          })}
      </div>
    </div>
  </div>
  )
}
