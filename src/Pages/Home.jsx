import React from 'react'
import LandingPage from '../Components/LandingPage/Landingpage'
import Properties from '../Components/Properties/Properties'
import WeOffer from '../Components/WhatWeOffer/WeOffer'

const Home = () => {
  return (
    <div>
     <LandingPage />
     <WeOffer />
     <Properties />
    </div>
  )
}

export default Home