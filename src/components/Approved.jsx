import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Approved = ({element}) => {
    const items=useSelector(state=>state.cart.cart)
    console.log('items',items)
  return items.length>0?element : <Navigate to='/'/>
}

export default Approved