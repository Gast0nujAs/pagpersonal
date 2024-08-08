import React from 'react'
import svgFacebook from "../assets/svg/icons8-facebook-nuevo.svg"
import svgInstagram from "../assets/svg/icons8-instagram.svg"
import svgLinkedin from "../assets/svg/icons8-linkedin.svg"
import svgWsp from "../assets/svg/icons8-whatsapp.svg"


export const Footer = () => {
  return (
    <footer className="footer mt-auto w-full sm:h-[150px] md:h-[120px] bg-[#2b2b2b] ">
      <h2 className='text-white sm:text-xl md:text-2xl font-Anton pt-2 text-center'>Gaston Dev</h2>
      <p className='text-white text-center sm:text-sm md:text-lg pt-2 font-Lato'>Desarrollo Web & Software © 2024. Todos los derechos reservados</p>
        <div className='flex justify-end px-6 items-center sm:space-x-2 sm:pt-4 md:pt-0 md:space-x-4'>
            <a target='_blank' rel='noreferrer noopener' href="https://www.facebook.com/gazzlasflores?locale=es_LA" className=''>
            <img src={svgFacebook} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#3b5998]" />
            </a>
            
            <img src={svgInstagram} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#DD2A7B]" />
            <img src={svgLinkedin} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[white]" />
            <img src={svgWsp} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#25D366]" />
        </div>
    </footer>
  )
}
