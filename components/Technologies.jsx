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
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiSolidity,
} from "react-icons/si";

function Technologies({ lenguage }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="skill">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
            {lenguage === "es" ? "Habilidades" : "Skills"}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-around">
          <div className="p-2 lg:w-1/5  md:w-1/5 sm:w-1/2 w-full mb-2 ">
            <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              FRONTEND
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <div className="flex-inline flex ">
                <FaReact className="text-3xl" />
                <p className="text-lg ml-1">React</p>
              </div>
              <div className="flex-inline flex">
                <FaHtml5 className="text-3xl" />
                <p className="text-lg ml-1">HTML</p>
              </div>
              <div className="flex-inline flex">
                <FaCss3 className="text-3xl" />
                <p className="text-lg ml-1">CSS3</p>
              </div>
              <div className="flex-inline flex">
                <SiJavascript className="text-3xl" />
                <p className="text-lg ml-1"> Javascript</p>
              </div>
              <div className="flex-inline flex">
                <DiJqueryLogo className="text-3xl" />
                <p className="text-lg ml-1"> JQuery</p>
              </div>
            </nav>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/5 sm:w-1/2 w-full mb-2">
            <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              BACKEND
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <div className="flex-inline flex">
                <SiNodedotjs className="text-3xl" />
                <p className="text-lg ml-1">NodeJS</p>
              </div>
              <div className="flex-inline flex">
                <SiPhp className="text-3xl" />
                <p className="text-lg ml-1">PHP</p>
              </div>
              <div className="flex-inline flex">
                <FaLaravel className="text-3xl" />
                <p className="text-lg ml-1">Laravel</p>
              </div>
              <div className="flex-inline flex">
                <SiExpress className="text-3xl" />
                <p className="text-lg ml-1">Express</p>
              </div>
            </nav>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/5 sm:w-1/2 w-full mb-2">
            <h2 className=" underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              DATABASES
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                <div className="flex-inline flex">
                  <DiMongodb className="text-3xl" />
                  <p className="text-lg ml-1">MongoDB</p>
                </div>
                <div className="flex-inline flex">
                  <DiMysql className="text-3xl" />
                  <p className="text-lg ml-1">MySQL</p>
                </div>
                <div className="flex-inline flex">
                  <SiPostgresql className="text-3xl" />
                  <p className="text-lg ml-1">PostgreSQL</p>
                </div>
              </nav>
            </nav>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/5 sm:w-1/2 w-full mb-2 ">
            <h2 className=" underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              EXTRAS
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                <div className="flex-inline flex">
                  <DiGit className="text-3xl" />
                  <p className="text-lg ml-1">GIT</p>
                </div>
                <div className="flex-inline flex">
                  <FaBootstrap className="text-3xl" />
                  <p className="text-lg ml-1">Bootstrap</p>
                </div>
                <div className="flex-inline flex">
                  <SiNextdotjs className="text-3xl" />
                  <p className="text-lg ml-1">NextJS</p>
                </div>
              </nav>
            </nav>
          </div>
          <div className="p-2 lg:w-1/5 md:w-1/5 sm:w-1/2  mb-2">
            <h2 className="underline font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">
              BLOCKCHAIN
            </h2>
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
              <div className="flex-inline flex ">
                <SiSolidity className="text-3xl" />
                <p className="text-lg ml-1">Solidity</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
