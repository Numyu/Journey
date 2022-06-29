import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GeneratedCard from './GeneratedCard'
import './MostViewed.css'
import { useNavigate } from 'react-router-dom'

export default function MostViewed() {
  const navigate = useNavigate()
  // Titre et sous-titre de la section 'Most Viewed'
  const title = 'Where are we going?'
  const subtitle = 'Are you visiting one of these places?'

  // Liste des cartes dans la section 'Most Viewed'
  const [cardItem, setCard] = useState([
    {
      id: uuidv4(),
      title: 'Eiffel Tower',
      classCard: 'eiffel-tower-card',
      img: 'eiffel.png',
    },
    {
      id: uuidv4(),
      title: 'Louvre Museum',
      classCard: 'louvre-museum-card',
      img: 'louvre-museum.png',
    },
    {
      id: uuidv4(),
      title: 'Sacré-Coeur’s Basilica',
      classCard: 'sacre-coeur-basilica',
      img: 'sacre-coeur-basilica.png',
    },
    {
      id: uuidv4(),
      title: 'Triumph Arch',
      classCard: 'triumph-arch-card',
      img: 'triumph-arch.png',
    },
  ])

  const navToItineraries = (monument) => {
    navigate(`/itineraries/${monument}`)
    console.log(monument)
  }

  return (
    <>
      <div className="title-subtitle">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="most-viewed-content">
        <div className="most-viewed-top">
          <div className="most-viewed-top-left">
            <GeneratedCard
              key={uuidv4()}
              classCard={'eiffel-tower-card'}
              img={process.env.PUBLIC_URL + '/images/MostViewedImg/eiffel.png'}
              NavFunc={navToItineraries}
              title={'Eiffel Tower'}
            />
          </div>
          <div className="most-viewed-top-right">
            <GeneratedCard
              key={uuidv4()}
              classCard={'louvre-museum-card'}
              img={
                process.env.PUBLIC_URL +
                '/images/MostViewedImg/louvre-museum.png'
              }
              NavFunc={navToItineraries}
              title={'Louvre Museum'}
            />
            <GeneratedCard
              key={uuidv4()}
              classCard={'triumph-arch-card'}
              img={
                process.env.PUBLIC_URL +
                '/images/MostViewedImg/triumph-arch.png'
              }
              NavFunc={navToItineraries}
              title={'Triumph Arch'}
            />
          </div>
        </div>

        <GeneratedCard
          key={uuidv4()}
          classCard={'sacre-coeur-basilica'}
          img={
            process.env.PUBLIC_URL +
            '/images/MostViewedImg/sacre-coeur-basilica.png'
          }
          NavFunc={navToItineraries}
          title={'Sacré-Coeur’s Basilica'}
        />
      </div>
    </>
  )
}

//   return (
//     <>
//       <div className="title-subtitle">
//         <p className="title">{title}</p>
//         <p className="subtitle">{subtitle}</p>
//       </div>
//       <div className="most-viewed-content">
//         {cardItem.map(({id, title, classCard, img})=> {
//           return (
//             <GeneratedCard
//               key={id}
//               classCard={classCard}
//               img={process.env.PUBLIC_URL + "/images/MostViewedImg/" + img}
//               NavFunc={navToItineraries}
//               title={title}
//             />
//           )
//         })}
//       </div>
//     </>
//   );
// }
