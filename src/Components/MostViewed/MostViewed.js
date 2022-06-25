import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import GeneratedCard from './GeneratedCard'
import './MostViewed.css'

export default function MostViewed() {


    // Titre et sous-titre de la section 'Most Viewed'
    const title = 'Where are we going?'
    const subtitle = 'Are you visiting one of these places?'

    // Liste des cartes dans la section 'Most Viewed'
    const [cardItem, setCard] = useState([
        { id: uuidv4(), title: 'Eiffel Tower', classCard: 'eiffel-tower-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: uuidv4(), title: 'Louvre Museum', classCard: 'louvre-museum-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: uuidv4(), title: 'Triumph Arch', classCard: 'triumph-arch-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: uuidv4(), title: 'Sacré-Coeur’s Basilica', classCard: 'sacre-coeurs-basilica', img: '../../img/MostViewedImg/eiffel.png' }
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
                    cardItem.map((card) => {
                        return (
                            <GeneratedCard
                                key={card.id}
                                classCard={card.classCard}
                                img={card.img}
                                title={card.title}
                                Navigate={nav}
                                id={card.id}

                            />
                        )

                    })
                }

            </div>

        </>

    )
}
