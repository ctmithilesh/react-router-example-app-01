import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserNotFound() {

  const navigate = useNavigate()
  const navigateBack = ()=>{

        navigate('/users-list')
  }  
  return (
    <div>
        <h1> User Not Found! </h1>
        <button onClick={()=> navigateBack()}> Go Back </button>

    </div>
  )
}


