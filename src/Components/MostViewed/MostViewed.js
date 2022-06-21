import React, { useState } from 'react'
import ItemCard from './ItemCard'
import './MostViewed.css'

export default function MostViewed() {


    // Titre et sous-titre de la section 'Most Viewed'
    const title = 'Where are we going?'
    const subtitle = 'Are you visiting one of these places?'

    // Liste des cartes dans la section 'Most Viewed'
    const [cardItem, setCard] = useState([
        { id: 1, title: 'Eiffel Tower', classCard: 'eiffel-tower-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 2, title: 'Louvre Museum', classCard: 'louvre-museum-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 3, title: 'Triumph Arch', classCard: 'triumph-arch-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 4, title: 'Sacré-Coeur’s Basilica', classCard: 'sacre-coeurs-basilica', img: '../../img/MostViewedImg/eiffel.png' }
    ])

    // Fonction de redirection vers la page catégorie
    const nav = id => {
        // Retourne l'id de l'élément séléctionné
        console.log(id)
    }

    return (
        <>
            <div className='title-subtitle'>
                <p className='title'>{title}</p>
                <p className='subtitle'>{subtitle}</p>

            </div>
            <div className='most-viewed-content'>



                {
                    cardItem.map((item, index) => {
                        return (
                            <ItemCard
                                Key={index}
                                classCard={item.classCard}
                                img={item.img}
                                title={item.title}
                                Navigate={nav}
                                id={item.id}

                            />
                        )

                    })
                }

            </div>

        </>

    )
}
