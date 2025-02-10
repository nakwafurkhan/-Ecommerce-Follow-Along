import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>E-Mart</h1>
        <div className='nav-buttons'>
            <Link to="/registration"><button>Sign-In</button></Link>
            <Link to="/sign-in"><button>Sign-Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar