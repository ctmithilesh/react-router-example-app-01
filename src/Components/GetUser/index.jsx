import React from 'react'
import { useParams } from 'react-router-dom'

export default function GetUser() {

        const { id, firstname } = useParams()

  return (
    <div>
        <h1>Welcome User </h1>
        <ol>
            <li key={id}>Username is {firstname}</li>
        </ol>


    </div>
  )
}
