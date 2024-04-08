import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
const NotFound = () => {
    return ( 
        <Container>
            <div className="w-full min-h-screen flex flex-col">
                <div className="flex-grow w-full h-full flex flex-col items-center justify-center">
                    <Image
                        src={"/icons/gif.gif"}
                        width={150}
                        height={150}
                        alt="GIF de choro"
                    />
                    <Link href={"/"} className="text-zinc-400 font-bold text-xl text-center hover:text-emerald-400 transition duration-200">Página não encontrada, retorne ao início.</Link>
                </div>
                <Footer/>
            </div>
        </Container>
     );
}
 
export default NotFound;