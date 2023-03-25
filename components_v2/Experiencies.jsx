import React from "react";
import { AiFillStar } from "react-icons/ai";

function Experiencies({ information }) {
  return (
    <div className="flex flex-col justify-center gap-8 md:gap-28 my-9  container m-auto md:h-screen font-montserrat " id="education">
      <div className="flex text-center w-full  justify-center ">
        <h1 className="text-[40px] font-bold title-font mb-4 text-rosewood tracking-widest uppercase">
          Experiencie & Education
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 md:gap-0">
        {information?.education.map((item) => (
          <div className="p-4 w-full md:w-1/2">
            <div className="md:h-[170px] flex sm:flex-row flex-col items-start sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-shrink-0 sm:mb-0 hidden md:flex">
                <AiFillStar className="w-9 h-10 text-rosewood" />
              </div>
              <div className="hidden md:flex md:flex-col sm:pl-8 p-1 text-left">
                <div className="flex rounded-2xl bg-rosewood w-24 text-center justify-center p-1 mb-2">
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
              <div className="md:hidden flex-grow sm:pl-8 p-1 text-left w-full">
                <div className="flex items-center justify-between mb-2 ">
                  <div className="flex rounded-2xl bg-rosewood w-24 text-center justify-center p-1 mb-2">
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
      </div>
    </div>
  );
}

export default Experiencies;
