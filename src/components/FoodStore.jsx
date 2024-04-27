import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../features/cartSlice';
const FoodStore = ({id,img,rating,desc,price,name,handleToast}) => {
    const dispatch=useDispatch()
  return (
    <div><div className='font-bold  w-[250px] h-[350px] bg-white p-5 flex flex-col rounded-lg'>
        <img src={img} className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out bg-black' />
        <div className='flex justify-between'>
            <h2>{name}</h2>
            <span className='text-orange-600'>₹{price}</span>
        </div>
        <p className='text-sm font-normal  w-[200px] h-[140px] overflow-hidden overflow-y-scroll scroll-smooth'>{desc}</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'><FaStar className='mr-1 text-yellow-600' />{rating}</span>
            <button className='p-1 text-white bg-green-500 hover:bg-orange-500 rounded-lg text-sm hover:scale-100 transition-all duration-200 ' onClick={()=>{dispatch(add_to_cart({id,img,name,price,rating,qty:1}));handleToast()}} >Add to cart</button>
        </div>
    </div></div>
  )
}


// 
export default FoodStore