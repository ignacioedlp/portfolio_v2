import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql, DiRubyRough, DiNodejsSmall } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

function Hero({ information }) {
  return (
    <>
      <section className="flex justify-center h-3/4 justify-items-center my-9 md:my-0 flex-nowrap max-w-7xl font-montserrat ">
        <div className="container hidden md:flex flex-col items-center justify-center gap-8 w-min text-black">
          <Link className="ml-4" href={information?.linkedin || "/"} passHref>
            <AiFillLinkedin className="text-3xl cursor-pointer"></AiFillLinkedin>
          </Link>
          <Link className="ml-4" href={information?.instagram || "/"} passHref>
            <AiOutlineInstagram className="text-3xl cursor-pointer"></AiOutlineInstagram>
          </Link>
          <Link className="ml-4" href={information?.github || "/"} passHref>
            <AiFillGithub className="text-3xl cursor-pointer"></AiFillGithub>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center justify-center w-[700px]"
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/Nuevos/hero.png"
            height={500}
            width={500}
          />
          <div className="flex flex-col w-full gap-3 text-center mt-5 items-center">
            <h1 className="font-bold text-black text-5xl md:text-7xl">
              {information?.name + " " + information?.lastname}
            </h1>
            <h4 className="text-2xl font-medium text-rosewood ">
              {information?.degrees}
            </h4>
            <div className="flex md:hidden items-center justify-center gap-8 w-min text-black">
              <Link className="" href={information?.linkedin || "/"} passHref>
                <AiFillLinkedin className="text-3xl cursor-pointer"></AiFillLinkedin>
              </Link>
              <Link className="" href={information?.instagram || "/"} passHref>
                <AiOutlineInstagram className="text-3xl cursor-pointer"></AiOutlineInstagram>
              </Link>
              <Link className="" href={information?.github || "/"} passHref>
                <AiFillGithub className="text-3xl cursor-pointer"></AiFillGithub>
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="container flex flex-col items-center justify-center w-min">
          <p></p>
        </div>
      </section>
      <div className=" flex items-center justify-between h-1/6 text-rosewood mx-4 md:mx-0 mt-6 md:mt-0">
        <div className="flex gap-2">
          <FaReact className="text-3xl cursor-pointer "></FaReact>
          <p className="text-lg font-bold cursor-pointer hidden md:flex">
            ReactJs
          </p>
        </div>
        <div className="flex gap-2">
          <DiPostgresql className="text-3xl cursor-pointer "></DiPostgresql>
          <p className="text-xl font-bold cursor-pointer hidden md:flex">
            PostgreSQL
          </p>
        </div>
        <div className="flex gap-2">
          <DiRubyRough className="text-3xl cursor-pointer "></DiRubyRough>
          <p className="text-xl font-bold cursor-pointer  hidden md:flex">
            Ruby on Rails
          </p>
        </div>
        <div className="flex gap-2">
          <DiNodejsSmall className="text-3xl cursor-pointer "></DiNodejsSmall>
          <p className="text-xl font-bold cursor-pointer hidden md:flex">
            NodeJs
          </p>
        </div>
        <div className="flex gap-2">
          <SiFlutter className="text-3xl cursor-pointer "></SiFlutter>
          <p className="text-xl font-bold cursor-pointer hidden md:flex">
            Flutter
          </p>
        </div>
        <div className="flex gap-2">
          <FaPython className="text-3xl cursor-pointer "></FaPython>
          <p className="text-xl font-bold cursor-pointer  hidden md:flex">
            Python
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
