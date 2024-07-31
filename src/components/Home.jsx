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
            <h1 className="text-4xl text-white text-center font-Anton ">Gaston Dev</h1>
            <span className="text-white text-center items-center justify-center font-Lato font-semibold text-xl pt-5">
                Somos una pequeña empresa de desarrollo Web preparada para llevar tu negocio a lo mas alto.
            </span>

            <Presentacion />
        </div>
    )
}