import React from 'react'
import garantia from "../assets/img/seguro-de-calidad.png";
import seguridad from "../assets/img/apreton-de-manos.png";
import soporte from "../assets/img/apoyo-tecnico.png";

export const Condiciones = () => {
  return (
    <div className='flex md:flex-row sm:flex-col pb-10 space-around md:mx-16 sm:mx-6 sm:space-y-8 md:space-y-0'>
        <div className='flex border border-[#6665ba] sm:w-[300px] md:w-[500px] h-[150px] sm:px-10 md:px-20 mx-auto p-2'>
            <img src={garantia} alt="" className='sm:w-[100px] md:w-[130px]'/>
            <p className='md:pt-4 pl-6 font-semibold font-Lato text-[#969B8B]'>Garantizamos la mejor experiencia y interaccion con el usuario</p>
        </div>
        <div className='flex border border-[#6665ba] sm:w-[300px] md:w-[500px] h-[150px] sm:px-10 md:px-20 mx-auto p-2'>
            <img src={seguridad} alt="" className='sm:w-[100px] md:w-[130px] '/>
            <p className='md:pt-4 pl-6 font-semibold font-Lato text-[#969B8B]'>Te ofrecemos un sitio seguro y confiable</p>
        </div>
        <div className='flex border border-[#6665ba] sm:w-[300px] md:w-[500px] md:h-[150px] sm:px-10 md:px-20 mx-auto p-2'>
            <img src={soporte} alt="" className='md:w-[100px] md:h-[120px] sm:h-[100px] pt-4'/>
            <p className='sm:pt-0 sm:mb-2 md:pt-4 pl-6 font-semibold font-Lato text-[#969B8B]'>Estamos siempre conectados! Nuestro soporte es mes a mes</p>
        </div>
    </div>
  )
}
