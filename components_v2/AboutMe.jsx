import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { info } from "autoprefixer";

function AboutMe({ information }) {
  return (
    <div className="flex md:flex-row items-center max-w-7xl h-screen container mx-auto  font-montserrat " id="about-me">
      <motion.div className="lg:max-w-lg md:w-1/3 mb-10 md:mb-0 hidden md:flex" initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          width={550}
          height={550}
          src="/Nuevos/me.png"
        />
      </motion.div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-5  container m-auto">
        <h5 className="title-font text-[22px] mb-4  text-black  font-bold px-5 md:px-0">
          My name is {information?.name + " " + information?.lastname}.
        </h5>
        <h4 className="text-[24px] md:text-[30px]  font-bold text-black px-5 md:px-0">
          I'm {information?.degrees}
        </h4>
        <p className="mb-8 text-[15px] md:text-[19px] text-black px-5 md:px-0 ">
          {information?.description}
        </p>
        <div className="flex flex-col justify-center w-full md:w-2/3 gap-4  px-5 md:px-0">
          <div className="flex justify-between">
            <p className="text-rosewood font-bold text-[16px] md:text-[19px]">Full Name</p>
            <p className="text-black text-[16px] md:text-[19px]">{information?.name + "" + information?.lastname}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-rosewood font-bold text-[16px] md:text-[19px]">Age</p>
            <p className="text-black text-[16px] md:text-[19px]">{information?.age} years old</p>
          </div>
          <div className="flex justify-between">
            <p className="text-rosewood font-bold text-[16px] md:text-[19px]">Nationality</p>
            <p className="text-black text-[16px] md:text-[19px]">Argentina</p>
          </div>
          <div className="flex justify-between">
            <p className="text-rosewood font-bold text-[16px] md:text-[19px]">Email</p>
            <p className="text-black text-[16px] md:text-[19px]">
              {information?.email}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-rosewood font-bold text-[16px] md:text-[19px]">Lenguages</p>
            <p className="text-black text-[16px] md:text-[19px]">English, Spanish</p>
          </div>
        </div>
        <div className=" w-[290px] h-[50px] md:w-[376px] md:h-[64px]  rounded-3xl border-t-2 border-b-2 border-r-2 border-licorice flex justify-between items-center">
          <div className="w-[130px] md:w-[178px] h-[50px] md:h-[64px] border rounded-3xl bg-licorice flex flex-col justify-center border-licorice">
            <p className="text-[14px] md:text-[18px] text-white font-bold text-center">
              Contact me
            </p>
          </div>
          <p className="mr-6 text-[14px] md:text-[18px] text-licorice text-center">
            {information?.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
