import React , { useRef , useState} from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import svgFacebook from "../assets/svg/icons8-facebook-nuevo.svg"
import svgInstagram from "../assets/svg/icons8-instagram.svg"
import svgLinkedin from "../assets/svg/icons8-linkedin.svg"
import svgWsp from "../assets/svg/icons8-whatsapp.svg"
import emailjs from '@emailjs/browser';




export const Contacto = () => {
    const form = useRef();
    
    const [formu, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const onChange = (e) => {
        setForm({...formu, [e.target.name]: e.target.value})
    }
    


    

  const sendEmail = (e) => {
    
    e.preventDefault();
    console.log(form)
    const serviceID = "service_xsu6yum"
    const templateID = "template_7bbn4nu"
    const apiKey = "yBLYWZSsGn-5VB952"
    emailjs.sendForm(serviceID, templateID, form.current, apiKey)
      .then((result) => {

        console.log(result.text);
        result.text === "OK" && alert("Enviado, Aguarde su respuesta.")
        result.text === "OK" && setForm({name: "", email: "", message: ""})

        
      }, (error) => {
        console.log(error.text);
      });
  };
    return (
        <div className='md:flex md:flex-cols-2 mb-20 md:mb-0'>
            <div className='bg-gradient-to-b from-[#000000] from-%40 to-[#B0AFF9] to-%100 md:w-1/2 sm:w-full h-[91vh]'>
                <h2 className='text-center pt-12 sm:text-2xl md:mt-10 md:text-3xl font-Lato font-semibold mx-16 text-white pb-6'>Comunicate con nosotros y pedi tu presupuesto sin cargo!</h2>
                <div className='md:flex  justify-center gap-16 pt-10'>
                    <div>

                        <MdOutlineMailOutline className='text-5xl text-azul2 justify-center mx-auto' />
                        <span className='pt-2 text-xl sm:mx-24 sm:mb-6 md:mb-0 md:mx-0 text-white'>info@gastoncode.com</span>
                    </div>
                    <div>

                        <IoMdContact className='text-5xl text-azul2 mx-auto sm:mt-6 md:mt-0' />
                        <span className='pt-2 text-xl sm:mx-24 sm:mb-6 md:mb-0 md:mx-0 text-white'>+54 351 777-7777</span>
                    </div>
                    </div>
                    <div className='space-x-6 flex justify-center mt-10'>
                        
                        <a target='_blank' rel='noreferrer noopener' href="https://www.instagram.com/gastonhernand3z/" className=''>
                            <img src={svgInstagram} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#DD2A7B] w-10" />
                        </a>
                        <a target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/gaston-hernandez-9b946723a/" className=''>
                            <img src={svgLinkedin} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#3b5998] w-10" />
                        </a>
                        <a target='_blank' rel='noreferrer noopener' href="https://w.app/dWKsIL" className=''>
                            <img src={svgWsp} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 hover:bg-[#25D366] w-10" />
                        </a>
                    </div>
                    <p className='text-center md:pt-6 text-xl mx-20  mt-10 text-black font-semibold font-Lato'>Desde Cordoba, Argentina para todo el mundo.</p>
            </div>
            <div className='md:w-1/2 h-[91vh] '>
                <p className='text-center pt-6 text-xl sm:mx-6 md:mx-20 text-azul2 font-Lato'>Completa nuestro formulario y en la brevedad estaremos comunicandonos.</p>
                <form action="" ref={form} onSubmit={sendEmail} className='sm:mx-6 md:mx-20 pt-6 mt-10 pb-10 mb-6 lg:h-2/3 lg:space-y-6 px-6 border-2 justify-center'>

                    <div className='grid grid-cols-1 gap-y-2 gap-x-4 font-Space'>
                        <label name="name">Name:</label>
                        <input
                            className='h- 14 px-2 border-2'
                            type="text"
                            name='name'
                            onChange={onChange}
                            

                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-2 gap-x-4 mt-6'>
                        <label name="email">Email:</label>
                        <input

                            type="email"
                            className='h-14 px-2 border-2 rounded'
                            name='email'
                            
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-2 gap-x-4 mt-6'>
                        <label name="message">Message:</label>
                        <textarea
                            type="text"
                            className='h-32 px-2 border-2 rounded'
                            name='message'
                            

                        />
                    </div>
                    <button  type="submit" className='bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold py-2 
             rounded w-1/6 sm:w-1/4 w-full hover:cursor-pointer hover:opacity-90 hover:transition-120 inline-block'>
                        Enviar
                    </button>
                </form>
            </div>

        </div>
    )
}
