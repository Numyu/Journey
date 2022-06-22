import { useState, useEffect } from "react";
import ArtisanCard from "../../Components/ArtisanCard/ArtisanCard";
import FiltersButton from "../../Components/FiltersButton/FiltersButton";
import data from "../../data/data.json";
// import ArtisanCard from "../Components/ArtisanCard/ArtisanCard";

export default function TourPage() {
  const [stores, setStores] = useState([]);

  const [filters, setFilters] = useState([
    {category:"Restaurant ou traiteur"},
    {category:"Artisanat d'art"},
    {category:"Librairie"},
    {category:"Autre"}
    
]);

  useEffect(() => {
    setStores(data);
  }, [stores]);

  
  console.log(stores);
  // "Restaurant ou traiteur"
  // "Artisanat d'art"
  // "Boucherie - charcuterie - rôtisserie"
  // "Librairie"

  return (

    <div>
      {filters.map((filter,index) => {
        return (
          <FiltersButton
          key={index}
          category={filter.category}
          />
        )
      })}

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
