import React from 'react'
import FAQ from '../Components/Faqs'
import ContectBox from '../Components/ContectBox'
import Slide from '../Components/Slide'
import ReviewCarousel from '../Components/Review'
import Client from '../Components/Clients'
import ClientTrustSection from '../Components/Growth'

const Home = () => {
  return (
    <div className=''>
      <Slide/>
      <ClientTrustSection/>
      <Client/>
      <ReviewCarousel/>
      <FAQ/>
      <ContectBox/>
    </div>
  )
}

export default Home