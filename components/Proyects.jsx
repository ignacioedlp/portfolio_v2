import { React } from "react";
import Image from "next/image";
import Link from "next/link";
// import { proyects } from "../data/proyects";

function Proyects({ lenguage, proyects }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="proyects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            {lenguage === "es" ? "Proyectos" : "Projects"}
          </h1>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {proyects.map((proyect, index) => (
            <div className="lg:w-2/6 sm:w-1/2 py-2 px-2" key={index}>
              <div className="flex relative h-64 ">
                <Image
                  layout="fill"
                  alt={lenguage === "es" ? proyect.titleEs : proyect.titleEn}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={proyect.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    {lenguage === "es" ? proyect.titleEs : proyect.titleEn}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    NextJs, NextAuth, Tailwind & PostgreSQL
                  </h1>
                  <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                    <Link href={proyect.link} passHref>
                      {lenguage === "es" ? "Ver proyecto" : "See project"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyects;
