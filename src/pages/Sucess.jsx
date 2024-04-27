import React, { useEffect, useState } from 'react'
import {BeatLoader} from 'react-spinners'

const Sucess = () => {
    const[loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div>
         <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading?  <BeatLoader color="#36d7b7" />: <> <h2 className='text-5xl font-semibold mb-4 text-orange-700'>Order Successful!</h2>
      <p className='text-yellow-100'>Your Order Has Been Successfully placed</p></>
      }
    
    
    </div>
    </div>
  )
}

export default Sucess