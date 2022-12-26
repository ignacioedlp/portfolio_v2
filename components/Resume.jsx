import React from "react";

function Resume({ lenguage, information }) {
  // Si cambia la información, se renderiza el componente
  React.useEffect(() => {
    console.log("Renderizando componente Resume");
  }, [information]);

  return (
    information && (
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
                {information.education.map((education, index) => (
                  <div className="p-2" key={index}>
                    <h3 className="text-gray-100 text-xl title-font font-medium mb-3">
                      {education.site}
                    </h3>
                    <p className="inline-flex items-center">
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-100">
                          {education.asignature}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {education.dateRange}
                        </span>
                      </span>
                    </p>
                  </div>
                ))}
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
                      {lenguage === "es" ? "Localizacion:" : "Localization:"}
                    </span>
                    <span className="text-gray-100">
                      {information.location}
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-300 mr-2">
                      {lenguage === "es" ? "Edad:" : "Age:"}
                    </span>
                    <span className="text-gray-100">{information.age}</span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-300 mr-2">Mail:</span>
                    <span className="text-gray-100">{information.email}</span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-300 mr-2">
                      {lenguage === "es" ? "Estado:" : "State:"}
                    </span>
                    <span className="text-gray-100">{information.state}</span>
                  </li>
                  <li className="mb-4">
                    <span className="text-gray-300 mr-2">
                      {lenguage === "es" ? "Telefono:" : "Phone:"}
                    </span>
                    <span className="text-gray-100">{information.phone}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Resume;
