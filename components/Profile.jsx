import { React } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql, DiRubyRough, DiNodejsSmall } from "react-icons/di";
import { SiFlutter } from "react-icons/si";

function Profile({ lenguage, information }) {
  return (
    <section className="text-gray-400 bg-seasalt body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          animate={{ scale: [0.5, 1], x: [100, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center "
        >
          <h1 className="  title-font  sm:text-4xl text-3xl mb-4 font-medium text-white">
            {lenguage == "es"
              ? "Hola soy Ignacio, Desarrollador FullStack Jr."
              : "Hello I'm Ignacio, Junior FullStack Developer"}
          </h1>

          <p className="mb-8 leading-relaxed ">
            {lenguage == "es"
              ? "Con capacidad de pensar nuevas ideas e implementar mejoras. Soy detallista y ordenado con los proyectos que me propongo"
              : "With the ability to think new ideas and implement improvements. I am detail oriented and organized with the projects I propose"}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="  inline-flex text-white bg-red-700 border-0 py-2 px-6  focus:outline-none hover:bg-red-600 rounded text-lg font-medium"
            >
              {lenguage == "es" ? "Contactame" : "Contact me"}
            </a>
            {information && (
              <a
                download={
                  lenguage == "es"
                    ? information.cv_spanish
                    : information.cv_english
                }
                href={
                  lenguage == "es"
                    ? information.cv_spanish
                    : information.cv_english
                }
                className="  ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                {lenguage == "es" ? "Descargar CV" : "Download CV"}
              </a>
            )}
          </div>
        </motion.div>
        <motion.div
          animate={{ scale: [0.5, 1], x: [100, 0] }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <Image
            className="object-cover object-center rounded  "
            alt="hero"
            src="/miFoto.webp"
            height={500}
            width={500}
          />
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-around h-1/6 bg-seasalt">
        <div className="flex gap-2">
          <FaReact className="text-3xl cursor-pointer text-rosewood"></FaReact>
          <p className="text-lg font-bold cursor-pointer text-rosewood font-montserrat">
            ReactJs
          </p>
        </div>
        <div className="flex gap-2">
          <DiPostgresql className="text-3xl cursor-pointer text-rosewood"></DiPostgresql>
          <p className="text-xl font-bold cursor-pointer text-rosewood font-montserrat">
            PostgreSQL
          </p>
        </div>
        <div className="flex gap-2">
          <DiRubyRough className="text-3xl cursor-pointer text-rosewood"></DiRubyRough>
          <p className="text-xl font-bold cursor-pointer text-rosewood font-montserrat">
            Ruby on Rails
          </p>
        </div>
        <div className="flex gap-2">
          <DiNodejsSmall className="text-3xl cursor-pointer text-rosewood"></DiNodejsSmall>
          <p className="text-xl font-bold cursor-pointer text-rosewood font-montserrat">
            NodeJs
          </p>
        </div>
        <div className="flex gap-2">
          <SiFlutter className="text-3xl cursor-pointer text-rosewood"></SiFlutter>
          <p className="text-xl font-bold cursor-pointer text-rosewood font-montserrat">
            Flutter
          </p>
        </div>
        <div className="flex gap-2">
          <FaPython className="text-3xl cursor-pointer text-rosewood"></FaPython>
          <p className="text-xl font-bold cursor-pointer text-rosewood font-montserrat">
            Python
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
