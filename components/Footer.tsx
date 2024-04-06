import Contacts from "./Contacts";

const Footer = () => {
    return ( 
        <footer className="w-full p-5 flex items-center justify-center mt-9 border-t border-slate-500 hover:bg-slate-700/60 transition duration-200">
            <Contacts/>
        </footer>
     );
}
 
export default Footer;