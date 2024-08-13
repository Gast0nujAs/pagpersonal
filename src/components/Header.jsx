import { Navbar } from "./Navbar";

export const Header = () => {
    return ( 
        <div className="sticky flex top-0 left-0 right-0 place-content-between items-center px-10  h-[100px] bg-gradient-to-t from-[#000000] from-%90
        to-[#6665ba] to-%100 text-white shadow-xl">
            <h1 className="sm:text-xl md:text-2xl sm:px-6  md:px-20 font-Anton hover:text-azul2 hover:scale-125 hover:cursor-pointer">
                GastonCode
                </h1>
            <Navbar />
        </div>
    )
};