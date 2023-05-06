import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const { email } = useParams()



  return (
    <div>
        <h1> Welcome, {email} </h1>
    </div>
  )
}
