import background from "../assets/img/fondoback.png"
import { Presentacion } from "../components/Presentacion.jsx"
export const Home = () => {
    return (
        <div
        className="flex flex-col pt-20"
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
            width: '100%',
        }}
        >
            <h1 className="text-4xl text-white text-center font-Anton hover:text-azul2 hover:animate-flip-x hover:cursor-pointer">Gaston Dev</h1>
            <span className="text-white text-center items-center justify-center font-Lato font-semibold text-xl pt-5">
                Somos una pequeña empresa de desarrollo comandada por Gaston Hernandez y detras, un excelente y profesional equipo.
            </span>
            <p className="text-white text-center items-center justify-center font-Lato font-semibold text-xl pt-4">
                Estamos preparados para llevar tu negocio a lo mas alto!
                </p>

            <Presentacion />
        </div>
    )
}