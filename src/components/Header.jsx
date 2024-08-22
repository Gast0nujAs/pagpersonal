import { Navbar } from "./Navbar";
import logoSvg from "../assets/img/gastoncode.png";
import { useEffect, useState } from "react";
export const Header = () => {
    const [header, setHeader] = useState(false);
    const scrollHeader = () => {
        if (window.scrollY >= 30) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader);
    }, []);

    
    return ( 
        <div className="sticky flex top-0 left-0 right-0 place-content-between items-center px-10  h-[100px] bg-gradient-to-t from-[#000000] from-%90
        to-[#6665ba] to-%100 text-white shadow-xl">
            <a href="" >
                <img src={logoSvg} alt="" className="flex justify-start -mx-6 md:mx-0 w-[340px] " />
            </a>
            <Navbar />
        </div>
    )
};
//**<h1 className="sm:text-xl md:text-2xl sm:px-6  md:px-20 font-Anton hover:text-azul2 hover:scale-125 hover:cursor-pointer"> */
