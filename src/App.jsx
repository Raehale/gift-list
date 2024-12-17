import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'


const App = () => {
  return (
    <>
      <Navbar />
      <main className="center-container">
        <Header />
        <Hero className="hero-section" />
      </main>   
    </>    
  )
}

export default App
