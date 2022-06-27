import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GeneratedCard from "./GeneratedCard";
import "./MostViewed.css";

export default function MostViewed() {
  // Titre et sous-titre de la section 'Most Viewed'
  const title = "Where are we going?";
  const subtitle = "Are you visiting one of these places?";

  // Liste des cartes dans la section 'Most Viewed'
  const [cardItem, setCard] = useState([
    {
      id: uuidv4(),
      title: "Eiffel Tower",
      classCard: "eiffel-tower-card",
      img: "eiffel.png",
    },
    {
      id: uuidv4(),
      title: "Louvre Museum",
      classCard: "louvre-museum-card",
      img: "louvre-museum.png",
    },
    {
      id: uuidv4(),
      title: "Sacré-Coeur’s Basilica",
      classCard: "sacre-coeur-basilica",
      img: "sacre-coeur-basilica.png",
    },
    {
      id: uuidv4(),
      title: "Triumph Arch",
      classCard: "triumph-arch-card",
      img: "triumph-arch.png",
    },
  ]);



  return (
    <>
      <div className="title-subtitle">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="most-viewed-content">
        {cardItem.map(({id, title, classCard, img})=> {
          return (
            <GeneratedCard
              key={id}
              classCard={classCard}
              img={process.env.PUBLIC_URL + "/images/MostViewedImg/" + img}
              title={title}
            />
          )
        })}
      </div>
    </>
  );
}
