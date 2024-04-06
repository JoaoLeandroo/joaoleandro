import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram   } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md"

const Contacts = () => {
    return ( 
        <div className="flex gap-3 w-full items-center justify-center">
            <Link href={"/"} target="_blank">
                <FaInstagram size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
            </Link>
            <Link href={"/"} target="_blank">
                <FaWhatsapp size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
            </Link>
            <Link href={"/"} target="_blank">
                <FaLinkedin size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
            </Link>
            <Link href={"/"} target="_blank">
                <FaGithub size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
            </Link>
            <Link href={"/"} target="_blank">
                <MdOutlineMail size={35} className="opacity-60 hover:scale-150 hover:opacity-100 hover:text-emerald-300 transition-all duration-200"/>
            </Link>
        </div>
     );
}
 
export default Contacts;