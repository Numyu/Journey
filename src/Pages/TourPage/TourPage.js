import { useState, useEffect } from "react";
import ArtisanCard from "../../Components/ArtisanCard/ArtisanCard";
import api from "../../api/api.json";
import CtaBack from "../../Components/CtaBack/CtaBack";
import { useParams } from "react-router-dom";

export default function TourPage() {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([])

  useEffect(() => {
    setStores(api);
  }, []);

  console.log(api);

  const params = useParams()

  const [mouseStartPos, setMouseStartPos] = useState({});
  const [mousePos, setMousePos] = useState({});
  const [isDragged, setIsDragged] = useState(false);

  const dragGap = 35;

  const dragStartItem = (e) => {
    setMouseStartPos({ mouseX: e.clientX, mouseY: e.clientY });
  };

  const dragEndItem = (e) => {
    // e.target.classList.remove("dragged");
    setMouseStartPos({ mouseX: e.clientX, mouseY: e.clientY });
  };

  const dragItem = (e) => {
    if (isDragged) {
      e.target.classList.add("dragged");
    }
    setMousePos({ mouseX: e.clientX, mouseY: e.clientY });
  };

  useEffect(() => {
    if (mouseStartPos && mousePos.mouseX != 0) {
      if (
        mouseStartPos.mouseX > mousePos.mouseX &&
        mouseStartPos.mouseX - mousePos.mouseX > dragGap
      ) {
        setIsDragged(true);
      }
    } else {
      setIsDragged(false);
    }
  }, [mousePos]);

  const deleteArtisanCard = (uuid) => {
    const newStores = stores.filter((store) => {
      return store.uuid != uuid;
    });
    setStores(newStores);
  };

  return (
    <div>
      <CtaBack
    
      valueLink={`/itineraries/${params.monument}`}
        
      />
      {stores
        // .slice(0,2)
        .map(
          ({
            uuid,
            name,
            smallDescription,
            opening,
            description,
            type,
            image,
          }) => (
            <ArtisanCard
              key={uuid}
              uuid={uuid}
              shopName={name}
              shopDetail={smallDescription}
              openingHours={opening}
              shopDescription={
                description ? description : "Il n'y a pas de description"
              }
              type_de_commerce={type}
              draggable
              onDrag={dragItem}
              onDragStart={dragStartItem}
              deleteArtisanCard={deleteArtisanCard}
              picture={
                process.env.PUBLIC_URL + "/images/ArtisanCardImg/" + image
              }
            />
          )
        )}
    </div>
  );
}
