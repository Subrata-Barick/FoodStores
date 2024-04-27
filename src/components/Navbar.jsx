import React from "react";
import image from "../assets/food1.png";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const cartItems=useSelector((state)=>state.cart.cart);
   const { loginWithRedirect,logout,isAuthenticated ,user } = useAuth0();
 
  
  return (
    <div className="sticky top-0 bottom-0   ">
      <div className="flex flex-wrap justify-around m-2 p-2  bg-amber-700 ">
        <Link to='/'> <div>
          <div className="lg:w-[15%]  ">
            <img src={image} alt="logo image" className="rounded-full" />
          </div>
       <div className="lg:text-lg font-bold lg:ml-[-18px] text-2xl lg:text-left text-center">Food Store</div> 
        </div></Link> 
        {/*logo*/}
        <div>
          <div className="mt-2">
            <input type="text" placeholder="Search items"  className=" rounded-md border-black-300 border w-[20rem] p-2"/>
          </div>
        </div>
        {/*search logo*/}
        <div>
          <div className="text-3xl mt-1 flex font-bold">
            <div className="text-lg mr-8 mt-2 font-bold">
              {
                isAuthenticated?  <div><button className="p-2 text-white bg-amber-800 hover:bg-orange-500 rounded-lg text-sm hover:scale-100 transition-all duration-200 " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></div>: <div>  <button className="p-2 text-white bg-amber-800 hover:bg-orange-500 rounded-lg text-sm hover:scale-100 transition-all duration-200 " onClick={() => loginWithRedirect()}>Log In /Sign Up</button></div>
              }
             
            
             
                 
            </div>
            <div className="font-bold text-xl  mx-5 mt-2">
              {
                isAuthenticated && <span>{user.name}</span>
              }
            </div>
            
          <Link to='/cart' className="flex" >
             
<FaCartPlus className="mt-3"/>
            
            <div>
<sup>{cartItems.length}</sup>
            </div></Link>
             
           
            
          </div>
        </div>
        {/*cart*/}
        
      </div>
    </div>
  );
};

export default Navbar;
