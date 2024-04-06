import Link from "next/link";

interface CardProjectsProps {
    imagem: string;
    titulo: string;
    description: string;
}

const CardProjects: React.FC<CardProjectsProps> = ({ imagem, titulo, description }) => {
    return ( 
        <section className="transition duration-200 rounded-lg bg-emerald-300/10 hover:bg-emerald-300/30 mb-20">
            <Link href={"https://www.youtube.com/"} target="_blank" className=" w-full h-full">
                <div className="p-5 flex">
                    <div className="w-[30%] border-r">{imagem}</div>
                    <div className="w-[70%] ml-2">
                        <h2>{titulo}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </section>
     );
}
 
export default CardProjects;