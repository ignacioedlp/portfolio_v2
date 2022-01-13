import React from "react";
import Image from "next/image";

function Proyects() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="proyects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Proyectos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably havet
            heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Shooting Stars
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  The Catalyzer
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  The 400 Blows
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Neptune
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Holden Caulfield
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Alper Kamu
                </h1>
                <button className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Ver Proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
