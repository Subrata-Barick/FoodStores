import React from 'react'
import Carousel from '../components/Carousel'
import MultiCarousel from '../components/MultiCarousel'
import TopBrand from '../components/TopBrand'
import FoodItems from '../components/FoodItems'
import Footer from '../pages/Footer'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <MultiCarousel/>
      <TopBrand/>
      <FoodItems/>
      <Footer/>
    </div>
  )
}

export default Home