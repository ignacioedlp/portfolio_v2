import React from "react";
import { AiFillStar } from "react-icons/ai";

function Experiencies({ information }) {
  return (
    <div className="container flex flex-col justify-center gap-8 m-auto md:gap-28 my-9 md:h-screen font-montserrat " id="education">
      <div className="flex justify-center w-full text-center ">
        <h1 className="text-[40px] font-bold title-font mb-4 text-rosewood tracking-widest">
          Experiencie
        </h1>
      </div>
      <section>
        <div className="container px-4 py-12 mx-auto max-w-8xl">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-rosewood">
                <h3 className="text-3xl font-semibold">Alliants & Sinaptia</h3>
                <span className="text-sm font-bold uppercase tracki dark:text-gray-400">FullStack Developer</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rosewood">
                  <h3 className="text-xl font-semibold tracki">Lofty</h3>
                  <time className="text-xs uppercase tracki dark:text-gray-400">Abr 2022</time>
                  <p className="mt-3">I started from the beginning a project of an application called Lofty, developed in Flutter, for a hotel company in the style of Airbnb. We used a backend developed in Node.js and used Strapi CMS for the multimedia content. Then I created the prototype of the website in Next.js.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rosewood">
                  <h3 className="text-xl font-semibold tracki">5-Out</h3>
                  <time className="text-xs uppercase tracki dark:text-gray-400">Jul 2022</time>
                  <p className="mt-3">
                    I work together with Alliants in the North American project called 5-Out. My main responsibility is the integration of APIs for continuous data collection using the ETL method, utilizing NodeJS and AWS technologies.
                    In addition, I am part of the development team for the web application, built with ReactJs, as well as the mobile app developed with Flutter, both designed to accommodate new UI/UX improvements.
                    Furthermore, I contribute to the enhancement of the backend in Ruby on Rails by implementing changes that introduce new functionalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-wrap gap-5 md:gap-0">
        {information?.education.map((item) => (
          <div className="w-full p-4 md:w-1/2">
            <div className="md:h-[170px] flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-shrink-0 hidden sm:mb-0 md:flex">
                <AiFillStar className="h-10 w-9 text-rosewood" />
              </div>
              <div className="hidden p-1 text-left md:flex md:flex-col sm:pl-8">
                <div className="flex justify-center w-24 p-1 mb-2 text-center rounded-2xl bg-rosewood">
                  <p className="font-bold text-seasalt text-[15px]">
                    {item?.start + " - " + item?.end}
                  </p>
                </div>
                <h2 className=" font-bold text-[15px] text-black mb-2">
                  {item?.degree}
                </h2>
                <p className="mb-4 font-bold text-[15px] text-zinc-700">
                  {item?.site}
                </p>
                <p className="mb-4 font-bold text-[13px] text-zinc-700">
                  {item?.description}
                </p>
              </div>
              <div className="flex-grow w-full p-1 text-left md:hidden sm:pl-8">
                <div className="flex items-center justify-between mb-2 ">
                  <div className="flex justify-center w-24 p-1 mb-2 text-center rounded-2xl bg-rosewood">
                    <p className="font-bold text-seasalt text-[15px]">{item?.start + " - " + item?.end}</p>
                  </div>
                  <h2 className=" font-bold text-[15px] text-black mb-2">
                    {item?.degree}
                  </h2>
                </div>
                <p className="mb-3 font-bold text-[13px] text-zinc-700">
                  {item?.site}
                </p>
                <p className="mb-3 font-bold text-[13px] text-zinc-700">
                  {item?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Experiencies;
