import React from 'react'
import garantia from "../assets/img/seguro-de-calidad.png";
import seguridad from "../assets/img/apreton-de-manos.png";
import soporte from "../assets/img/apoyo-tecnico.png";

export const Condiciones = () => {
  return (
    <div className='flex flex-row  pb-10 space-around mx-16'>
        <div className='flex border border-[#5A76F2] w-[500px] h-[150px] px-20 mx-auto'>
            <img src={garantia} alt="" className='w-[130px]'/>
            <p className='pt-4 pl-6 font-semibold font-Lato '>Garantizamos la mejor experiencia y interaccion con el usuario</p>
        </div>
        <div className='flex border border-[#5A76F2] w-[500px] h-[150px] px-20 mx-auto'>
            <img src={seguridad} alt="" className='w-[130px] '/>
            <p className='pt-4 pl-6 font-semibold font-Lato '>Te ofrecemos un sitio seguro y confiable</p>
        </div>
        <div className='flex border border-[#5A76F2] w-[500px] h-[150px] px-20 mx-auto'>
            <img src={soporte} alt="" className='w-[100px] h-[120px] pt-4'/>
            <p className='pt-4 pl-6 font-semibold font-Lato '>Estamos siempre cuidando tu sistema! Nuestro soporte es mes a mes</p>
        </div>
    </div>
  )
}
