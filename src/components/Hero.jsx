import React from 'react'
import items from '../giftData'
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa"

const Hero = () => {
  const renderItems = items.map(function(item, index) {
    return (
      <li key={index} className="hero-items">
          <label>
            <input type="checkbox" />
              <span className="hero-item">
                {item} 
                <div>
                  <FaPencilAlt size="20" /> <FaRegTrashAlt size="20" />
                </div>
              </span> 
          </label>
      </li>
    )
  })

  return <ul className="hero-ul">{renderItems}</ul>
}


export default Hero