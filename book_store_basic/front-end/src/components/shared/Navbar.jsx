import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/registration'>Registration</NavLink>
        <NavLink to='/programmerbooks'>Books for Coders</NavLink>
    </div>
  )
}

export default Navbar
