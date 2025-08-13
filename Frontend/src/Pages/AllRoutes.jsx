import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Career from './Career';
import Project from './Project';
import Service from './Service';
import ContactPage from './ContectUs';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/service' element={<Service/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactPage/>} />


        <Route path='/footer' element={<Footer/>} />
    </Routes>
  )
}

export default AllRoutes