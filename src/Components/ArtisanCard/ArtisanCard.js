import React, { useState } from "react";

export default function ArtisanCard({
  shopName,
  shopDetail,
  shopDescription,
  openingHours,
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
      <div className="artisan-card-header">
        <p className="artisan-openingHours">{openingHours}</p>
        <h3 className="artisan-card-title">{shopName}</h3>
        <p className="artisan-card-detail">{shopDetail}</p>
      </div>

        {cardToggled && (
            <div className="artisan-card-body">
                <p className="artisan-openingHours">{openingHours}</p>
                <p className="artisan-shop-description">{shopDescription}</p>
            </div>
        )}

    </div>
  );
}
