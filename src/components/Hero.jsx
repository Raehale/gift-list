import React from 'react'
import items from '../giftData'

const Hero = () => {
  const renderItems = items.map(function(item, index) {
    return (
      <li key={index}>
          <label>
            <input type="checkbox" /> {item}
          </label>
      </li>
    )
  })

  return <ul>{renderItems}</ul>
}


export default Hero