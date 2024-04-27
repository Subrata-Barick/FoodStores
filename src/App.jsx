import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import{useSelector} from 'react-redux';



const App = () => {
  const product=useSelector(store=>store.cart);

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App