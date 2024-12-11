import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-name">Wishlist</div>
      <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  )
}

export default Navbar