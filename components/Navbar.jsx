import { React, useContext, useState } from "react";
import Link from "next/link";
import { PortfolioContext } from "../context/PortfolioContext";
import { findFlagUrlByNationality } from "country-flags-svg";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";

function Navbar({ information, testimonials }) {
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
    <nav className="mx-auto text-black bg-seasalt font-montserrat max-w-7xl">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-2 font-medium title-font md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/Nuevos/logo-toxe.png"
              height={44}
              width={44}
            />
            <span className="ml-2 text-xl font-bold">
              ToxeDev
            </span>
          </a>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-black"
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
          <div
            className="items-center md:flex"
            id="menu"
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex flex-col gap-2 py-2 font-semibold cursor-pointer md:flex-row md:mx-6 md:py-0">
              <div className="mr-10 hover:border-b-2 border-rosewood">
                <a href="#home">
                  Home
                </a>
              </div>
              <div className="mr-10 hover:border-b-2 border-rosewood">
                <a href="#about-me">
                  About me
                </a>
              </div>
              <div className="mr-10 hover:border-b-2 border-rosewood">
                <a href="#education">
                  Education
                </a>
              </div>
              <div className="mr-10 hover:border-b-2 border-rosewood">
                <a href="#projects">
                  Projects
                </a>
              </div>
              {testimonials?.length != 0 ? <div className="mr-10 hover:border-b-2 border-rosewood">
                <a href="#testimonials">
                  Testimonials
                </a>
              </div> : null}
            </div>
            <div className="flex items-center justify-between md:block">
              <button className="items-center px-3 py-1 text-base border-0 rounded-[30px] bg-licorice md:mt-0 lg:hidden inline-flex "
              >
                <a className="text-seasalt font-montserrat" download={
                  information?.cv_english
                }
                  href={
                    information?.cv_english
                  }>Download CV</a>
                <BsDownload className="ml-2 text-seasalt" />
              </button>
              <button
                onClick={() => handlerLenguage()}
                className="w-[35px] h-[35px] lg:hidden inline-flex"
              >
                {lenguage === "es" ? (
                  <span class="fi fi-ar fis text-[35px] rounded-full"></span>
                ) : (
                  <span class="fi fi-gb fis text-[35px] rounded-full"></span>
                )}
              </button>
            </div>
          </div>
        ) : null}
        <div className="items-center hidden gap-2 md:flex ">
          <button className=" animate-border inline-block rounded-[30px] bg-gradient-to-r from-seasalt via-rosewood to-black_bean bg-[length:400%_400%] p-1" >
            <div className=" text-seasalt items-center px-3 py-1 mt-4 text-base  rounded-[30px] bg-licorice md:mt-0 hidden lg:inline-flex font-montserrat">
              <a download={
                information?.cv_english
              }
                href={
                  information?.cv_english
                }>Download CV</a>
              <BsDownload className="ml-2" />
            </div>
          </button>
          <button
            onClick={() => handlerLenguage()}
            className="w-[35px] h-[35px]"
          >
            {lenguage === "es" ? (
              <span class="fi fi-ar fis text-[35px] rounded-full"></span>
            ) : (
              <span class="fi fi-gb fis text-[35px] rounded-full"></span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
