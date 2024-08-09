import React from 'react'
import responsiveImg from "../assets/img/responsiveWeb.jpg";
import ecommerceImg from "../assets/img/ecommerce.jpg";
import softwareImg from "../assets/img/software.jpg";
import { useNavigate } from 'react-router-dom';
export const Services = () => {
    const navigate = useNavigate();
    return (
        <div className=' md:items-center'>
            <h1 className='text-center sm:text-2xl sm:mx-6 md:mx-0 md:text-3xl font-Lato font-semibold uppercase mt-10 text-slate-800'>
                Soluciones digitales para tu proyecto o empresa.
            </h1>
            <div className='md:flex sm:mt-0 md:mt-20 mx-10 md:justify-evenly mb-10 border-b-2 border-slate-200'>
                <div className='md:w-1/2 pt-6 space-y-4 space-x-4'>
                    <h3 className='text-center sm:text-2xl sm:pb-2 md:pb-0 md:text-3xl font-Lato font-semibold  mt-10 text-azul2'>Diseño Web | Responsive Design</h3>
                    <p className='text-center text-lg font-Lato font-semibold md:mt-10 sm:pb-10 md:mb-0 text-slate-800 px-6'>
                        Diseñamos tu proyecto a gusto y medida logrando un sitio seguro  y eficiente,
                        con un diseño responsivo, adaptable a cualquier dispositivo, Mobile , Tablet o Escritorio.
                        Brindamos soporte mes a mes las 24hs.
                    </p>
                </div>
                <div>
                    <img src={responsiveImg} alt="Responsive Web" className='sm:w-[300px] sm:h-[250px] sm:mx-auto sm:mb-10
                    md:space-x-10 md:w-[500px] md:h-[400px] mb-10 mx-10 
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300 border-b-4 border-azul2' />
                </div>
            </div>
            <div className='md:flex md:flex-row-reverse md:justify-evenly mx-10 md:mr-26 mb-10 border-b-2 border-slate-200'>

                <div className='md:w-1/2 pt-6 space-y-4 space-x-4'>
                    <h3 className='text-center sm:text-2xl sm:pb-2 md:pb-0 md:text-3xl font-Lato font-semibold  mt-10 text-azul2'>Tienda Online | E-COMMERCE</h3>
                    <p className='text-center text-lg font-Lato font-semibold mt-10 text-slate-800 px-6'>
                        Lleva tu negocio al mundo digital, con gran alcance y estructura,
                        teniendo tu inventario publicado en internet para la facilidad a los clientes, repercuti tu marca en internet
                        y maneja las ventas de modalidad online con tu propio carro de compras, con Diseño Responsivo.

                    </p>
                </div>
                <div>
                    <img src={ecommerceImg} alt="" className='sm:w-[300px] sm:mt-10 sm:h-[250px] sm:mx-auto
                     md:w-[500px] md:h-[400px]  mb-10  mx-16 
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300 border-b-4 border-azul2' />
                </div>
            </div>
            <div className='md:flex mx-10 mb-20 md:justify-evenly'>
                <div className='md:w-1/2 pt-6 space-y-4 space-x-4 mt-10'>
                    <h3 className='text-center sm:text-2xl sm:pb-2 md:pb-0 md:text-3xl font-Lato font-semibold  mt-10 text-azul2'>Sistema CRUD | Software</h3>
                    <p className='text-center text-lg font-Lato font-semibold mt-10 text-slate-800 px-6'>
                        Sistema a medida para tu empresa, mantener un orden y equilibrio en tu negocio,
                        control de inventario, facturación, alta baja y modificacion de empleados, stock
                        y todo lo que ustedes requieran.

                    </p>
                </div>
                <div>
                    <img src={softwareImg} alt="Responsive Web" className='sm:w-[300px] sm:mt-10 sm:h-[250px] sm:mx-auto md:w-[500px] md:h-[400px]  mx-10
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300 border-b-4 border-azul2' />
                </div>
                
            </div>
            <button onClick={() => navigate('/contacto')} className='flex mx-auto font-Lato text-white bg-azul2 px-6 py-2 uppercase justify-center items-center
            rounded-lg sm:w-1/2 md:w-1/3 mb-10 hover:shadow-2xl hover:bg-[#6665ba] hover:scale-105 hover:cursor-pointer hover:duration-300'>no dudes en consultarnos!</button>
        </div>
    )
}
