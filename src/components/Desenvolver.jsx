import React from 'react'
import { Habilidades } from './Habilidades'

export const Desenvolver = () => {
    return (
        <div className='pb-20'>
            <div className='text-center pt-10 text-3xl font-Anton text-[#E06B1A] pb-6 font-bold'>
                <h3>¿Como nos desenvolvemos?</h3>
            </div>
            <div className='sm:flex sm:flex-col sm:space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 justify-center pt-10 pb-10  mx-auto'>
                <div className='bg-gradient-to-t from-[#000000] from-%40 to-[#B0AFF9] to-%100 mx-16 
                rounded-lg p-4 hover:cursor-pointer hover:animate-pop shadow-2xl shadow-orange-300'>
                    <h4 className='text-center text-xl font-bold text-[#E06B1A] pb-4'>Analisis de Mercado</h4>
                    <p className='font-Lato text-lg text-center font-semibold text-white'>Estudiamos el mercado y las competencias, siempre a favor de la comodidad y deseos del cliente,
                        para seguir innovando y dejando una huella en el mundo del desarrollo.

                    </p>
                </div>
                <div className='shadow-2xl shadow-orange-300 bg-gradient-to-t from-[#000000] from-%40 to-[#B0AFF9] to-%100 mx-16 rounded-lg p-4  hover:cursor-pointer hover:animate-pop'>
                    <h4 className='text-center text-xl font-bold text-[#E06B1A] pb-4 '>Diseño Grafico</h4>
                    <p className='font-Lato text-lg text-center font-semibold text-white'>Contamos con experencia y personal excelente en el area de Disenio Grafico
                        para poder diseñar interfaces atractivas, funcionales y responsivas.
                    </p>
                </div>


                <div className='shadow-2xl shadow-orange-300 bg-gradient-to-t from-[#000000] from-%40 to-[#B0AFF9] to-%100 mx-16 rounded-lg p-4  hover:cursor-pointer hover:animate-pop'>
                    <h4 className='text-center text-xl font-bold text-[#E06B1A] pb-4 '>Desarrollo Web</h4>
                    <p className='font-Lato text-lg text-center font-semibold text-white'>Empezamos a desarrollar tu sistema en base a las ideas del cliente y la creatividad
                        del area Diseño Grafico, totalmente ajustable y a medida, con buena interaccion para usuarios.
                    </p>
                </div>
                <div className='shadow-2xl shadow-orange-300 bg-gradient-to-t from-[#000000] from-%40 to-[#B0AFF9] to-%100 mx-16 rounded-lg p-4  hover:cursor-pointer hover:animate-pop'>
                    <h4 className='text-center text-xl font-bold text-[#E06B1A] pb-4 '>Testing QA</h4>
                    <p className='font-Lato text-lg text-center font-semibold text-white'>Realizamos diferentes testings con usuarios reales para garantizar la mejor experiencia,
                        y evaluar como responde el proyecto en diferentes instancias.
                    </p>
                </div>
            </div>
            <Habilidades />
        </div>

    )
}
