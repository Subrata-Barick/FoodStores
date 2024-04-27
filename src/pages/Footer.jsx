
import React,{useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    const [input,setInput]=useState()
    const handleChange=(e)=>{
        setInput(e.target.value)

    }
  return (
    <div className=" relative mt-40">
        <div className="w-full flex items-center justify-center absolute bottom-[420px] ">
      <div className=" flex justify-around my-3 lg:w-[60%] items-center text-black bg-orange-600 p-5 rounded ">
        <div>
          <p className="text-xl font-bold">Ready to get Started</p>
          <p className="text-lg font-semibold text-center lg:ml-0 ml-2">Talk to us today</p>
        </div>
        <div>
            <button className="border font-bold border-black bg-black text-orange-600 px-2 py-1 rounded hover:bg-orange-600 hover:text-black hover:font-bold  lg:ml-0 ml-3">Get started</button>
        </div>
      </div>
      </div>{/* first top*/}
      <div>

      <div className="flex justify-center items-center p-3 bg-black text-white lg:h-[30rem] flex-col  ">
        <div className="flex justify-evenly flex-col lg:flex-row  items-center  mt-10 my-2 lg:p-3 gap-5">
            <div className="lg:w-[250px] lg:h-[200px]">
                <h3 className="lg:text-2xl text-orange-600 text-3xl text-center">Food Store</h3>
                <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, placeat.</p>
                </div>{/*One*/}
            <div className="lg:w-[250px] lg:h-[200px] flex justify-center items-center flex-col">
                <h4 className="lg:text-2xl text-orange-600 text-3xl lg:w-full w-28 ">Subscribe to get Important upadates</h4>
                <div className="my-2 flex justify-center items-center ">
                    <input type="text"  placeholder="Enter Your Email" className="rounded text-black  p-2" onChange={handleChange} value={input}/>
                </div>
                <button className="border my-2  border-orange-600 font-bold hover:border-black bg-black text-orange-600 px-2 py-1 rounded hover:bg-orange-600 hover:text-black hover:font-bold">Subscribe</button>
                </div>{/*Two*/}
            <div className="lg:w-[250px] lg:h-[200px] text-center">
                <h4 className="lg:text-2xl text-orange-600 text-3xl text-center">Follow us</h4>
                <div className="flex gap-3 text-2xl mt-3 justify-center items-center">
                       <p className="hover:text-orange-600"><FaFacebook/></p>
                <p className="hover:text-orange-600"><FaInstagramSquare/></p>
                <p className="hover:text-orange-600"><FaTwitter/></p>

                </div>
             
                </div>{/*Three*/}
            <div className="lg:w-[250px] lg:h-[200px] text-center">
                <h4 className="lg:text-2xl text-orange-600 text-3xl ">Call us</h4>
                <p>+91 9090000012</p>
                </div>{/*Four*/}

        </div>
        <hr  className="border border-white lg:w-[80rem] mt-28 "/>
        <div className="bg-black text-white flex justify-between flex-col lg:flex-row gap-80 mb-1">
        <p>@2024 FoodStore .ALL Rights Reserved</p>
        <div className="">
             <p>Privacy Police</p>
        <p>Terms and condition</p>

        </div>
       
      </div>

</div>

      </div>{/*second*/}
      
    </div>
  );
};

export default Footer;
