import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql, DiRubyRough, DiNodejsSmall } from "react-icons/di";
import { SiFlutter } from "react-icons/si";

function TechStack() {
  return (
    <div className="flex items-center justify-between w-full mx-4 text-rosewood md:mx-auto md:mt-0">
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
  )
}

function Socials({ information }) {
  return (
    <div className="flex items-center justify-between w-full">
      <button className="animate-border inline-block rounded-[30px] bg-gradient-to-r from-seasalt via-rosewood to-black_bean bg-[length:400%_400%] p-1" >
        <div className=" text-seasalt items-center px-3 py-1 text-base rounded-[30px] bg-licorice md:mt-0 lg:inline-flex font-montserrat">
          <a download={
            information?.cv_english
          }
            href={
              information?.cv_english
            }>Resume</a>
        </div>
      </button>
      <div className="flex gap-3">
        <Link href={information?.linkedin || "/"} passHref>
          <FiLinkedin className="text-3xl cursor-pointer"></FiLinkedin>
        </Link>
        <Link href={information?.instagram || "/"} passHref>
          <FiInstagram className="text-3xl cursor-pointer"></FiInstagram>
        </Link>
        <Link href={information?.github || "/"} passHref>
          <FiGithub className="text-3xl cursor-pointer"></FiGithub>
        </Link>
      </div>
    </div>
  );
}

function HeroText({ information }) {
  return (
    <div className="flex flex-col items-center md:items-start justify-center text-center md:w-[625px] space-y-3 md:space-y-10">
      <div className="flex flex-col items-start gap-2 md:gap-5 md:items-start">
        <span className="font-bold text-black text-md md:text-xl">
          I AM
        </span>
        <h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-[54px] font-bold text-black text-left"
        >
          Ignacio Cafiero Cafiero
        </h1>
        <h4
          className="text-2xl md:text-[33px] font-medium text-gray-800 text-start"
        >
          {information?.degrees}
        </h4>
      </div>
      <Socials information={information} />
    </div>
  );
}

function Hero({ information }) {
  return (
    <div className="flex flex-col items-center justify-around w-full h-full p-3 mx-auto md:my-0 flex-nowrap max-w-8xl font-montserrat">
      <section className="flex flex-col justify-around w-full md:flex-row">
        <HeroText information={information} />
        <div
          className="flex flex-col items-center justify-center"
        >
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/Nuevos/hero.png"
            height={563}
            width={563}
          />
        </div>
      </section>
      <TechStack information={information} />
    </div>
  );
}

export default Hero;
