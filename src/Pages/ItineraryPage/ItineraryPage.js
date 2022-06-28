import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from '../../Components/FilterCard/FilterCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ItineraryPage.css'
import { useParams } from 'react-router-dom'
import CtaBack from '../../Components/CtaBack/CtaBack'

export default function ItineraryPage() {
  const navigate = useNavigate()
  const params = useParams()

  const [listPath, setListPath] = useState({
    global: [
      {
        type: 'global',
        itineraryName: 'Discover',
        itineraryDescription: 'Enjoy the best local craftmanship',
        itineraryImg: '/images/ItineraryImage/Discover.png',
      },
      {
        type: 'global',
        itineraryName: 'Paris Lover',
        itineraryDescription: 'Live the “art de vivre à la Française”',
        itineraryImg: '/images/ItineraryImage/ParisLover.png',
      },
      {
        type: 'global',
        itineraryName: 'Grand Tour',
        itineraryDescription: 'Experience French luxury',
        itineraryImg: '/images/ItineraryImage/GrandTour.png',
      },
    ],

    foodAndDrinks: [
      {
        type: 'food & drinks',
        itineraryName: 'Epicurian',
        itineraryDescription: 'Find your way to some good local food',
        itineraryImg: '/images/ItineraryImage/Epicurian.jpg',
      },
      {
        type: 'food & drinks',
        itineraryName: 'Gourmet',
        itineraryDescription: 'Come across places to try French cuisine',
      },
      {
        type: 'food & drinks',
        itineraryName: 'Signature',
        itineraryDescription: 'Explore what France has best to offer ',
      },
    ],
    culture: [
      {
        type: 'culture',
        itineraryName: 'Van Gogh',
        itineraryDescription: "Une description t'as capté",
      },
      {
        type: 'culture',
        itineraryName: 'Le Nôtre',
        itineraryDescription: "Une description t'as capté",
      },
      {
        type: 'culture',
        itineraryName: 'Haussman',
        itineraryDescription: "Une description t'as capté",
      },
    ],
    mode: [
      {
        type: 'mode',
        itineraryName: 'Jean-Paul Gaultier',
        itineraryDescription: "Une description t'as capté",
      },
      {
        type: 'mode',
        itineraryName: 'Coco Chanel',
        itineraryDescription: "Une description t'as capté",
      },
      {
        type: 'mode',
        itineraryName: 'Yves Saint Laurent',
        itineraryDescription: "Une description t'as capté",
      },
    ],
    selfCare: [
      {
        type: 'self-care',
        itineraryName: 'Bio',
        itineraryDescription: "Une description t'as capté",
      },
      {
        type: 'self-care',
        itineraryName: 'I care',
        itineraryDescription: "Une description t'as capté",
      },
    ],
  })

  const [filters, setFilters] = useState([
    {
      name: 'Food & Drinks',
      category: listPath.foodAndDrinks,
      img: '/images/ImagesFilter/food-drinks.svg',
    },
    {
      name: 'Culture',
      category: listPath.culture,
      img: '/images/ImagesFilter/culture.svg',
    },
    {
      name: 'Mode',
      category: listPath.mode,
      img: '/images/ImagesFilter/mode.svg',
    },
    {
      name: 'Self-care',
      category: listPath.selfCare,
      img: '/images/ImagesFilter/self-care.svg',
    },
  ])

  const [currentCategoryItineraries, setCurrentCategoryItineraries] = useState(
    listPath.global,
  )

  const getFilterCategory = (type) => {
    if (currentCategoryItineraries == type) {
      setCurrentCategoryItineraries(listPath.global)
    } else {
      setCurrentCategoryItineraries(type)
    }
  }

  const navToTour = (tour) => {
    navigate(`/itineraries/${params.monument}/${tour}`)
    console.log(tour)
  }

  // const ctaBack = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" fill="none" viewBox="0 0 28 18">
  //                   <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m26.006 8.513-24.944.112m6.502-7.517L1.153 8.64l6.659 7.413"/>
  //                 </svg>

  return (
    <div className="itinerary-page-container">
      <div className="itinerary-page-header">
        <CtaBack valueLink={`/`} />
        {/* <button className='cta-back' onClick={() => navigate("/")}>{ctaBack} </button> */}
        <h2 className="itinerary-page-title">{params.monument}</h2>
        <p className="itinerary-page-text">Pick an itinary that suits you</p>
      </div>

      <ul className="itinerary-container">
        {currentCategoryItineraries.map((item, index) => {
          return (
            <ItineraryCard
              key={index}
              type={item.type}
              itineraryName={item.itineraryName}
              description={item.itineraryDescription}
              image={item.itineraryImg}
              navFunc={navToTour}
              // id={item.id}
            />
          )
        })}
      </ul>

      <div className="filters-section">
        <h2 className="itinerary-page-title filter-title">Or sort by filter</h2>

        <div className="filters-wrapper">
          {filters.map((item, index) => {
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
