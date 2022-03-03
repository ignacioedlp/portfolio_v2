import { createContext, useEffect, useState } from "react";
import { client } from "../libs/client";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [proyects, setProyect] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lenguage, setLenguage] = useState("es");

  useEffect(() => {
    fetchProyects();
  }, []);

  const fetchProyects = async () => {
    //QUERY QROQ SANINY GET ALL PROYECTS
    const query = `
      *[_type == "proyects"]{
        "titleEs": titleEs,
        "titleEn": titleEn,
        "description": description,
        "image": image.asset->url,
        "link": link
      }
    `;
    const sanityResponse = await client.fetch(query);
    setProyect([]);

    sanityResponse.forEach((proyect) => {
      let newItem = {
        titleEs: proyect.titleEs,
        titleEn: proyect.titleEn,
        description: proyect.description,
        image: proyect.image,
        link: proyect.link,
      };

      setProyect((prevProyects) => [...prevProyects, newItem]);
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        proyects,
        loading,
        lenguage,
        setLenguage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
