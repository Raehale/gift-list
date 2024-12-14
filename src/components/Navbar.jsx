import React, { useState } from 'react'
import { FaBars, FaTimes, } from 'react-icons/fa'
import { BsGiftFill } from 'react-icons/bs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-name">Wishlist</div>
      <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <BsGiftFill size="40" className="navbar-logo" />
        <ul className="navbar-ul-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size="25" /> : <FaBars size="25" />}
      </div>
    </header>
  )
}

export default Navbar