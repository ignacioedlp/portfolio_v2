import React from "react";
import { AiFillStar } from "react-icons/ai";

function Education({ information }) {
  return (
    <div className="container flex flex-col justify-center gap-8 m-auto md:gap-10 my-9 md:h-screen font-montserrat " id="education">
      <div className="flex justify-center w-full text-center ">
        <h1 className="text-[40px] font-bold title-font mb-4 text-rosewood tracking-widest">
          Education
        </h1>
      </div>
      <section>
        <div className="container px-4 pt-12 mx-auto max-w-8xl">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-rosewood">
                <h3 className="text-2xl font-semibold">San Jose School of La Plata</h3>
                <span className="text-sm font-bold uppercase tracki dark:text-gray-400">High school diploma</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rosewood">
                  <h3 className="text-xl font-semibold tracki">Social sciences</h3>
                  <time className="text-xs uppercase tracki dark:text-gray-400">Abr 2022</time>
                  <p className="mt-3">Grade/GPA: 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-4 mx-4auto py- max-w-8xl">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-rosewood">
                <h3 className="text-2xl font-semibold">National University of La Plata</h3>
                <span className="text-sm font-bold uppercase tracki dark:text-gray-400">Bachelor's degree</span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rosewood">
                  <h3 className="text-xl font-semibold tracki">Programmer Analyst</h3>
                  <time className="text-xs uppercase tracki dark:text-gray-400">2020 - 2022</time>
                  <ul className="mt-4 list-disc list-inside">
                    <li>
                      Research, analyze, develop and implement solutions.
                    </li>
                    <li>
                      Perform software and application maintenance and upgrades.
                    </li>
                    <li>
                      Analysis and implementation of improvements.
                    </li>
                    <li>
                      Provide assistance to users who use the developed programs and applications.
                    </li>
                    <li>
                      Grade/GPA: 7.38
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-rosewood">
                  <h3 className="text-xl font-semibold tracki">Science in Systems</h3>
                  <time className="text-xs uppercase tracki dark:text-gray-400">2020 - Present</time>
                  <p className="mt-3">
                    Designs, plans, organizes, coordinates, coordinates, manages, directs and controls the various aspects related to IT resources in accordance with the organizational strategy. Centralizes and configures information systems and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
