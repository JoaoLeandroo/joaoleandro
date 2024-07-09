import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram   } from "react-icons/fa";

const Contacts = () => {
    return ( 
        <div>
            <div className="flex gap-3 w-full items-center justify-center">
                <Link href={"https://www.instagram.com/joaoleandroo_/?hl=pt"} target="_blank">
                    <FaInstagram size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
                </Link>
                <Link href={"https://wa.me/5581987666475?text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20Jo%C3%A3o,%20precisa%20da%20minha%20ajuda?"} target="_blank">
                    <FaWhatsapp size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
                </Link>
                <Link href={"https://www.linkedin.com/in/joaoleandro10/"} target="_blank">
                    <FaLinkedin size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
                </Link>
                <Link href={"https://github.com/JoaoLeandroo"} target="_blank">
                    <FaGithub size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
                </Link>
            </div>
            <div className="mt-3 w-full flex items-center justify-center">
                <span className="font-medium text-slate-400/60 hover:text-slate-400 transition duration-300">joaoleandro102@gmail.com</span>
            </div>
        </div>
     );
}
 
export default Contacts;