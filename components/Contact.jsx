import React from "react";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text-plain, */*",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response status 200");
      }
    });
  };

  return (
    <section
      className="text-gray-200 body-font relative bg-gray-900"
      id="contact"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
            Contactame
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Enviame un mensaje si necesitas alguna consulta o informacion sobre
            costos. Ademas estoy abierto a propuestas de trabajo.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            className="flex flex-wrap -m-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-200"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-200"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  {...register("message")}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Enviar mensaje
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="leading-normal my-5">
                61 nro 821.
                <br />
                La Plata, Argentina
              </p>
              <span className="inline-flex">
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200"
                    href="https://www.linkedin.com/in/ignacio-cafiero-torrubia-743487216/"
                    passHref
                  >
                    <AiFillLinkedin className="text-3xl"></AiFillLinkedin>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200 "
                    href="https://www.instagram.com/tofiedlp1/"
                    passHref
                  >
                    <AiOutlineInstagram className="text-3xl"></AiOutlineInstagram>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200"
                    href="https://github.com/ignacioedlp"
                    passHref
                  >
                    <AiFillGithub className="text-3xl"></AiFillGithub>
                  </Link>
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
