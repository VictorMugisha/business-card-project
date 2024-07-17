import React from 'react'
import './App.css'

import profilePic from "./images/profile.png"
import Identification from './components/Identification'
import About from './components/About'
import Interests from './components/Interests'
import SocialMedias from './components/SocialMedias'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <img src={profilePic} className='profile-picture' />
      <Identification />
      <About />
      <Interests />
      <SocialMedias />
      <Footer />
    </div>
  )
}

export default App
