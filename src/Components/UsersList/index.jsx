import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../Apis/getUsers'
export default function UsersList() {

    const [users,setUsers] = useState()

    useEffect(()=>{
            const fetchUsers = async()=>{
                const result = await getUsers()
                setUsers(result)
            }
            fetchUsers()
    },[])
    console.log(users)
  return (
        <div>
            <h1> List of Users</h1>
            {users != null && users.length ? users.map((item)=>(
                     <div key={item}>
                     <h3>{item.first_name} {item.last_name} </h3>
                     <img 
                        alt="img"
                        src={item.avatar}
                     /> 
                     <br />
                     <Link to={`/user/${item.email}`}> 
                     {item.email} 
                     </Link>
                 </div>
            )): <span> Loading.... </span>}
           
        </div>

  )
}
