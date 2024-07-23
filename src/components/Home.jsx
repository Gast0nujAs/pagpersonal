import background from "../img/fondoback.png"
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
            <h1 className="text-4xl text-white text-center ">Desarrollo Hernandez</h1>
            <span className="text-white text-center items-center justify-center text-lg pt-5">Somos una empresa de desarrollo web para poner tu negocio en lo mas alto!.</span>

            <Presentacion />
        </div>
    )
}