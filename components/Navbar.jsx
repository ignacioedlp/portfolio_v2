import { React, useContext } from "react";
import Link from "next/link";
import { LenguageContext } from "../context/LenguageContext";

function Navbar() {
  const { lenguage, setLenguage } = useContext(LenguageContext);

  function handlerLenguage() {
    if (lenguage == "es") {
      setLenguage("en");
      return;
    }
    setLenguage("es");
    return;
  }

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
              {lenguage == "es" ? "Inicio" : "Home"}
            </Link>
          </div>
          <div className="mr-5">
            <Link className=" hover:text-white" href="#skills">
              {lenguage == "es" ? "Habilidades" : "Skills"}
            </Link>
          </div>
          <div className="mr-5">
            <Link className=" hover:text-white" href="#proyects">
              {lenguage == "es" ? "Proyectos" : "Proyects"}
            </Link>
          </div>
          <div className="mr-5">
            <Link className="mr-5 hover:text-white" href="#contact">
              {lenguage == "es" ? "Contactame" : "Contact"}
            </Link>
          </div>
          <div className="mr-5">
            <Link className="mr-5 hover:text-white" href="/github">
              Github
            </Link>
          </div>
        </nav>
        <div className="left-0">
          <button onClick={() => handlerLenguage()}>
            {lenguage === "es" ? (
              <img src="https://img.icons8.com/color/30/000000/spain-2.png" />
            ) : (
              <img src="https://img.icons8.com/office/30/000000/great-britain.png" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
