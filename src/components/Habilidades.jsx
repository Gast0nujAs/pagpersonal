import React from 'react'
import css from "../assets/img/css-3.png";
import html from "../assets/img/html-5.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react-or.png";
import sql from "../assets/img/servidor-sql.png"    ;
import mysql from "../assets/img/mysql.png"    ;
import node from "../assets/img/nodejs.png"    ;


export const Habilidades = () => {
  return (
    <div className='flex grid grid-cols-7 pt-16 px-20 text-center justify-center pb-20 mx-10'>

        <div>
            <img src={html} alt="html" className="w-1/2 border-r-2 pr-6" />
            
        </div>
        <div>
            <img src={css} alt="css" className= "w-1/2 border-r-2 pr-6 " />
            
        </div>
        <div>
            <img src={js} alt="JavaScript" className="w-1/2 border-r-2 pr-6" />
           
        </div>
        <div>
            <img src={react} alt="css" className="w-[90px] border-r-2 pr-6" />
           
        </div>
        <div className=''>
            <img src={node} alt="css" className="w-1/2 border-r-2 pr-6" />
            
        </div>
        <div>
            <img src={sql} alt="css" className="w-1/2 border-r-2 items-center justify-center pr-6" />
            
        </div>
        <div>
            <img src={mysql} alt="" className='w-1/2 ' />
        </div>


    </div>
  )
}
