import { useRef, useEffect, useState } from "react";
import "./CarouselCard.css";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function CarouselCard() {
  const [width, setwidth] = useState(350);
  const [height, setHeight] = useState(0);
  const carousel = useRef();
  const [cardCarousel, setCardCarousel] = useState([
    {
      id: uuidv4(),
      title: "Natural History",
      img: "NaturalHistoryMuseum.png.png",
    },
    {
      id: uuidv4(),
      title: "Orsay Museum",
      img: "OrsayMuseum.png.png",
    },
    {
      id: uuidv4(),
      title: "Pompidou",
      img: "Pompidou.png.png",
    },
    {
      id: uuidv4(),
      title: "Opéra Garnier",
      img: "palais-garnier.png",
    },
    {
      id: uuidv4(),
      title: "Luxembourg",
      img: "Luxembourg.png",
    },
    {
      id: uuidv4(),
      title: "Palais Brongniart",
      img: "palais_brongniart.png",
    },
    {
      id: uuidv4(),
      title: "Pantheon",
      img: "Pantheon.png",
    },
    {
      id: uuidv4(),
      title: "Place Vendome",
      img: "Place_Vendome.png",
    },
    {
      id: uuidv4(),
      title: "Pont Royal",
      img: "Pont_Royal.png",
    },
  ]);

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    setwidth(carousel.current.scrollHeight - carousel.current.offsetHeight);
  }, []);

  const [visible, setVisible] = useState(6);
  const [slider, setSlider] = useState("x");
  const [sliderDirection, setSliderDirection] = useState({
    right: 0,
    left: -width,
  });
  const [wrap, setWrap] = useState({});
  function changeXY(event) {
    setVisible((prevValue) => prevValue + 6);

    if (slider === "y") {
      setSlider((drag) => (drag = "x"));
      setSliderDirection({ right: 0, left: -width });
      setWrap({});
    } else {
      setSlider((drag) => (drag = "y"));
      setSliderDirection({ top: 0, bottom: -height });
      setWrap({ flexWrap: "wrap" });
      setwidth(0);
    }
  }

  return (
    <div>
      <motion.div ref={carousel} className="carousel">
        <button className="btnViewMore" onClick={changeXY}>
          View more
        </button>
        <motion.div
          drag={slider}
          dragConstraints={sliderDirection}
          className="inner-carousel"
          style={wrap}
        >
          {cardCarousel
            .slice(0, visible)
            .map(({ id, title, img }) => {
              return (
                <motion.div className="item"
                key={id}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/CarouselImg/" + img}
                  />
                  <p className="card-item-title">{title}</p>
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
  );
}
