import background from "../assets/img/fondoback.png"
import { Presentacion } from "../components/Presentacion.jsx"
import logoCentral from "../assets/img/logocentral1.png"
export const Home = () => {
    return (
        <div
        className="flex flex-col sm:pt-14 md:pt-4 shadow-xl"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '91vh',
            width: '100%',
        }}
        >
            <img src={logoCentral} alt="" className="flex -mt-24 md:-mt-20 w-[220px] h-[220px] md:w-[300px] md:h-[300px] mx-auto "/>
            <span className="text-white text-center items-center  -mt-12 md:-mt-16 sm:mx-4 md:mx-0 justify-center font-Lato font-semibold sm:text-lg md:text-xl ">
                Somos una empresa de Desarrollo de Software 
                fundada por Gaston Hernandez junto a un amplio, sofisticado y profesional equipo
            </span>
            <p className="text-white text-center items-center sm:mx-4 md:mx-0 justify-center font-Lato font-bold sm:text-lg md:text-xl pt-4">
                Estamos listos para llevar tu negocio a lo mas alto!
                </p>

            <Presentacion />
        </div>
    )
}