import { Navbar } from "./Navbar";

export const Header = () => {
    return ( 
        <div className="flex place-content-between items-center px-10  h-[100px] ">
            <h1 className="text-xl mx-5 font-Anton">Desarrollo Hernandez</h1>
            <Navbar />
        </div>
    )
};