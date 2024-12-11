import React from 'react'
import '../Header.css'

const Header = () => {
  return (
    <div>
        <div className="header">
            <h1>My List</h1>
        </div>
        <div className="button-container">
            <button type="button" className="btn">New Item</button>
        </div>
    </div>
  )
}

export default Header