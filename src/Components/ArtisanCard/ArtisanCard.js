import React, { useState } from "react";
import "./ArtisanCard.css";

export default function ArtisanCard({
  shopName,
  shopDetail,
  shopDescription,
  openingHours,
  picture
}) {
  const [cardToggled, setCardToggled] = useState(false);

  const toggledCardDescription = () => {
    setCardToggled(!cardToggled);
  };

  return (
    <div
      className={cardToggled ? "artisan-card toggled" : "artisan-card"}
      onClick={toggledCardDescription}
    >
      <div
        className="artisan-card-header"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <p className={cardToggled ? "artisan-opening-hours toggled" : "artisan-opening-hours"}>{openingHours}</p>
        <div className="artisan-card-shop-block">
          <h3 className="artisan-card-title">{shopName}</h3>
          <p className="artisan-card-detail">{shopDetail}</p>
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
