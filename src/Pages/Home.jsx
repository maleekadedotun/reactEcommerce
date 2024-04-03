import React from 'react'

import Announcement from '../Component/Announcement';
import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Categories from '../Component/Categories';
import Products from '../Component/Products';
import NewsLetter from '../Component/NewsLetter';
import Footer from '../Component/Foot';
const Home = () => {
  return (
    <div className='home-page'>
      <Announcement />
     <Navbar /> 
     <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />  
    </div>
  )
}

export default Home
