import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1> I am Services</h1> 
      <div>
        <h3> Our Services </h3>
        <ul>
          <li>
            <Link to='/services/it-consulting'>
                IT Consulting 
            </Link>
          </li>
          <li>
            <Link to='/services/mobile-app-development'>
               Mobile App Development
            </Link>
          </li>
          <li>
            <Link to='/services/web-development'>
                Web Development 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
