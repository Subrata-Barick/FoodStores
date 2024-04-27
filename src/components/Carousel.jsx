import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

import car1 from "../assets/carouselImage/car1.jpg";
import car2 from "../assets/carouselImage/car2.jpg";
import car3 from "../assets/carouselImage/car3.jpg";
import car4 from "../assets/carouselImage/car4.jpg";
import car5 from "../assets/carouselImage/car5.jpg";
import car6 from "../assets/carouselImage/car6.jpg";
import car8 from "../assets/food4.jpg";

const image = [
  { img: car1, i: 0 },
  { img: car2, i: 1 },
  { img: car3 },
  { img: car4 },
  { img: car5 },
  { img: car6 },
];
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const setForward = () => {
    activeIndex === image.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };
  const setBackward = () => {
    activeIndex === 0
      ? setActiveIndex(image.length - 1)
      : setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setForward();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);

  return (
    <div className=" max-w-fit w-[100%] overflow-hidden relative    mx-2">
      <div className="">
        <div className="flex gap-2  ">
          {image.map((item, i) => (
            <img
              src={item.img}
              key={i}
              alt=""
              className={`h-[400px] w-[900px] rounded-lg object-fill   ${
                activeIndex === i ? "block" : "hidden"
              } `}
            />
          ))}
          <img
            src={car8}
            className="lg:h-[400px] lg:w-[750px] h-[100px] w-[100px] rounded-lg"
            alt="image"
          />
        </div>
        <div className="absolute p-4 text-yellow-400 top-40">
          <button className="absolute left-32 lg:text-4xl text-2xl " onClick={setBackward}>
            <FaChevronCircleLeft />
          </button>
          <button
            className=" absolute lg:left-[584px] left-[300px] lg:text-4xl text-2xl "
            onClick={setForward}
          >
            <FaChevronCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
