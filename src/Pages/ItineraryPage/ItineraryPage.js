import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from "../../Components/FilterCard/FilterCard";
import { useState, useEffect } from "react";
import "./ItineraryPage.css"
import api from "../../api/api.json";

export default function ItineraryPage() {
  // let currentCategory = "global"

  const [itineraries, setItineraries] = useState([])

  useEffect(() => {
    setItineraries(api);
  }, []);

  console.log(itineraries);

  const [filters, setFilters] = useState([

    {name :"Food & Drinks", category:"Food and drinks", img:"/images/image-filter/food-drinks.png"},
    {name :"Culture", category:"art and culture", img:"/images/image-filter/culture.png"},
    {name :"Mode", category:"Mode", img:"/images/image-filter/mode.png"},
    {name :"Self-care", category:"Selfcare", img:"/images/image-filter/self-care.png"}

    ]);

  // const [clicked, setClicked] = useState([null])

  const [currentCategoryItineraries, setCurrentCategoryItineraries] = useState("global")

  const getFilterCategory = type => {
    console.log(type);
    // if(currentCategoryItineraries == type){
    //   setCurrentCategoryItineraries("global")
    //   // setClicked([null])
    // }else {
      setCurrentCategoryItineraries(type)
      // setClicked(category)
    // }
  }

  const ctaBack = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="none" viewBox="0 0 28 18">
                    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m26.006 8.513-24.944.112m6.502-7.517L1.153 8.64l6.659 7.413"/>
                  </svg>

  return (
    <div className='itinerary-page-container'>
     
      <div className='itinerary-page-header'>
        <button className='cta-back'>{ctaBack}</button>
        <h2 className='itinerary-page-title'>Sacré-Coeur</h2>
        <p className='itinerary-page-text'>Pick an itinary that suits you</p>
      </div>

      <ul className="itinerary-container">
        
        {itineraries.map((item, index) => {
          if (item.type == currentCategoryItineraries) {
            return (
              <ItineraryCard 
                key={index}
                type={item.type}
                itineraryName={item.path}
                // description={item.description}
                id={item.id}
              />
            )}
        })}
      </ul>
      
      <div className="filters-section">
        <h2 className='itinerary-page-title filter-title'>Or sort by filter</h2>

          <div className="filters-wrapper">
            {filters.map((item,index) => {
              return (
                <FilterCard
                key={index}
                category={item.category}
                getCat={getFilterCategory}
                image={item.img}
                name={item.name}
                
                />
              )
            })}
      </div>
    </div>
  </div>
  )
}
