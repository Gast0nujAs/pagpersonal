import background from "../assets/img/fondoback.png"
import { Presentacion } from "../components/Presentacion.jsx"
export const Home = () => {
    return (
        <div
        className="flex flex-col sm:pt-14 md:pt-20 shadow-xl"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '91vh',
            width: '100%',
        }}
        >
            <h1 className="sm:text-3xl md:text-4xl text-white text-center font-Anton hover:text-azul2 hover:animate-flip-x hover:cursor-pointer">
                gastoncode
            </h1>
            <span className="text-white text-center shadow-xl items-center sm:mx-4 md:mx-0 justify-center font-Lato font-semibold sm:text-lg md:text-xl pt-5">
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