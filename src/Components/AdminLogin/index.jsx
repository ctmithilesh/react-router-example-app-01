import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export default function AdminLogin() {

    const [username,setUserName] = useState(null)
    const [password,setPassWord] = useState(null) 

    const navigate = useNavigate()

    const handleInputChange = (e)=>{
        const target = e.target
        const name = target.name

        if(name === "username"){
            setUserName(target.value)
        }
        if(name === "password"){
            setPassWord(target.value)
        }


    }
    const handleFormSubmit = (e)=> {
            e.preventDefault()
            console.log('You submitted the form',username,password)
            if(username === "john" && password === "admin"){
                navigate('/hello')
            }
            else{
                navigate('/user/not/found')
            }
            
    }
    console.log(username,password)
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Admin Username </label>
            <input 
                name="username"
                type="text"
                placeholder='enter username'
                onChange={handleInputChange}
            /> <br />
            <label>Enter password</label>
            <input
                name="password"
                type="password"
                placeholder='enter password' 
                onChange={handleInputChange}
            /> <br />
            <button type="submit">
                Login
            </button>
        </form>


    </div>



  )
}
