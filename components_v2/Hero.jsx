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
      <section className="flex justify-center mx-auto h-3/4 justify-items-center my-9 md:my-0 flex-nowrap max-w-7xl font-montserrat">
        <div className="container flex-col items-center justify-center hidden gap-8 text-black md:flex w-min">
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
            height={360}
            width={360}
          />
          <div className="flex flex-col items-center w-full gap-3 mt-5 text-center">
            <h1 className="text-5xl font-bold text-black md:text-7xl">
              Ignacio Cafiero
            </h1>
            <h4 className="text-2xl font-medium text-rosewood ">
              {information?.degrees}
            </h4>
            <div className="flex items-center justify-center gap-8 text-black md:hidden w-min">
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
      <div className="flex items-center justify-between mx-4 mt-6 h-1/6 text-rosewood md:mx-auto md:mt-0 max-w-7xl">
        <div className="flex gap-2">
          <FaReact className="text-3xl cursor-pointer "></FaReact>
          <p className="hidden text-lg font-bold cursor-pointer md:flex">
            ReactJs
          </p>
        </div>
        <div className="flex gap-2">
          <DiPostgresql className="text-3xl cursor-pointer "></DiPostgresql>
          <p className="hidden text-xl font-bold cursor-pointer md:flex">
            PostgreSQL
          </p>
        </div>
        <div className="flex gap-2">
          <DiRubyRough className="text-3xl cursor-pointer "></DiRubyRough>
          <p className="hidden text-xl font-bold cursor-pointer md:flex">
            Ruby on Rails
          </p>
        </div>
        <div className="flex gap-2">
          <DiNodejsSmall className="text-3xl cursor-pointer "></DiNodejsSmall>
          <p className="hidden text-xl font-bold cursor-pointer md:flex">
            NodeJs
          </p>
        </div>
        <div className="flex gap-2">
          <SiFlutter className="text-3xl cursor-pointer "></SiFlutter>
          <p className="hidden text-xl font-bold cursor-pointer md:flex">
            Flutter
          </p>
        </div>
        <div className="flex gap-2">
          <FaPython className="text-3xl cursor-pointer "></FaPython>
          <p className="hidden text-xl font-bold cursor-pointer md:flex">
            Python
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
