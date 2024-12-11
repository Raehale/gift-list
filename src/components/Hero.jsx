import React from 'react'
import items from '../giftData'
import '../Hero.css'

const Hero = () => {
  return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>
                <label>
                    <input type="checkbox" /> {item}
                </label>
            </li>
        ))}
    </ul>
  )
}

export default Hero