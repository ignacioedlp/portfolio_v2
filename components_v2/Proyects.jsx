import React, { useEffect, useState } from 'react'
import { FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql, DiRubyRough, DiNodejsSmall } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import Image from 'next/image'
import { getIconTech } from '../libs/techIcon';

function Proyects({ proyects }) {

  const [currentProyect, setCurrentProyect] = useState(0);
  const [filterProyects, setFilterProyects] = useState([]);
  const [totalProyects, setTotalProyects] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentProyect === totalProyects - 1) {
        setCurrentProyect(0);
      } else {
        setCurrentProyect(currentProyect + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProyect]);

  useEffect(() => {
    setFilterProyects(proyects);
    setTotalProyects(proyects.length);
  }, [proyects]);


  const handleFilter = (filter) => {
    if (filter === 'All') {
      setFilterProyects(proyects);
      setTotalProyects(proyects.length);
      setCurrentProyect(0);
      setCurrentCategory('All');
    } else {
      const filtered = proyects.filter(proyect => proyect.categories.includes(filter));
      setFilterProyects(filtered);
      setTotalProyects(filtered.length);
      setCurrentProyect(0);
      setCurrentCategory(filter);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl my-9 md:my-0 md:h-screen container mx-auto font-montserrat" id='projects'>
      <div className="flex-col items-center text-center w-full justify-center ">
        <h1 className="text-[40px] font-bold title-font  text-rosewood tracking-widest uppercase mb-10">
          Projects
        </h1>
        <div className='flex justify-center items-center gap-3 text-[18px] md:text-[23px] uppercase font-bold'>
          <div>
            <p className={`cursor-pointer ${currentCategory == 'All' ? 'text-rosewood' : 'text-black'}`} onClick={() => handleFilter('All')}>All</p>
          </div>
          <div>
            <p className={`cursor-pointer ${currentCategory == 'Web' ? 'text-rosewood' : 'text-black'}`} onClick={() => handleFilter('Web')}>Web</p>
          </div>
          <div>
            <p className={`cursor-pointer ${currentCategory == 'APIs' ? 'text-rosewood' : 'text-black'}`} onClick={() => handleFilter('APIs')}>APIS</p>
          </div>
          <div>
            <p className={`cursor-pointer ${currentCategory == 'Backend' ? 'text-rosewood' : 'text-black'}`} onClick={() => handleFilter('Backend')}>BACKEND</p>
          </div>
          <div>
            <p className={`cursor-pointer ${currentCategory == 'Web3' ? 'text-rosewood' : 'text-black'}`} onClick={() => handleFilter('Web3')}>WEB3</p>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font h-2/3 flex justify-center mt-6 md:mt-0">
        <div className=" flex px-5 flex-col md:flex-row  items-center justify-center ">
          <div className=" md:w-1/2  mb-10 md:mb-0 ">
            <Image className="hidden md:block object-cover object-center rounded border-2 border-rosewood" alt="hero" src={filterProyects[currentProyect]?.image} width={630} height={454} />
            <Image className="md:hidden block object-cover object-center rounded border-2 border-rosewood" alt="hero" src={filterProyects[currentProyect]?.image} width={400} height={250} />
            <div className='flex justify-center items-center mt-4'>
              {filterProyects?.map((proyect, index) => (
                <div key={proyect.title} className={`h-2 w-2 rounded-full mx-1 ${index === currentProyect ? 'bg-rosewood' : 'bg-gray-300'}`}
                  onClick={() => setCurrentProyect(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 md:p-5 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="text-black font-bold text-[43px]">{filterProyects[currentProyect]?.titleEn}</h1>
            <div className='h-[144px] md:w-[590px]'>
              <p className=" text-justify font-medium text-[20px] text-zinc-700">{filterProyects[currentProyect]?.description}</p>
            </div>
            <p className=" font-bold text-[15px] text-black uppercase">TECHS</p>
            <div className='flex justify-start gap-6 items-center text-[30px] text-rosewood mb-8'>
              {filterProyects[currentProyect]?.techs.map((tech) => (
                <div key={tech}>
                  {getIconTech(tech, "text-3xl", null, "text-rosewood")}
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <a className="flex text-center align-middle justify-center items-center text-seasalt bg-rosewood py-[10px] px-[46px] focus:outline-none rounded-[10px] text-[20px]" href={filterProyects[currentProyect]?.link}>Visit</a>
              <a className="ml-4 flex text-center align-middle justify-center items-center text-rosewood bg-seasalt border-2 border-rosewood py-[10px] px-[46px] focus:outline-none  rounded-[10px]  text-[20px] " href={filterProyects[currentProyect]?.link_github}>View proyect</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Proyects