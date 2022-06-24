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

  {category:"Restaurant ou traiteur", img:"/images/image-filter/food-drinks.png"},
  {category:"Artisanat d'art", img:"/images/image-filter/culture.png"},
  {category:"Librairie", img:"/images/image-filter/mode.png"},
  {category:"Autre", img:"/images/image-filter/self-care.png"}
    
]);

  const [clicked, setClicked] = useState([null])
  


  useEffect(() => {
    setStores(data);
    setFilteredStores(data)
  }, []);
 

  const getFilterCategory = category => {
    console.log(category);

    if(clicked == category){

      setStores(data)
      setClicked([null])
      
    }else {

      const filteredState = filteredStores.filter(item => {
      
        return item.fields.type_de_commerce == category
      })
      console.log(filteredState);
      setStores(filteredState)
      setClicked(category)
    }
 
    
    
  }


  
  console.log(stores);


  return (

    <div className="tour-page-wrapper">

      <div className="artisan-card-wrapper">

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

        {/* <div className="filter"> */}
      
      <div className="filters-section">
        <h2 id="filters-title">Sort by filter</h2>
        <div className="filters-wrapper">
                  {/* <div className="flex-row"> */}
          {filters.map((item,index) => {
            return (
              <FiltersButton
              key={index}
              category={item.category}
              getCat={getFilterCategory}
              image={item.img}
              
              />
            )
          })}
        </div>

      
      </div>
        
      
    </div>
  );
}
