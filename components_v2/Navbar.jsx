import { React, useContext, useState } from "react";
import Link from "next/link";
import { PortfolioContext } from "../context/PortfolioContext";
import { findFlagUrlByNationality } from "country-flags-svg";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";

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
    <header className="w-full text-gray-600 body-font bg-seasalt my-9 md:my-0 h-[106px] flex justify-center">
      <div className="container flex flex-col flex-wrap items-center justify-between mx-auto md:flex-row">
        <a className="flex items-center gap-2 font-medium text-gray-900 title-font md:mb-0">
          <Image
            className="object-cover object-center rounded "
            alt="hero"
            src="/Nuevos/logo-toxe.png"
            height={44}
            width={44}
          />
          <span className="ml-2 text-xl font-bold text-black font-montserrat ">
            ToxeDev
          </span>
        </a>
        <nav className="flex flex-col flex-wrap items-center justify-center gap-8 text-base md:flex-row md:ml-auto md:mr-auto ">
          <a className="mr-5 font-semibold text-black font-montserrat">Home</a>
          <a className="mr-5 font-semibold text-black font-montserrat">
            About me
          </a>
          <a className="mr-5 font-semibold text-black font-montserrat">
            Education
          </a>
          <a className="mr-5 font-semibold text-black font-montserrat">
            Projects
          </a>
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base border-0 rounded-[30px] bg-licorice md:mt-0">
          <p className="text-seasalt font-montserrat">Download CV</p>
          <BsDownload className="ml-2 text-seasalt" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
