import React from 'react'
import LandingPage from '../Components/LandingPage/Landingpage'
import Lifestyle from '../Components/Lifestyle/Lifestyle'
import NewProperty from '../Components/NewProperty/NewProperty'
import Properties from '../Components/Properties/Properties'
import WeOffer from '../Components/WhatWeOffer/WeOffer'

const Home = () => {
  return (
    <div>
     <LandingPage />
     <WeOffer />
     <Properties />
     <Lifestyle />
     {/* <NewProperty /> */}
    </div>
  )
}

export default Home