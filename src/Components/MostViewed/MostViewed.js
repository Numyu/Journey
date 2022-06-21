import React, { useState } from 'react'
import ItemCard from './ItemCard'
import './MostViewed.css'

export default function MostViewed() {




    const [cardItem, setCard] = useState([
        { id: 1, title: 'Eiffel Tower', classCard: 'eiffel-tower-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 2, title: 'Louvre Museum', classCard: 'louvre-museum-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 3, title: 'Triumph Arch', classCard: 'triumph-arch-card', img: '../../img/MostViewedImg/eiffel.png' },
        { id: 4, title: 'Sacré-Coeur’s Basilica', classCard: 'sacre-coeurs-basilica', img: '../../img/MostViewedImg/eiffel.png' }
    ])


    return (
        <>
            <h2>MostViewed</h2>
            <div className='most-viewed-content'>
                <ul>


                    {
                        cardItem.map((item, index) => {
                            return (
                                <ItemCard
                                    Key={index}
                                    classCard={item.classCard}
                                    img={item.img}
                                    title={item.title}
                                />
                            )

                        })
                    }
                </ul>
            </div>

        </>

    )
}
