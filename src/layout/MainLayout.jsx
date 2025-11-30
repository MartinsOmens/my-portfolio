import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../pages/Hero'
import About from '../pages/About'
import Experience from '../pages/Experience'
import Project from '../pages/Project'
import Footer from '../components/Footer'

 
const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experience/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default MainLayout
