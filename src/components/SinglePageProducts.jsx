import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { IoFastFood } from "react-icons/io5";
import { GiWrappedSweet } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { add_to_cart } from "../features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const SinglePageProducts = () => {
   const handleToast = () => toast.success("items added to the cart");
  const [data, setData] = useState([]);
  const { id } = useParams();
  const product = useSelector((store) => store.cart);
  const carts=useSelector((store=>store.cart.cart))
  console.log('carts',carts)
  useEffect(() => {
    const newId = Number(id);
    const singleProducts = product.product.find((item) => item.id == newId);
    setData(singleProducts)
  }, [data]);


const dispatch=useDispatch()
  
const{name,img,price,taste,description,hotel,location,}=data;
  return (
    <><Toaster position="top-center" reverseOrder={false} />
    <div className="mx-2 my-3 flex justify-center items-center flex-col">
      <img src={img} className="w-[645px] h-[445px] rounded" alt="" />
      <p className="text-3xl flex font-bold mt-1"><IoFastFood color="orange"/>{name}</p>
      <p className="text-xl mt-1 ">${price}</p>
      <p className="flex mt-1"><GiWrappedSweet color="red " className="mt-1 mr-1 text-xl font-bold"/>{taste}</p>
      <p className="flex text-2xl mt-1"><FaHotel color="green" className="mt-1 mr-1"/>{hotel}</p>
      <p className="flex text-3xl mt-1"><FaLocationDot className="mt-1 mr-1" color="red"/>{location}</p>
      <p className="text-2xl font-bold mx-[30rem] mt-1">{description}</p>
      <button className='bg-black text-white rounded shadow-xl p-2 mt-3 shadow-orange-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300 ... ' onClick={()=>{dispatch(add_to_cart({name,img,id,price,qty:1,total:0}));handleToast()}} >Add to Cart</button>

    </div>
    </>
  );
};

export default SinglePageProducts;
