import {React, useContext} from "react";
import { LenguageContext } from "../context/LenguageContext";

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
  SiNextdotjs,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

function Technologies() {

  const { lenguage, setLenguage } = useContext(LenguageContext);

  return (
    <section
      className="text-gray-400 bg-gray-900 body-font"
      id="skills container px-5 py-24 mx-auto"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            {lenguage === "es" ? "Habilidades" : "Skills"}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-around">
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full mb-3">
            <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              FRONTEND
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <div className="flex-inline flex ">
                <FaReact className="text-3xl" />
                <a className="text-2xl ml-1">React</a>
              </div>
              <div className="flex-inline flex">
                <FaHtml5 className="text-3xl" />
                <a className="text-2xl ml-1">HTML</a>
              </div>
              <div className="flex-inline flex">
                <FaCss3 className="text-3xl" />
                <a className="text-2xl ml-1">CSS3</a>
              </div>
              <div className="flex-inline flex">
                <SiJavascript className="text-3xl" />
                <a className="text-2xl ml-1"> Javascript</a>
              </div>
              <div className="flex-inline flex">
                <DiJqueryLogo className="text-3xl" />
                <a className="text-2xl ml-1"> JQuery</a>
              </div>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full mb-3">
            <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              BACKEND
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <div className="flex-inline flex">
                <SiNodedotjs className="text-3xl" />
                <a className="text-2xl ml-1">NodeJS</a>
              </div>
              <div className="flex-inline flex">
                <SiPhp className="text-3xl" />
                <a className="text-2xl ml-1">PHP</a>
              </div>
              <div className="flex-inline flex">
                <FaLaravel className="text-3xl" />
                <a className="text-2xl ml-1">Laravel</a>
              </div>
              <div className="flex-inline flex">
                <SiExpress className="text-3xl" />
                <a className="text-2xl ml-1">Express</a>
              </div>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full mb-3">
            <h2 className=" underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              DATABASES
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                <div className="flex-inline flex">
                  <DiMongodb className="text-3xl" />
                  <a className="text-2xl ml-1">MongoDB</a>
                </div>
                <div className="flex-inline flex">
                  <DiMysql className="text-3xl" />
                  <a className="text-2xl ml-1">MySQL</a>
                </div>
                <div className="flex-inline flex">
                  <SiPostgresql className="text-3xl" />
                  <a className="text-2xl ml-1">PostgreSQL</a>
                </div>
              </nav>
            </nav>
          </div>
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full mb-3 ">
            <h2 className=" underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              EXTRAS
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                <div className="flex-inline flex">
                  <DiGit className="text-3xl" />
                  <a className="text-2xl ml-1">GIT</a>
                </div>
                <div className="flex-inline flex">
                  <FaBootstrap className="text-3xl" />
                  <a className="text-2xl ml-1">Bootstrap</a>
                </div>
                <div className="flex-inline flex">
                  <SiNextdotjs className="text-3xl" />
                  <a className="text-2xl ml-1">NextJS</a>
                </div>
              </nav>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
