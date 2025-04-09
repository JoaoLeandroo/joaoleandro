import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiFigma, SiMysql } from "react-icons/si";
import { DiNodejs, DiScrum } from "react-icons/di";
import { FaGithub, FaReact, FaGitSquare, FaDocker } from "react-icons/fa";
import { TbBrandNextjs, TbBrandNpm } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiLua } from "react-icons/si";

interface BoxStyleProps {
    children: React.ReactNode;
}

const BoxStyle:React.FC<BoxStyleProps> = ({children}) => {
    return(
        <div className="opacity-75 hover:opacity-100 flex flex-col items-center transition-all duration-300 hover:scale-125 hover:text-emerald-200">
            {children}
        </div>
    )
}

const SkillsBar = () => {
    return ( 
        <div className="w-full grid gap-5 grid-cols-3 place-items-center content-center px-3 py-5">
            <BoxStyle>
                <SiJavascript size={50} title="Javascript"/>
                <p>Javascript</p>
            </BoxStyle>
            <BoxStyle>
                <SiTypescript size={50} title="Typescript"/>
                <p>Typescript</p>
            </BoxStyle>
            <BoxStyle>
                <FaReact size={50} title="ReactJs"/>
                <p>ReactJs</p>
            </BoxStyle>
            <BoxStyle>
                <TbBrandNextjs size={50} title="NextJS"/>
                <p>NextJs</p>
            </BoxStyle>
            <BoxStyle>
                <SiHtml5 size={50} title="Html5"/>
                <p>Html5</p>
            </BoxStyle>
            <BoxStyle>
                <SiCss3 size={50} title="Css3"/>
                <p>Css3</p>
            </BoxStyle>
            <BoxStyle>
                <SiTailwindcss size={50} title="Tailwind css"/>
                <p>Tailwind</p>
            </BoxStyle>
            <BoxStyle>
                <SiPython size={50} title="Python"/>
                <p>Python</p>
            </BoxStyle>
            <BoxStyle>
                <SiFigma size={50} title="Figma"/>
                <p>Figma</p>
            </BoxStyle>
            <BoxStyle>
                <DiNodejs size={50} title="NodeJS"/>
                <p>NodeJs</p>
            </BoxStyle>
            <BoxStyle>
                <FaGithub size={50} title="GitHub"/>
                <p>Github</p>
            </BoxStyle>
            <BoxStyle>
                <TbBrandNpm size={50} title="Pacote NPM"/>
                <p>Package NPM</p>
            </BoxStyle>
            <BoxStyle>
                <FaGitSquare size={50} title="Git"/>
                <p>Git</p>
            </BoxStyle>
            <BoxStyle>
                <SiMysql size={50} title="My SQL"/>
                <p>SQL</p>
            </BoxStyle>
            <BoxStyle>
                <BiLogoPostgresql size={50} title="Postgres SQL"/>
                <p>Postgres SQL</p>
            </BoxStyle>
            <BoxStyle>
                <FaDocker size={50} title="Postgres SQL"/>
                <p>Docker</p>
            </BoxStyle>
            <BoxStyle>
                <SiLua size={50} title="Postgres SQL"/>
                <p>Lua</p>
            </BoxStyle>
            <BoxStyle>
                <DiScrum size={50} title="Postgres SQL"/>
                <p>Scrum</p>
            </BoxStyle>
        </div>
     );
}
 
export default SkillsBar;