import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="center-container">
        <Header />
        <Hero />
      </div>   
    </>    
  )
}

export default App
