import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   <div>
        <h1>404 Not Found </h1>
        <p> The page you requested could not be found. </p>
        <Link to='/'>Go Back </Link>
    </div>
  )
}
