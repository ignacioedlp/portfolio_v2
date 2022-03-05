import React from "react";
function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className=" text-xl">Ignacio C.T.</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 Ignacio —
          <a
            href="https://twitter.com/knyttneve"
            className="text-white ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @tofiedlp
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
