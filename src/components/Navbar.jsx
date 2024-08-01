import React from 'react'

export const Navbar = () => {
  return (
    <ul className="flex align-center  px-10 text-lg font-bold font-Lato space-x-10 px-16">
      <li className="hover:text-azul2  hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Home</li>
      <li className="hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Services</li>
      <li className="hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Contact</li>
    </ul>
  )
}

