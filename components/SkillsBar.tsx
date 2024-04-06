import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiFigma } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaGithub, FaReact, FaGitSquare } from "react-icons/fa";
import { TbBrandNextjs, TbBrandNpm } from "react-icons/tb";

interface BoxStyleProps {
    children: React.ReactNode;
}

const BoxStyle:React.FC<BoxStyleProps> = ({children}) => {
    return(
        <div className="opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-125 hover:text-emerald-200">
            {children}
        </div>
    )
}

const SkillsBar = () => {
    return ( 
        <div className="w-full grid gap-5 grid-cols-3 place-items-center content-center p-3">
            <BoxStyle>
                <SiJavascript size={50} title="Javascript"/>
            </BoxStyle>
            <BoxStyle>
                <SiTypescript size={50} title="Typescript"/>
            </BoxStyle>
            <BoxStyle>
                <FaReact size={50} title="ReactJs"/>
            </BoxStyle>
            <BoxStyle>
                <TbBrandNextjs size={50} title="NextJS"/>
            </BoxStyle>
            <BoxStyle>
                <SiHtml5 size={50} title="Html5"/>
            </BoxStyle>
            <BoxStyle>
                <SiCss3 size={50} title="Css3"/>
            </BoxStyle>
            <BoxStyle>
                <SiTailwindcss size={50} title="Tailwind css"/>
            </BoxStyle>
            <BoxStyle>
                <SiPython size={50} title="Python"/>
            </BoxStyle>
            <BoxStyle>
                <SiFigma size={50} title="Figma"/>
            </BoxStyle>
            <BoxStyle>
                <DiNodejs size={50} title="NodeJS"/>
            </BoxStyle>
            <BoxStyle>
                <FaGithub size={50} title="GitHub"/>
            </BoxStyle>
            <BoxStyle>
                <TbBrandNpm size={50} title="Pacote NPM"/>
            </BoxStyle>
            <BoxStyle>
                <FaGitSquare size={50} title="Git"/>
            </BoxStyle>
        </div>
     );
}
 
export default SkillsBar;