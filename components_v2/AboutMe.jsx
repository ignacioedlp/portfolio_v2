import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { info } from "autoprefixer";

const headerData = [
  {
    title: "Years Web Dev",
    subtitle: "2+",
  },
  {
    title: "Years old",
    subtitle: "22",
  },
  {
    title: "Cute cat",
    subtitle: "1",
  },
  {
    title: "Commits",
    subtitle: "3000+",
  }
];

function AboutMe({ information }) {
  return (
    <div className="container flex items-center h-screen px-4 mx-auto md:flex-row max-w-8xl font-montserrat" id="about-me">
      <motion.div className="hidden mb-10 lg:max-w-lg md:w-1/3 md:mb-0 md:flex" initial={{ opacity: 0, scale: 0.5 }}
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
      <div className="flex flex-col items-center gap-16 m-auto text-center md:max-w-[630px] md:items-start md:text-left">
        <div className="flex justify-between w-full">
          {headerData.map((item, index) => (
            <div className="flex flex-col items-center justify-center gap-3" index={index}>
              <span className="text-4xl font-bold text-rosewood">
                {item.subtitle}
              </span>
              <span className="text-sm font-bold text-rosewood">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <p className="text-lg text-black">
          Programmer Analyst and Full Stack Developer with 2 years of experience in the spanish and english speaking environment. I develop new backend functionalities using Ruby on Rails. I also create web interfaces using ReactJs and mobile applications with Flutter. Finally, I integrate APIs to extract, process and transform data using NodeJs and AWS.
        </p>
        <p className="text-lg text-black">
          I live in La Plata, Argentina. I am 22 years old. I graduated as a Programmer Analyst at the National University of La Plata. And now I'm finishing my second degree in "Systems Engineering". My hobbies are exercising, photography and video games.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
