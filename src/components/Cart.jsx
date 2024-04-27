import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrease_Amount,
  increase_Amount,
  remove_item,
  zero
} from "../features/cartSlice";
import { FaFaceSadTear } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems)

  const totalPrice = cartItems.reduce(
    (acc, dec) => acc + dec.qty * dec.price,
    0
  );
  const totalItems=cartItems.reduce((acc,dec)=>acc+dec.qty,0)

  const dispatch = useDispatch();
   const handleToast = () => toast.error("item removed");
   // payment integration 
  
  return (
    <><Toaster position="top-center" reverseOrder={false} />
    <div className="flex justify-between mx-6 flex-col lg:flex-row">
      <div>
        {cartItems.length == 0 ? (
          <div className=" flex text-6xl font Bold justify-center items-center mt-10 gap-5 ">
            {" "}
            Cart is Empty <FaFaceSadTear className="text-orange-700 mt-2" />
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="flex border border-red-700 rounded-md justify-start lg:gap-20 gap-3 lg:w-[65rem] lg:mx-1 my-2 p-2">
              <p className="lg:text-xl font-bold lg:w-[350px]  w-10 text-center mt-2 text-amber-700">{item.name}</p>
              <img src={item.img} alt="" className="h-[50px] rounded w-20 " />
              <p className="lg:text-2xl font-bold w-40  mt-2 text-yellow-50">
                Price:- $<span className="text-orange-600">{item.price}</span>
              </p>
              <div className="flex gap-2 text-2xl font-bold text-yellow-50">
                <button
                  onClick={() => dispatch(decrease_Amount({ id: item.id }))}
                >
                  -
                </button>
                <div className="mt-2 text-orange-700">{item.qty}</div>
                <button
                  onClick={() => dispatch(increase_Amount({ id: item.id }))}
                >
                  +
                </button>
              </div>

              <button onClick={() => {dispatch(remove_item({ id: item.id }));handleToast()}}>
                <MdDelete className="text-2xl font-bold text-red-700" />
              </button>
            </div>
          ))
        )}
      </div>

  

      {cartItems.length == 0 ? (
        ""
      ) : (
        
       <div className="text-2xl font-bold my-10 mx-3 text-yellow-50 ">
        <div>Total Products:- {cartItems.length}</div>
        <div>Total Qty:- {totalItems}</div>
        <hr  className="border border-black my-2"/>
        <div>Total Price:- ₹  {totalPrice}.00</div>
        <div>
          <div className=" w-[100px] right-[95px] absolute p-2 buttom-[70px] mt-8 ">
      <button className="border border-black font-bold text-center text-xl p-1 rounded bg-orange-600 hover:text-orange-600 hover:bg-black "  > <span onClick={()=>{navigate('/Sucess')}} >Checkout</span></button>
     
    </div>
        </div>
      </div>
      )}
    </div>
    
    </>
  );
};

export default Cart;
