import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const brand = [
  {id:1,
    name: "KFC",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png",
  },
  {id:2,
    name: "Burger King",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png",
  },
  {id:3,
    name: "Pizza Hut",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/87aef776e475af7b84d49eabbfae9d02_1707720426.png",
  },
  {id:4,
    name: "Mio Amore",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/7013fa5250ecaba145d9437a3ba9f1ec_1492582809.png",
  },
  {id:5,
    name: "Wow! China",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/7bd8d15b440414feab366ee63b046f5d_1672388607.png",
  },
  {id:6,
    name: "Afiya Delight",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/6ed3af5d4f1f8d62d85db4d8f8cd3af1_1618829656.png",
  },
  {id:7,
    name: "Green Chillyz",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png",
  },
  {id:8,
    name: "Oberai Bakers & Cafe",
    img: "https://b.zmtcdn.com/data/brand_creatives/logos/dcd6ea23e8e4acbb694c9d3310db58bf_1611317285.png",
  }
   
];

const TopBrand = () => {
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
    <div>
      <div>
        <h1 className="text-8xl font-bold text-center my-8 text-orange-600">Top Brand</h1>
      </div>
      
       <Carousel responsive={responsive}>
    
        {
          brand.map((item)=>(
            <div className="flex mx-2 gap-2 flex-col">
            <img src={item.img} className="w-[220px] h-[220px] rounded-full p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" alt="" />
            <p className="text-2xl font-bold text-center text-amber-700">{item.name}</p>
            </div>
          ))  
        }
    
      </Carousel>
        </div>
    
  );
};

export default TopBrand;
