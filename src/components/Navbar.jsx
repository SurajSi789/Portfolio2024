import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>SS</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/experience' className={({ isActive }) => isActive ? "text-blue-600 bg-white py-2 px-3" : "text-black hover:bg-white hover:text-blue-600 py-2 px-3 transition-transform" }>
          Experience
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 bg-white py-2 px-3" : "text-black hover:bg-white hover:text-blue-600 py-2 px-3"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600 bg-white py-2 px-3" : "text-black hover:bg-white hover:text-blue-600 py-2 px-3"}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
