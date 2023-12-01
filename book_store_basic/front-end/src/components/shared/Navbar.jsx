import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className="hidden md:block bg-yellow-400 sticky top-0 left-0 z-[99999]">
      <div className="header-area px-2 lg:px-10 grid grid-cols-12 ">
          <div className="col-span-2">
            <h3 className="py-8 xl:py-10 text-2xl font-bold xl:text-center">Dream <span className="text-white">Books</span></h3>
          </div>

          <div className="col-span-10">

            <ul className="flex float-right">

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/' className='bg-red-400 text-lg font-semibold text-white py-2 px-5 rounded-lg' >New</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/home' className={({ isActive }) => isActive? "text-white text-lg font-semibold": 'text-lg font-semibold'}>Home</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/ProgrammerBooks' className={({ isActive }) => isActive? "text-white text-lg font-semibold": 'text-lg font-semibold'}>All Books</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/service' className={({ isActive }) => isActive? "text-white text-lg font-semibold": 'text-lg font-semibold'}>Python</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/projects' className={({ isActive }) => isActive? "text-white text-lg font-semibold": 'text-lg font-semibold'}>JavaScript</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                <NavLink to='/testimonials' className={({ isActive }) => isActive? "text-white text-lg font-semibold": 'text-lg font-semibold'}>HTML & CSS</NavLink>
              </li>

              <li className="py-10 px-2 lg:px-5">
                  <NavLink to='/Registration' className='text-lg font-bold text-red-500 border-b-2 pb-3 border-red-500'>Register New Book</NavLink>
              </li>

            </ul>

            
            
            
            
            

                  {/* not used yet */}
            
            

          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
