import { Navbar } from "./Navbar";

export const Header = () => {
    return ( 
        <div className="sticky flex top-0 left-0 right-0 place-content-between items-center px-10  h-[100px] bg-gradient-to-t from-[#000000] from-%40
        to-[#B0AFF9] to-%100 text-white">
            <h1 className="text-2xl px-20 font-Anton hover:text-azul2 hover:scale-125 hover:cursor-pointer">Gaston Dev</h1>
            <Navbar />
        </div>
    )
};