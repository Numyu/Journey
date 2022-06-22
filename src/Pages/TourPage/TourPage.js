import { useState, useEffect } from "react";
import ArtisanCard from "../../Components/ArtisanCard/ArtisanCard";
import FiltersButton from "../../Components/FiltersButton/FiltersButton";
import data from "../../data/data.json";
import "./TourPage.css"
// import ArtisanCard from "../Components/ArtisanCard/ArtisanCard";

export default function TourPage() {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([])

  const [filters, setFilters] = useState([
    {category:"Restaurant ou traiteur"},
    {category:"Artisanat d'art"},
    {category:"Librairie"},
    {category:"Autre"}
    
]);

  useEffect(() => {
    setStores(data);
    setFilteredStores(data)
  }, []);
 
  const getFilterCategory = category => {
    console.log(category);
    const filteredState = filteredStores.filter(item => {
      
      return item.fields.type_de_commerce == category
    })
    console.log(filteredState);
    setStores(filteredState)
    
  }


  
  console.log(stores);
  // "Restaurant ou traiteur"
  // "Artisanat d'art"
  // "Boucherie - charcuterie - rôtisserie"
  // "Librairie"

  return (

    <div>
      <div className='flex-row'>
        {filters.map((filter,index) => {
          return (
            <FiltersButton
            key={index}
            category={filter.category}
            getCat={getFilterCategory}
            />
          )
        })}
      </div>
      

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
