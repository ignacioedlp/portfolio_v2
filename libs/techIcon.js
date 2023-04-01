import { FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { DiPostgresql, DiRubyRough, DiNodejsSmall, DiMysql } from "react-icons/di";
import { SiFlutter, SiSolidity, SiTailwindcss, SiCss3, SiHtml5, SiJquery, SiJavascript, SiMongodb, SiGraphql, SiApollographql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";


export const getIconTech = (tech, size, pointer, color) => {
  switch (tech.title) {
    case "React":
      return <FaReact className={`${size} ${color} ${pointer}`}></FaReact>;
    case "Python":
      return <FaPython className={`${size} ${color} ${pointer}`}></FaPython>;
    case "PostgreSQL":
      return (
        <DiPostgresql className={`${size} ${color} ${pointer}`}></DiPostgresql>
      );
    case "Ruby On Rails":
      return <DiRubyRough className={`${size} ${color} ${pointer}`}></DiRubyRough>;
    case "NodeJS":
      return <DiNodejsSmall className={`${size} ${color} ${pointer}`}></DiNodejsSmall>;
    case "Flutter":
      return <SiFlutter className={`${size} ${color} ${pointer}`}></SiFlutter>;
    case "Solidity":
      return <SiSolidity className={`${size} ${color} ${pointer}`}></SiSolidity>;
    case "TailwindCSS":
      return <SiTailwindcss className={`${size} ${color} ${pointer}`}></SiTailwindcss>;
    case "Bootstrap":
      return <FaBootstrap className={`${size} ${color} ${pointer}`}></FaBootstrap>;
    case "CSS":
      return <SiCss3 className={`${size} ${color} ${pointer}`}></SiCss3>;
    case "HTML":
      return <SiHtml5 className={`${size} ${color} ${pointer}`}></SiHtml5>;
    case "JQuery":
      return <SiJquery className={`${size} ${color} ${pointer}`}></SiJquery>;
    case "Javascript":
      return <SiJavascript className={`${size} ${color} ${pointer}`}></SiJavascript>;
    case "MongoDB":
      return <SiMongodb className={`${size} ${color} ${pointer}`}></SiMongodb>;
    case "NextJs":
      return <TbBrandNextjs className={`${size} ${color} ${pointer}`}></TbBrandNextjs>;
    case "Git":
      return <AiFillGithub className={`${size} ${color} ${pointer}`}></AiFillGithub>;
    case "MySQL":
      return <DiMysql className={`${size} ${color} ${pointer}`}></DiMysql>;
    case "GraphQL":
      return <SiGraphql className={`${size} ${color} ${pointer}`}></SiGraphql>;
    case "Apollo":
      return <SiApollographql className={`${size} ${color} ${pointer}`}></SiApollographql>;
    default:
      return <p>Not found</p>
  }
}