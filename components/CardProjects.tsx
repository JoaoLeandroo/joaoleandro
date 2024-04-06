import Link from "next/link";
import Image from "next/image";

interface CardProjectsProps {
    imagem: string;
    titulo: string;
    description: string;
    url: string;
}

const CardProjects: React.FC<CardProjectsProps> = ({ imagem, titulo, description, url }) => {
    return ( 
        <section className="transition duration-100 rounded-lg bg-emerald-200/10 hover:bg-emerald-300/30">
            <Link href={url} target="_blank" className=" w-full h-full">
                <div className="p-5 flex">
                    <div className="w-[30%]">
                        <Image
                            src={imagem}
                            width={250}
                            height={250}
                            alt={titulo}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-[70%] ml-4 flex flex-col gap-y-2">
                        <h2 className="font-semibold text-xl">{titulo}</h2>
                        <p className="text-slate-400/80">{description}</p>
                    </div>
                </div>
            </Link>
        </section>
     );
}
 
export default CardProjects;