import { React } from "react";

import {
  FaBootstrap,
  FaReact,
  FaHtml5,
  FaCss3,
  FaLaravel,
} from "react-icons/fa";

import { DiJqueryLogo, DiMysql, DiGit, DiMongodb } from "react-icons/di";

import {
  SiNodedotjs,
  SiPostgresql,
  SiPhp,
  SiPython,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiRubyonrails,
} from "react-icons/si";

import Image from "next/image";

function Technologies({ lenguage, skills }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="skill">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            {lenguage === "es" ? "Habilidades" : "Skills"}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-around ali">
          {skills &&
            // Recorro el array de categorias de skills y por cada categoria creo un div con las skills de esa categoria
            skills.map((category, index) => (
              <div
                className="p-2 lg:w-1/5  md:w-1/5 sm:w-1/2 w-full mb-2 text-center flex-col h-max"
                key={index}
              >
                <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center ">
                  {category.category.toUpperCase()}
                </h2>
                <nav className="flex flex-col text-center items-center -mb-1 space-y-2 ">
                  {category.objects.map((skill, index) => (
                    <div
                      className="flex-inline flex text-center justify-center items-center"
                      key={index}
                    >
                      <Image
                        src={skill.image.url}
                        alt={skill.name}
                        className="w-6 h-6"
                        width={24}
                        height={24}
                      />
                      <p className="text-lg ml-1 text">{skill.name}</p>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
