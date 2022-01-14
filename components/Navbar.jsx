import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="text-black-400 bg-red-500 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Ignacio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-5">
            <Link className=" hover:text-white" href="/">
              Inicio
            </Link>
          </div>
          <div className="mr-5">
            <Link className=" hover:text-white" href="#skills">
              Habilidades
            </Link>
          </div>
          <div className="mr-5">
            <Link className=" hover:text-white" href="#proyects">
              Proyectos
            </Link>
          </div>
          <div className="mr-5">
            <Link className="mr-5 hover:text-white" href="#contact">
              Contactame
            </Link>
          </div>
          <div className="mr-5">
            <Link className="mr-5 hover:text-white" href="/github">
              Github
            </Link>
          </div>
        </nav>
        <a
          download="CafieroCV.pdf"
          href="CV.pdf"
          className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          Ver CV
        </a>
      </div>
    </header>
  );
}

export default Navbar;
