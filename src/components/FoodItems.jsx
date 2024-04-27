import React, { useState } from 'react';
import FoodProducts from '../FoodProducts'
import FoodStore from './FoodStore';
import { useSelector } from 'react-redux';
import CategoryList from './CategoryList';
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const categoryAll=useSelector((state)=>state.category.category)
  console.log(categoryAll)
    const handleToast = () => toast.success("items added to the cart");



  return (
    <div>

 <Toaster position="top-center" reverseOrder={false} />
        <h1 className="text-8xl font-bold text-center my-8 text-orange-600">Foody for Legends</h1>
        <CategoryList/>
         <div className="flex flex-wrap gap-5 justify-center lg:justify-start mx-6 my-10 ">
        {FoodProducts.filter((food)=>{if(categoryAll==='All'){
        return FoodProducts
      }else{
        return categoryAll===food.category
      }}).map((item) => (
          <FoodStore
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            desc={item.desc}
            img={item.img}
            qty={item.qty}
            handleToast={handleToast}
          />
        ))}
      </div>

    </div>
  )
}

export default FoodItems