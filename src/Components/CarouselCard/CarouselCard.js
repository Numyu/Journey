import { useRef, useEffect, useState } from "react";
import "./CarouselCard.css";
import { motion } from 'framer-motion';
import images from "./images";

export default function CarouselCard() {
    
    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);


    }, []);

    const[visible, setVisible]= useState(2);
    const viewMore = () => {
        setVisible((prevValue) => prevValue + 4);
    }

  return (
    <div>
        <motion.div ref={carousel} className='carousel'>
            <button onClick={viewMore} >View more</button>
        <motion.div drag="y" dragConstraints={{ top: 0, left: -width}} className='inner-carousel'>
          {images.slice(0, visible).map(image => {
            return(
              <motion.div className='item' key ={image}>
                 <img src ={image}/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}