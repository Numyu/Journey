import { useState, useEffect } from 'react'
import ArtisanCard from '../../Components/ArtisanCard/ArtisanCard'
import api from '../../api/api.json'
import CtaBack from '../../Components/CtaBack/CtaBack'
import { useParams } from 'react-router-dom'
import './TourPage.css'
import CtaMaps from '../../Components/CtaMaps/CtaMaps'

export default function TourPage() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    setStores(api)
  }, [])

  const params = useParams()

  const deleteArtisanCard = (uuid) => {
    const newStores = stores.filter((store) => {
      return store.uuid != uuid
    })
    setStores(newStores)
  }

  const filteredStores = stores.filter((store) => {
    return store.path == params.tour
  })

  return (
    <div>
      <div className="tour-page-header">
        <CtaBack valueLink={`/itineraries/${params.monument}`} />
        {/* <button className='cta-back' onClick={() => navigate("/")}>{ctaBack} </button> */}
        <h2 className="tour-page-title">{params.tour}</h2>
        <p className="tour-page-text">Personalize your itinerary</p>
      </div>

      {filteredStores.map(
        ({
          uuid,
          name,
          smallDescription,
          opening,
          description,
          type,
          image,
        }) => (
          <ArtisanCard
            key={uuid}
            uuid={uuid}
            shopName={name}
            shopDetail={smallDescription}
            openingHours={opening}
            shopDescription={
              description ? description : "Il n'y a pas de description"
            }
            type_de_commerce={type}
            deleteArtisanCard={deleteArtisanCard}
            picture={process.env.PUBLIC_URL + '/images/ArtisanCardImg/' + image}
          />
        ),
      )}
      <CtaMaps selectedItinerary={filteredStores} />
    </div>
  )
}
