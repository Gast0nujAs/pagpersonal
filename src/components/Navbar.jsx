import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <ul className="flex align-center  px-10 text-lg font-bold font-Lato space-x-10 px-16">
      <li onClick={() => navigate('/')} className="hover:text-azul2  hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">
        Home
        </li>
      <li onClick={() => navigate('/services')} className="hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Services</li>
      <li onClick={() => navigate('/contacto')} className="hover:text-azul2 hover:scale-125 hover:border-b-2 hover:border-b-azul hover:cursor-pointer hover:transition ">Contact</li>
    </ul>
  )
}

