import React from 'react'
import css from "../assets/img/css-3.png";
import html from "../assets/img/html-5.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react-or.png";
import sql from "../assets/img/servidor-sql.png"    ;
import mysql from "../assets/img/figma.png"    ;
import node from "../assets/img/nodejs.png"    ;


export const Habilidades = () => {
  return (
    <div className='sm:flex sm:flex-row md:grid md:grid-cols-7 md:pt-16 md:px-20 text-center justify-center pb-10 mx-10'>

        <div>
            <img src={html} alt="html" className="sm:[90px] md:w-1/2 border-r-2 pr-6" />
            
        </div>
        <div>
            <img src={css} alt="css" className= "sm:[90px] md:w-1/2 border-r-2 pr-6 " />
            
        </div>
        <div>
            <img src={js} alt="JavaScript" className="sm:[90px] md:w-1/2 border-r-2 pr-6" />
           
        </div>
        <div>
            <img src={react} alt="css" className="sm:w-[60px] md:w-[90px] border-r-2 pr-6" />
           
        </div>
        <div className=''>
            <img src={node} alt="css" className="sm:w-[120px] md:w-1/2 border-r-2 pr-6" />
            
        </div>
        <div>
            <img src={sql} alt="css" className="sm:[120px] md:w-1/2 border-r-2 items-center justify-center pr-6" />
            
        </div>
        <div>
            <img src={mysql} alt="" className='sm:w-[220px] md:w-[70px] ' />
        </div>


    </div>
  )
}
