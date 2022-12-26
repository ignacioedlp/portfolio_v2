import Link from "next/link";
import { React } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

function Contact({ lenguage, information }) {
  // const { register, handleSubmit, errors } = useForm();
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);

  // const onSubmit = (data) => {
  //   fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json, text-plain, */*",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       setSuccess(true);
  //       console.log("Enviado");
  //     } else {
  //       setError(true);
  //       console.log("Error");
  //     }
  //   });
  // };

  return (
    <section
      className="text-gray-200 body-font relative bg-gray-900"
      id="contact"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
            {lenguage === "es" ? "Contacto" : "Contact"}
          </h1>
        </div>
        {/* <div className="flex flex-col text-center w-full mb-12">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {lenguage === "es"
              ? "Enviame un mensaje si necesitas alguna consulta o informacion sobre costos. Ademas estoy abierto a propuestas de trabajo."
              : "Send me a message if you need any consultation or information about costs. Also, I am open to proposals of work."}
          </p>
          {success ? (
            <div className="bg-green-900 my-2 lg:w-1/2 md:w-2/3 mx-auto rounded border-0 py-2 px-8 text-center my-auto">
              <strong>
                {lenguage === "es"
                  ? "Mensaje enviado exitosamente"
                  : "Message sent successfully"}
              </strong>
            </div>
          ) : (
            false
          )}
          {error ? (
            <div className="bg-red-900 my-2 lg:w-1/2 md:w-2/3 mx-auto rounded border-0 py-2 px-8 text-center my-auto">
              <strong>
                {lenguage === "es" ? "Mensaje fallido" : "Delivery failed"}
              </strong>
            </div>
          ) : (
            false
          )}
        </div> */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            className="flex flex-wrap -m-2"
            // onSubmit={handleSubmit(onSubmit)}
          >
            {/* <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-200"
                >
                  {lenguage === "es" ? "Nombre" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-600 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:text-black text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  {lenguage === "es" ? "Correo" : "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-600 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:text-black text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  {lenguage === "es" ? "Mensaje" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-600 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:text-black h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  {...register("message")}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-800 rounded text-lg">
                {lenguage === "es" ? "Enviar" : "Send"}
              </button>
            </div> */}
            <div className="p-2 w-full  text-center">
              <p className="leading-normal my-5">
                61 nro 821.
                <br />
                La Plata, Argentina
              </p>
              <span className="inline-flex border-t border-gray-200">
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200"
                    href={information ? information.linkedin : "/"}
                    passHref
                  >
                    <AiFillLinkedin className="text-3xl cursor-pointer"></AiFillLinkedin>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200 "
                    href={information ? information.instagram : "/"}
                    passHref
                  >
                    <AiOutlineInstagram className="text-3xl cursor-pointer"></AiOutlineInstagram>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link
                    className="ml-4 text-gray-200"
                    href={information ? information.github : "/"}
                    passHref
                  >
                    <AiFillGithub className="text-3xl cursor-pointer"></AiFillGithub>
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
