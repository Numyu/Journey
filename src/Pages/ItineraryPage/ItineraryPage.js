import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from "../../Components/FilterCard/FilterCard";
import { useState, useEffect } from "react";
import "./ItineraryPage.css"

export default function ItineraryPage() {

  const [listPath, setListPath] = useState(
    {
      global: [
                {itineraryCategory: "global", itineraryName: "Discover", itineraryDescription: "Une description t'as capté"},
                {itineraryCategory: "global", itineraryName: "Paris Lover", itineraryDescription: "Une description t'as capté"},
                {itineraryCategory: "global", itineraryName: "Grand Tour", itineraryDescription: "Une description t'as capté"},
              ],
                  
      foodAndDrinks: [
                      {itineraryCategory: "food and drinks", itineraryName: "Epicurian", itineraryDescription: "Une description t'as capté"},
                      {itineraryCategory: "food and drinks", itineraryName: "Gourmet", itineraryDescription: "Une description t'as capté"},
                      {itineraryCategory: "food and drinks", itineraryName: "Signature", itineraryDescription: "Une description t'as capté"},
                    ],
      culture: [
                {itineraryCategory: "culture", itineraryName: "Van Gogh", itineraryDescription: "Une description t'as capté"},
                {itineraryCategory: "culture", itineraryName: "Le Nôtre", itineraryDescription: "Une description t'as capté"},
                {itineraryCategory: "culture", itineraryName: "Haussman", itineraryDescription: "Une description t'as capté"},
               ],
      mode: [
              {itineraryCategory: "mode", itineraryName: "Jean-Paul Gaultier", itineraryDescription: "Une description t'as capté"},
              {itineraryCategory: "mode", itineraryName: "Coco Chanel", itineraryDescription: "Une description t'as capté"},
              {itineraryCategory: "mode", itineraryName: "Yves Saint Laurent", itineraryDescription: "Une description t'as capté"},
            ],
      selfCare: [
                  {itineraryCategory: "self-care", itineraryName: "Bio", itineraryDescription: "Une description t'as capté"},
                  {itineraryCategory: "self-care", itineraryName: "I care", itineraryDescription: "Une description t'as capté"},
                ],
    },
  );

  const [filters, setFilters] = useState([

    {name :"Food & Drinks", category: listPath.foodAndDrinks, img:"/images/image-filter/food-drinks.png"},
    {name :"Culture", category: listPath.culture, img:"/images/image-filter/culture.png"},
    {name :"Mode", category: listPath.mode, img:"/images/image-filter/mode.png"},
    {name :"Self-care", category: listPath.selfCare, img:"/images/image-filter/self-care.png"}

  ]);


  const [currentCategoryItineraries, setCurrentCategoryItineraries] = useState(listPath.global);

  const getFilterCategory = type => {
    if(currentCategoryItineraries == type){
      setCurrentCategoryItineraries(listPath.global)
    }else {
      setCurrentCategoryItineraries(type)
    }
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
        
        {currentCategoryItineraries.map((item, index) => {

            return (
              <ItineraryCard 
                key={index}
                type={item.itineraryCategory}
                itineraryName={item.itineraryName}
                description={item.itineraryDescription}
                // id={item.id}
              />
            )}
        )}
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
