import { React, useContext, useState } from "react";
import Link from "next/link";
import { PortfolioContext } from "../context/PortfolioContext";
import { findFlagUrlByNationality } from "country-flags-svg";
import Image from "next/image";

function Navbar() {
  const { lenguage, setLenguage } = useContext(PortfolioContext);

  function handlerLenguage() {
    if (lenguage == "es") {
      setLenguage("en");
      return;
    }
    setLenguage("es");
    return;
  }

  const [menuActive, setMenuActive] = useState(true);

  const handleMenu = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="text-black-400 bg-red-500 body-font ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              <Link href="#">Ignacio</Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={handleMenu}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {menuActive ? (
            <div className="items-center md:flex" id="menu">
              <div className="flex flex-col md:flex-row md:mx-6">
                <div className="mr-5">
                  <Link className=" hover:text-white" href="/">
                    {lenguage == "es" ? "Inicio" : "Home"}
                  </Link>
                </div>
                <div className="mr-5">
                  <Link className=" hover:text-white" href="#skill">
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
              </div>
              <div className="flex justify-center md:block">
                <button onClick={() => handlerLenguage()}>
                  {lenguage === "es" ? (
                    <Image
                      alt="es"
                      width="40px"
                      height="30px"
                      src={findFlagUrlByNationality("Argentinian")}
                    />
                  ) : (
                    <Image
                      alt="en"
                      width="40px"
                      height="30px"
                      src={findFlagUrlByNationality("American")}
                    />
                  )}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
