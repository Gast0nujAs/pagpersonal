import React from 'react'
import responsiveImg from "../assets/img/responsiveWeb.jpg";
import ecommerceImg from "../assets/img/ecommerce.jpg";
import softwareImg from "../assets/img/software.jpg";
export const Services = () => {
    return (
        <div >
            <h1 className='text-center text-3xl font-Lato font-semibold uppercase mt-10 text-slate-800'>
                Soluciones digitales para tu proyecto o empresa.
            </h1>
            <div className='flex mt-20 mx-10 mb-10'>
                <div className='w-1/2 pt-6 space-y-4 space-x-4'>
                    <h3 className='text-center text-3xl font-Lato font-semibold  mt-10 text-azul2'>Diseño Web | Responsive Design</h3>
                    <p className='text-center text-lg font-Lato font-semibold mt-10 text-slate-800 px-6'>
                        Diseñamos tu proyecto a gusto y medida logrando un sitio seguro  y eficiente,
                        con un diseño responsivo, adaptable a cualquier dispositivo, Mobile , Tablet o Escritorio.
                        Brindamos soporte mes a mes las 24hs.
                    </p>
                </div>
                <div>
                    <img src={responsiveImg} alt="Responsive Web" className='w-[500px] h-[400px] mb-10 mx-10 
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300' />
                </div>
            </div>
            <div className='flex mx-10 mb-10'>
                <div>
                    <img src={ecommerceImg} alt="" className='w-[500px] h-[400px] mb-10  mx-16 
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300' />
                </div>
                <div className='w-1/2 pt-6 space-y-4 space-x-4'>
                    <h3 className='text-center text-3xl font-Lato font-semibold  mt-10 text-azul2'>Tienda Online | E-COMMERCE</h3>
                    <p className='text-center text-lg font-Lato font-semibold mt-10 text-slate-800 px-6'>
                        Lleva tu negocio al mundo digital, con gran alcance y estructura,
                        teniendo tu inventario publicado en internet para la facilidad a los clientes, repercuti tu marca en internet
                        y maneja las ventas de modalidad online con tu propio carro de compras, con Diseño Responsivo.

                    </p>
                </div>
            </div>
            <div className='flex mx-10 mb-20'>
                <div className='w-1/2 pt-6 space-y-4 space-x-4 mt-10'>
                    <h3 className='text-center text-3xl font-Lato font-semibold  mt-10 text-azul2'>Sistema CRUD | Software</h3>
                    <p className='text-center text-lg font-Lato font-semibold mt-10 text-slate-800 px-6'>
                        Sistema a medida para tu empresa, mantener un orden y equilibrio en tu negocio,
                        control de inventario, facturación, alta baja y modificacion de empleados, stock 
                        y todo lo que ustedes requieran.

                    </p>
                </div>
                <div>
                    <img src={softwareImg} alt="Responsive Web" className='w-[500px] h-[400px] mb-10 mx-10
                    shadow-xl hover:shadow-2xl hover:scale-105 hover:cursor-pointer hover:duration-300' />
                </div>
            </div>


        </div>
    )
}
