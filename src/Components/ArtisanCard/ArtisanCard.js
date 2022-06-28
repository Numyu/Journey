import React, { useState, useEffect } from "react";
import "./ArtisanCard.css";


export default function ArtisanCard({
  shopName,
  shopDetail,
  shopDescription,
  openingHours,
  picture, 
  deleteArtisanCard,
  uuid
}) {
  const [cardToggled, setCardToggled] = useState(false);

  const toggledCardDescription = () => {
    setCardToggled(!cardToggled);
  };

  const cardBackground = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.1)), url(${picture}) 100%`
  }

  return (
    <div
      className={cardToggled ? "artisan-card toggled" : "artisan-card"}
       
    >
      <div className="artisan-header-wrapper">

        <div
          className={cardToggled ? "artisan-card-header toggled" : "artisan-card-header"}
          style={
            cardBackground
          }
          onClick={toggledCardDescription}
        >
          <p className={cardToggled ? "artisan-opening-hours toggled" : "artisan-opening-hours"}>{openingHours}</p>
          <div className="artisan-card-shop-block">
            <h3 className="artisan-card-title">{shopName}</h3>
            <p className="artisan-card-detail">{shopDetail}</p>
          </div>
        </div>

        <div 
        className={cardToggled ? "artisan-card-delete toggled" : "artisan-card-delete"}
        onClick={() => deleteArtisanCard(uuid)}
        >
            <img src={process.env.PUBLIC_URL + '/images/ArtisanCardIcones/trash.svg'} alt="trash-delete" className="trash-icon"/>  
        </div>
      </div>


      {cardToggled && (
        <div className="artisan-card-body">
          <p className="artisan-opening-hours-description">{openingHours}</p>
          <p className="artisan-shop-description">{shopDescription}</p>
        </div>
      )}
    </div>
  );
}
