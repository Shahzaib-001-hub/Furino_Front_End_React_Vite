import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Categories from "../Components/Categories/Categories";
import Products from '../Components/Products/Products';
import RoomShowcase from '../Components/RoomShowcase/RoomShowcase';
import FurnitureGallery from '../Components/FurnitureGallery/FurnitureGallery';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <Products />
    <div className="flex min-h-[20px] items-center bg-[#faf9f6]">
    <RoomShowcase />
    </div>
    <FurnitureGallery />

      <Footer />
    </>
  )
}

export default Home
