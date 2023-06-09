import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
export default function Navigation() {
  return (
    <nav class="nav">
        <ul>
            <li>
                <Link class="nav-item" to='/'>
                    ABC Corp Ltd 
                </Link>
            </li>
            <li>
                <Link to='/users-list'>
                    List of Users 
                </Link>
            </li>
            <li>
                <Link to='/services'>
                    Services 
                </Link>
            </li>
            <li>
                <Link to='/products'>
                    Products 
                </Link>
            </li>  
            <li>
                <Link to='/loans'>
                    Loans 
                </Link>
            </li>  
            <li>
                <Link to='/admin/login'>
                    Admin Login
                </Link>
            </li>     
        </ul>
    </nav>
  )
}
