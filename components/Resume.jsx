import React from "react";

function Resume() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl title-font mb-4 text-center text-gray-900">
          Sobre mi
        </h2>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-4 ">
                Educacion
              </h2>
              <div className="p-2">
                <h3 className="text-gray-900 text-xl title-font font-medium mb-3">
                  Colegio San Jose de La Plata
                </h3>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Analista Programador
                    </span>
                    <span className="text-gray-500 text-sm">2005 - 2020 </span>
                  </span>
                </a>
              </div>
              <div className="p-2">
                <h3 className="text-gray-900 text-xl title-font font-medium mb-3">
                  Facultad de Informatica, UNLP
                </h3>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Analista Programador <br />
                      Licenciado en Informatica
                    </span>
                    <span className="text-gray-500 text-sm">2020 - ahora </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-4 ">
                Informacion
              </h2>

              <li className="mb-4">
                <span className="text-gray-600 mr-2">Localizacion:</span>
                <span className="text-gray-900">La Plata, Argentina</span>
              </li>
              <li className="mb-4">
                <span className="text-gray-600 mr-2">Edad:</span>
                <span className="text-gray-900">20</span>
              </li>
              <li className="mb-4">
                <span className="text-gray-600 mr-2">Correo:</span>
                <span className="text-gray-900">
                  ignaciocafiero12@gmail.com
                </span>
              </li>
              <li className="mb-4">
                <span className="text-gray-600 mr-2">Estado:</span>
                <span className="text-gray-900">Estudiante</span>
              </li>
              <li className="mb-4">
                <span className="text-gray-600 mr-2">Telefono</span>
                <span className="text-gray-900">+54 221 524 5019</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
