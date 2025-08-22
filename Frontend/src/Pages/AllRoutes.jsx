import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Career from './Career';
import Project from './Project';
import Service from './Service';
import ContactPage from './ContectUs';
import WebDevelopment from '../Services/Web';
import SEOOptimization from '../Services/SEO';
import MobileAppDevelopment from '../Services/Mobile';
import DigitalMarketing from '../Services/Digital';
import UIUXDesign from '../Services/Uiux';
import AdminLogin from '../admin/AdminLogin';
import OtpVerify from '../admin/OtpVerify';
import AdminDashboard from '../admin/AdminDashboard';
import NotFound from '../Components/NotFound';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/service' element={<Service/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactPage/>} />

        <Route path='/service/web' element={<WebDevelopment/>} />
        <Route path='/service/app' element={<MobileAppDevelopment/>} />
        <Route path='/service/Digital' element={<DigitalMarketing/>} />
        <Route path='/service/Seo' element={<SEOOptimization/>} />
        <Route path='/service/Uiux' element={<UIUXDesign/>} />

        
        <Route path='/admin/login' element={<AdminLogin/>} />
        <Route path='/admin/verify-otp' element={<OtpVerify/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />

        <Route path='*' element={<NotFound/>} />


        <Route path='/footer' element={<Footer/>} />
    </Routes>
  )
}

export default AllRoutes