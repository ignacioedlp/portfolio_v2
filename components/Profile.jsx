import { React } from "react";
import Image from "next/image";

function Profile({ lenguage }) {

  return (
    <section className="text-gray-400 bg-gray-900 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="animate__animated animate__backInLeft  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-medium text-white">
            {lenguage == "es"
              ? "Hola soy Ignacio, Desarrollador FullStack Jr."
              : "Hello I'm Ignacio, Junior FullStack Developer"}
          </h1>

          <p className="mb-8 leading-relaxed">
            {lenguage == "es"
              ? "Con capacidad de pensar nuevas ideas e implementar mejoras. Soy detallista y ordenado con los proyectos queme propongo"
              : "With the ability to think new ideas and implement improvements. I am detail oriented and organized with the projects I propose"}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className=" animate__animated  animate__shakeY inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              {lenguage == "es" ? "Contactame" : "Contact me"}
            </a>
            <a
              download={lenguage == "es" ? "SpanishCv.pdf" : "EnglishCV.pdf"}
              href={lenguage == "es" ? "SpanishCv.pdf" : "EnglishCV.pdf"}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              {lenguage == "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate__animated animate__backInRight">
          <Image
            width="500px"
            height="500px"
            className="object-cover object-center rounded "
            alt="hero"
            src="/miFoto.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
