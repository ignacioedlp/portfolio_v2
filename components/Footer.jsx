import React from "react";
function Footer() {
  return (
    <footer className="text-black  body-font bg-seasalt font-montserrat">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="flex title-font font-medium items-center md:justify-start justify-center">
          <span className=" text-xl">Ignacio C.T.</span>
        </p>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 Ignacio —
          <a
            href="https://twitter.com/knyttneve"
            className=" ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            ToxeDev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
