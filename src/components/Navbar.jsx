import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'


export const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  };
  const content =
    <>
      <ul className={`${open ? "flex" : "hidden"} 
     flex-col text-center  block absolute transition mt-10 text-center text-2xl pt-20 space-y-6 left-0 text-white w-full h-[100vh]  
     bg-gradient-to-b from-[#000000] from-%80 to-[#6665ba] to-%100  md:hidden`}>
        
          <Link to='/'>
            <li onClick={() => setOpen(!open)}
              className="
       hover:text-azul2  hover:scale-125  hover:cursor-pointer hover:transition mt-14">

              Home
            </li>

          </Link>

          <Link to='/services'>
            <li onClick={() => setOpen(!open)}
              className="
       hover:text-azul2  hover:scale-125  hover:cursor-pointer hover:transition ">

              Services
            </li>

          </Link>
          <Link to='/contacto'>
            <li onClick={() => setOpen(!open)}
              className="
       hover:text-azul2  hover:scale-125  hover:cursor-pointer hover:transition ">

              Contact
            </li>

          </Link>
        
      </ul>
    </>

  return (
    <nav>


      <ul className="flex align-center  px-10 text-lg font-bold font-Lato space-x-10 px-16">
        <li onClick={() => navigate('/')} className="sm:hidden md:flex hover:text-azul2  hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">
          Home
        </li>
        <li onClick={() => navigate('/services')} className="sm:hidden md:flex hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Services</li>
        <li onClick={() => navigate('/contacto')} className="sm:hidden md:flex hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Contact</li>
      </ul>
      <div>
        {open && content}
      </div>
      <button className="md:hidden fixed top-6 right-10 justify-center items-center transition text-white  " onClick={handleClick} >
        {open ? <Hamburger color='white' toggled={open} toggle={setOpen} /> : <Hamburger color='white' toggled={open} toggle={setOpen} />}
      </button>
    </nav>
  )
}

