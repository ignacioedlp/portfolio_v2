import { React, useContext, useEffect } from "react";

import { LenguageContext } from "../context/LenguageContext";

function Resume() {
  const { lenguage, setLenguage } = useContext(LenguageContext);

  return (
    <section className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl title-font mb-4 text-center text-gray-900">
          {lenguage === "es" ? "Sobre mi" : "About me"}
        </h2>
        <div className="flex flex-wrap -m-4 resumen">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-700 p-8 rounded">
              <h2 className="text-gray-100 text-3xl title-font font-medium mb-4 ">
                {lenguage === "es" ? "Educacion" : "Education"}
              </h2>
              <div className="p-2">
                <h3 className="text-gray-100 text-xl title-font font-medium mb-3">
                  {lenguage === "es"
                    ? "Colegio San Jose de La Plata"
                    : "San Jose de La Plata School"}
                </h3>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-100">
                      {lenguage === "es" ? "Bachillerato" : "High School"}
                    </span>
                    <span className="text-gray-300 text-sm">2005 - 2020 </span>
                  </span>
                </a>
              </div>
              <div className="p-2">
                <h3 className="text-gray-100 text-xl title-font font-medium mb-3">
                  {lenguage === "es"
                    ? "Universidad Nacional de La Plata"
                    : "National University of La Plata"}
                </h3>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-100">
                      {lenguage === "es"
                        ? "Analista Programador - Licenciado en Informatica"
                        : "Programmer Analyst  Bachelors Degree in Computer Science"}
                    </span>
                    <span className="text-gray-300 text-sm">
                      2020 - {lenguage === "es" ? "Ahora" : "Now"}{" "}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full  p-8 rounded bg-gray-700">
              <h2 className="text-gray-100 text-3xl title-font font-medium mb-4 ">
                {lenguage === "es" ? "Informacion" : "Information"}
              </h2>
              <ul>
                <li className="mb-4">
                  <span className="text-gray-300 mr-2">
                    {lenguage === "es" ? "Localizacion" : "Localization"}
                  </span>
                  <span className="text-gray-100">La Plata, Argentina</span>
                </li>
                <li className="mb-4">
                  <span className="text-gray-300 mr-2">
                    {lenguage === "es" ? "Edad" : "Age"}
                  </span>
                  <span className="text-gray-100">20</span>
                </li>
                <li className="mb-4">
                  <span className="text-gray-300 mr-2">Mail:</span>
                  <span className="text-gray-100">
                    ignaciocafiero12@gmail.com
                  </span>
                </li>
                <li className="mb-4">
                  <span className="text-gray-300 mr-2">
                    {lenguage === "es" ? "Estado" : "State"}
                  </span>
                  <span className="text-gray-100">
                    {lenguage === "es" ? "Estudiante" : "Student"}
                  </span>
                </li>
                <li className="mb-4">
                  <span className="text-gray-300 mr-2">
                    {lenguage === "es" ? "Telefono" : "Phone"}
                  </span>
                  <span className="text-gray-100">+54 221 524 5019</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
