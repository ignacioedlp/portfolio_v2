import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [proyects, setProyect] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lenguage, setLenguage] = useState("es");
  const [repositories, setRepositories] = useState([]);
  const [information, setInformation] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchProyects();
    fetchRepositories();
    fetchInformation();
    fetchSkills();
  }, []);

  const fetchRepositories = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/ignacioedlp/repos?per_page=100`
      );
      const data = await res.json();

      setRepositories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProyects = async () => {
    try {
      const res = await fetch(
        `https://portfolio-cms-production.up.railway.app/api/proyects`
      );
      const data = await res.json();

      data.docs.forEach((proyect) => {
        let text;
        if (
          proyect.description &&
          proyect.description[0] &&
          proyect.description[0].children &&
          proyect.description[0].children[0]
        ) {
          text = proyect.description[0].children[0].text;
        }

        let newItem = {
          titleEs: proyect.title,
          titleEn: proyect.title,
          description: text,
          image: proyect.image.url,
          link: proyect.url_proyect || "/",
          link_github: proyect.url_github || "/",
          techs: proyect.techs,
        };

        setProyect((prevProyects) => [...prevProyects, newItem]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInformation = async () => {
    try {
      const res = await fetch(
        `https://portfolio-cms-production.up.railway.app/api/informationUsers/63a76d2ca8ebee97cc9f2d26`
      );
      const data = await res.json();

      setInformation(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await fetch(
        `https://portfolio-cms-production.up.railway.app/api/skills?limit=30`
      );
      const data = await res.json();

      const groupedByCategory = data.docs.reduce((acc, obj) => {
        if (!acc[obj.category]) {
          acc[obj.category] = [];
        }
        acc[obj.category].push(obj);
        return acc;
      }, {});

      const arrayGroupedByCategory = Object.entries(groupedByCategory).map(
        ([category, objects]) => ({
          category,
          objects,
        })
      );

      setSkills(arrayGroupedByCategory);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        proyects,
        loading,
        lenguage,
        setLenguage,
        repositories,
        information,
        skills,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
