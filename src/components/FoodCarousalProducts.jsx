import React from 'react';
import { Link } from 'react-router-dom';
import{useSelector,useDispatch} from 'react-redux'
import { add_to_cart } from '../features/cartSlice';
import toast, { Toaster } from "react-hot-toast";

const FoodCarousalProducts = ({img,name,price,taste,id}) => {
  const foodProduct=useSelector(store=>store.cart)


const dispatch=useDispatch();
  const handleToast = () => toast.success("items added to the cart");



  return (
    <div >
      
      <div className='border-[3px] border-solid border-orange-500 rounded-full max-w-[455px] max-h-[400px] flex justify-center items-center flex-col m-2 p-6  '>
     <img src={img}  alt="carousel image" className=' rounded-[100px] w-[450px] h-[150px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '  />
    <h1 className='text-2xl font-bold text-amber-700'>{name}</h1>
    <p className='text-lg font-semibold text-white'>Price:-$ <span>{price}</span></p>
    <p className='text-sm font-medium text-orange-700'>{taste}</p>
  
    <p className='mt-2 mx-2'>
      <Link to={`/shop/${id}`}><button className='bg-black mr-2 p-1 text-white rounded shadow-xl shadow-orange-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300 ... '>view</button></Link>  
       <button className='bg-black text-white rounded shadow-xl p-1 shadow-orange-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300 ... ' onClick={()=>{dispatch(add_to_cart({name,img,id,price,qty:1,total:0}));handleToast()}} >Add To Cart</button>
       
     
    </p>
  </div>
    </div>
  )
}

export default FoodCarousalProducts;