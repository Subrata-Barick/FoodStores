import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import food1 from "../assets/food2.jpg";
import FoodCarousalProducts from "./FoodCarousalProducts";
import {carouselData} from '../CarousalProducts'

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 790 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 790, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-full mx-2 my-8">
      <h1 className="text-8xl font-bold text-center my-8 text-orange-600">Best Foods Ever</h1>
      <div className="">
        <Carousel responsive={responsive}>

            {
                carouselData.map((item)=>(
                    <FoodCarousalProducts id={item.id}  key={item.id} img={item.img} name={item.name} taste={item.taste} price={item.price}/>
                ))
            }
         
      
                               
        </Carousel>
      </div>
    </div>
  );
};

export default MultiCarousel;
