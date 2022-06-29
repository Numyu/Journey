import React from 'react'
import ItineraryCard from '../../Components/ItineraryCard/ItineraryCard'
import FilterCard from '../../Components/FilterCard/FilterCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ItineraryPage.css'
import { useParams } from 'react-router-dom'
import CtaBack from '../../Components/CtaBack/CtaBack'
import api from '../../api/api.json'

export default function ItineraryPage() {
  const navigate = useNavigate()
  const params = useParams()

  const [listPath, setListPath] = useState({
    global: [
      {
        type: 'global',
        itineraryName: 'Discovery',
        itineraryDescription: 'Enjoy the best local craftmanship',
        itineraryImg: '/images/ItineraryImage/global-discovery.png',
      },
      {
        type: 'global',
        itineraryName: 'Paris Lover',
        itineraryDescription: 'Live the “art de vivre à la Française”',
        itineraryImg: '/images/ItineraryImage/global-parislover.png',
      },
      {
        type: 'global',
        itineraryName: 'Grand Tour',
        itineraryDescription: 'Experience French luxury',
        itineraryImg: '/images/ItineraryImage/global-grandtour.png',
      },
    ],

    foodAndDrinks: [
      {
        type: 'food & drinks',
        itineraryName: 'Epicurian',
        itineraryDescription: 'Find your way to some good local food',
        itineraryImg: '/images/ItineraryImage/f&d-epicurian.png',
      },
      {
        type: 'food & drinks',
        itineraryName: 'Gourmet',
        itineraryDescription: 'Come across places to try French cuisine',
        itineraryImg: '/images/ItineraryImage/f&d-gourmet.png',
      },
      {
        type: 'food & drinks',
        itineraryName: 'Signature',
        itineraryDescription: 'Explore what France has best to offer ',
        itineraryImg: '/images/ItineraryImage/f&d-signature.png',
      },
    ],
    culture: [
      {
        type: 'culture',
        itineraryName: 'Van Gogh',
        itineraryDescription: 'Discover the French culture',
        itineraryImg: '/images/ItineraryImage/culture-vangogh.png',
      },
      {
        type: 'culture',
        itineraryName: 'Le Nôtre',
        itineraryDescription: 'Stroll through these parks and enjoy the view',
        itineraryImg: '/images/ItineraryImage/culture-lenotre.png',
      },
      {
        type: 'culture',
        itineraryName: 'Haussman',
        itineraryDescription: 'Visit these emblematic places',
        itineraryImg: '/images/ItineraryImage/culture-haussman.png',
      },
    ],
    mode: [
      {
        type: 'mode',
        itineraryName: "Men's Paris style",
        itineraryDescription: 'Discover a selection of stores for men',
        itineraryImg: '/images/ItineraryImage/mode-jeanpaulgaultier.png',
      },
      {
        type: 'mode',
        itineraryName: "Lady's Paris dressing",
        itineraryDescription: 'Discover a selection of stores for women',
        itineraryImg: '/images/ItineraryImage/mode-cocochanel.png',
      },
      {
        type: 'mode',
        itineraryName: 'Fancy Paris fashion',
        itineraryDescription:
          'Discover a selection of stores for men and women',
        itineraryImg: '/images/ItineraryImage/mode-yvessaintlaurent.png',
      },
    ],
    selfCare: [
      {
        type: 'self-care',
        itineraryName: 'Bio',
        itineraryDescription: 'Come and taste good organic products',
        itineraryImg: '/images/ItineraryImage/selfcare-bio.png',
      },
      {
        type: 'self-care',
        itineraryName: 'I care',
        itineraryDescription: 'Take a moment to relax',
        itineraryImg: '/images/ItineraryImage/selfcare-icare.png',
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
