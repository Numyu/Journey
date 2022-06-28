import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from '../../Components/FilterCard/FilterCard'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ItineraryPage.css'
import { useParams } from 'react-router-dom'
import CtaBack from '../../Components/CtaBack/CtaBack'
import api from "../../api/api2.json";

export default function ItineraryPage() {
  const navigate = useNavigate()
  const params = useParams()

  // const [listPath, setListPath] = useState({
  //   global: [
  //     {
  //       type: 'global',
  //       name: 'Discover',
  //       description: 'Enjoy the best local craftmanship',
  //       image: 'f&d-discover.png',
  //     },
  //     {
  //       type: 'global',
  //       name: 'Paris Lover',
  //       description: 'Live the “art de vivre à la Française”',
  //       image: 'global-parislover.png',
  //     },
  //     {
  //       type: 'global',
  //       name: 'Grand Tour',
  //       description: 'Experience French luxury',
  //       image: 'global-grandtour.png',
  //     },
  //   ],

  //   foodAndDrinks: [
  //     {
  //       type: 'food & drinks',
  //       name: 'Epicurian',
  //       description: 'Find your way to some good local food',
  //       image: '/images/ItineraryImage/Epicurian.jpg',
  //     },
  //     {
  //       type: 'food & drinks',
  //       name: 'Gourmet',
  //       description: 'Come across places to try French cuisine',
  //     },
  //     {
  //       type: 'food & drinks',
  //       name: 'Signature',
  //       description: 'Explore what France has best to offer ',
  //     },
  //   ],
  //   culture: [
  //     {
  //       type: 'culture',
  //       name: 'Van Gogh',
  //       description: "Une description t'as capté",
  //     },
  //     {
  //       type: 'culture',
  //       name: 'Le Nôtre',
  //       description: "Une description t'as capté",
  //     },
  //     {
  //       type: 'culture',
  //       name: 'Haussman',
  //       description: "Une description t'as capté",
  //     },
  //   ],
  //   mode: [
  //     {
  //       type: 'mode',
  //       name: 'Jean-Paul Gaultier',
  //       description: "Une description t'as capté",
  //     },
  //     {
  //       type: 'mode',
  //       name: 'Coco Chanel',
  //       description: "Une description t'as capté",
  //     },
  //     {
  //       type: 'mode',
  //       name: 'Yves Saint Laurent',
  //       description: "Une description t'as capté",
  //     },
  //   ],
  //   selfCare: [
  //     {
  //       type: 'self-care',
  //       name: 'Bio',
  //       description: "Une description t'as capté",
  //     },
  //     {
  //       type: 'self-care',
  //       name: 'I care',
  //       description: "Une description t'as capté",
  //     },
  //   ],
  // })

  // let currentFilter
  const [listPath, setListPath] = useState(api[0]["sacreCoeurBasillica"])

  // useEffect(() => {
  //   setListPath(api[0]["sacreCoeurBasillica"]["foodAndDrinks"]);
  // }, []);

  // console.log(listPath)

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
      name: 'Self-Care',
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

  const getCategoryCard = (category) => {
    console.log(currentCategoryItineraries)
  }
  
  // const filterId = (id) => {
  //   if (currentFilter == id) {
  //       currentFilter = "global"
  //   } else {
  //     currentFilter = id
  //   }
  // }
  

  // const filteredItineraries = listPath.filter((itinerary) => {
  //   console.log("filter:", itinerary)
  //     return itinerary
  // })

  // console.log(params)

  const navToTour = (tour) => {
    navigate(`/itineraries/${params.monument}/${tour}`)
    // console.log(tour)
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
              itineraryName={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
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
