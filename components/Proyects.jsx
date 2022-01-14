import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/proyects/Blog-nextjs.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  Blog con nextjs
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  NextJs, NextAuth, Tailwind and PostgreSQL
                </h1>
                <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link
                    href="ignacio-cafiero-blogr-nextjs-prisma.vercel.app"
                    passHref
                  >
                    Ver Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/proyects/crypto-price.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  Crypto prices
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Javascript, API crypto, Fetch, NextJs
                </h1>
                <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link href="crypto-prices-react.vercel.app" passHref>
                    Ver Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/proyects/ExpensesApp.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  Sistema de gastos, con CRUD
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  PHP, Bootstrap, Roles, MySQL, Google Charts, Javascript, MVC
                </h1>
                <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link
                    href="https://github.com/ignacioedlp/SistemaDeGastos"
                    passHref
                  >
                    Ver Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/proyects/libreria-laravel.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  CRUD Libreria
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Laravel, Bootstrap, Laravel UI, MySQL
                </h1>
                <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link
                    href="https://github.com/ignacioedlp/libreria-laravel"
                    passHref
                  >
                    Ver Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/proyects/sistema-blogs-laravel.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                  Blog
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Laravel, Laravel UI, roles, MySQL, Bootstrap,
                  Laravel-permission, LaravelCollective
                </h1>
                <div className="flex mx-auto m-6 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link
                    href="https://github.com/ignacioedlp/blog-prisma-next/tree/main"
                    passHref
                  >
                    Ver Proyecto
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 ">
            <div className="flex relative h-64 w-90">
              {/* <Image
                layout="fill"
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/Images/proyectDefault.jpg"
              /> */}
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                <h2 className="tracking-widest text-title title-font font-medium text-red-400 mb-1">
                  Proximamente
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  ...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
