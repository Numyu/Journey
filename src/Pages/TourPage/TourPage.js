import { useState, useEffect } from "react";
import ArtisanCard from "../../Components/ArtisanCard/ArtisanCard";
import data from "../../data/data.json";
// import ArtisanCard from "../Components/ArtisanCard/ArtisanCard";

export default function TourPage() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(data);
  }, [stores]);

  console.log(stores);

  return (
    <div>
      {stores
        // .slice(0,2)
        .map(
          ({
            fields: {
              nom_du_commerce,
              adresse,
              code_postal,
              description,
              type_de_commerce,
            },
            recordid,
          }) => (
            <ArtisanCard
              key={recordid}
              shopName={nom_du_commerce}
              shopDetail={adresse}
              openingHours={code_postal}
              shopDescription={
                description ? description : "Il n'y a pas de description"
              }
              type_de_commerce={type_de_commerce}
            />
          )
        )}
    </div>
  );
}
