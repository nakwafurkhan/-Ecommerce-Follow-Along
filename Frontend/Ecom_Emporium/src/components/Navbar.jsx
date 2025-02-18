import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Kalvium E-Mart</h1>
        <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/my-product"><button>My Product</button></Link>
        <Link to="/add-product"><button>Add Product</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
            {/* <Link to="/registration"><button>Sign-In</button></Link>
            <Link to="/sign-in"><button>Sign-Up</button></Link> */}
        </div>
    </div>
  )
}

export default Navbar