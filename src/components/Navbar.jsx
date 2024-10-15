import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'
import { navLinks } from '../Constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar transition-all duration-300 ease-in-out'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] transition-colors duration-300 ${active === nav.title ? "active-link" : "text-dimWhite"} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}       
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>


      {/* Mobile navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain hover:scale-110 transition-transform duration-200 '
          onClick={() => setToggle(!toggle)}
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >

          <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
