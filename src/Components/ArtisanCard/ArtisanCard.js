import React, {useState } from 'react'

export default function ArtisanCard({shopName, shopDetail, shopDescription, openingHours}) {

     const [cardToggled, setCardToggled ] = useState(false)

     const toggledCardDescription = () => {
        setCardToggled(!cardToggled)
     }
     
  return (
    <div
    className={cardToggled ? "artisan-card toggled" : "artisan-card"}
    onClick={toggledCardDescription}
    >
        div.

    </div>
  )
}
